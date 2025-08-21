import React, { useEffect, useState } from "react";
import { db, storage } from "../../utils/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Plus, Eye, Pencil, Trash2, X } from "lucide-react";

const Fra2 = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState([""]);
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  // Fetch features
  const fetchFeatures = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "features"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setFeatures(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  // Handle Image Upload
  const uploadImage = async () => {
    if (!imageFile) return "";
    const storageRef = ref(storage, `features/${Date.now()}-${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    return await getDownloadURL(storageRef);
  };

  // Add / Update Feature
  const handleSave = async () => {
    let url = imageURL;
    if (imageFile) url = await uploadImage();

    const featureData = {
      title,
      description: description.filter((d) => d.trim() !== ""),
      image: url,
      createdAt: serverTimestamp(),
    };

    if (editModal) {
      await updateDoc(doc(db, "features", editModal.id), featureData);
    } else {
      await addDoc(collection(db, "features"), featureData);
    }

    setOpenModal(false);
    setEditModal(null);
    resetForm();
    fetchFeatures();
  };

  // Delete Feature
  const handleDelete = async () => {
    if (deleteId) {
      await deleteDoc(doc(db, "features", deleteId));
      setDeleteId(null);
      fetchFeatures();
    }
  };

  // Reset form
  const resetForm = () => {
    setTitle("");
    setDescription([""]);
    setImageFile(null);
    setImageURL("");
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Features</h1>
        <button
          onClick={() => {
            resetForm();
            setOpenModal(true);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} /> Add Feature
        </button>
      </div>

      {/* Cards */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white border rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:scale-[1.02] transition-transform duration-200"
            >
              {/* Image */}
              <img
                src={f.image}
                alt={f.title}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <ul className="text-sm text-gray-600 flex-1 list-disc pl-5">
                  {f.description?.slice(0, 3).map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                  {f.description?.length > 3 && (
                    <li className="italic text-gray-400">+ more...</li>
                  )}
                </ul>

                {/* Actions */}
                <div className="flex justify-end gap-4 mt-4">
                  <Eye
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setViewModal(f)}
                  />
                  <Pencil
                    className="text-green-600 cursor-pointer"
                    onClick={() => {
                      setEditModal(f);
                      setTitle(f.title);
                      setDescription(f.description || [""]);
                      setImageURL(f.image);
                      setOpenModal(true);
                    }}
                  />
                  <Trash2
                    className="text-red-600 cursor-pointer"
                    onClick={() => setDeleteId(f.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add/Edit Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => {
                setOpenModal(false);
                setEditModal(null);
              }}
              className="absolute top-3 right-3"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">
              {editModal ? "Edit Feature" : "Add Feature"}
            </h2>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded mb-3"
            />

            {/* Dynamic Description Fields */}
            <div>
              <label className="font-medium">Descriptions</label>
              {description.map((desc, i) => (
                <div key={i} className="flex gap-2 mt-2">
                  <input
                    type="text"
                    value={desc}
                    onChange={(e) =>
                      setDescription(description.map((d, idx) => (idx === i ? e.target.value : d)))
                    }
                    className="w-full border p-2 rounded"
                    placeholder={`Point ${i + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => setDescription([...description, ""])}
                    className="bg-blue-500 text-white px-2 rounded"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>

            {/* Image Upload */}
            <div className="mt-3">
              <label className="font-medium">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full border p-2 rounded mt-2"
              />
              {imageURL && <img src={imageURL} alt="preview" className="w-24 h-24 mt-2 rounded" />}
            </div>

            <button
              onClick={handleSave}
              className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button onClick={() => setViewModal(null)} className="absolute top-3 right-3">
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">{viewModal.title}</h2>
            <img src={viewModal.image} alt={viewModal.title} className="w-40 h-40 mb-4 rounded" />
            <ul className="list-disc pl-6">
              {viewModal.description.map((d, i) => (
                <li key={i} className="mb-1">{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 text-center">
            <p className="mb-4">Are you sure you want to delete this feature?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fra2;
