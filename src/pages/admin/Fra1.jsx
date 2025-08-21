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
import { Plus, X, Eye, Pencil, Trash2 } from "lucide-react";

const Fra1 = () => {
  const [franchises, setFranchises] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add"); // add | edit | view
  const [selectedFranchise, setSelectedFranchise] = useState(null);
  const [loading, setLoading] = useState(false);

  // Delete confirmation modal
  const [deleteId, setDeleteId] = useState(null);

  // Form state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [totalInvestment, setTotalInvestment] = useState("");
  const [image, setImage] = useState(null);
  const [features, setFeatures] = useState([""]);

  // Fetch franchise data
  const fetchFranchises = async () => {
    const querySnapshot = await getDocs(collection(db, "franchise"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setFranchises(data);
  };

  useEffect(() => {
    fetchFranchises();
  }, []);

  // Reset form
  const resetForm = () => {
    setTitle("");
    setPrice("");
    setTotalInvestment("");
    setImage(null);
    setFeatures([""]);
    setSelectedFranchise(null);
  };

  // Handle feature add/remove
  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeatureField = () => setFeatures([...features, ""]);
  const removeFeatureField = (index) =>
    setFeatures(features.filter((_, i) => i !== index));

  // Add / Edit Franchise
  const handleSaveFranchise = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = selectedFranchise?.img || "";
      if (image) {
        const imageRef = ref(storage, `franchise/${Date.now()}-${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      if (modalType === "add") {
        await addDoc(collection(db, "franchise"), {
          title,
          price,
          totalInvestment,
          img: imageUrl,
          imgAlt: title,
          features: features.filter((f) => f.trim() !== ""),
          createdAt: serverTimestamp(),
        });
      } else if (modalType === "edit" && selectedFranchise) {
        const docRef = doc(db, "franchise", selectedFranchise.id);
        await updateDoc(docRef, {
          title,
          price,
          totalInvestment,
          img: imageUrl,
          imgAlt: title,
          features: features.filter((f) => f.trim() !== ""),
        });
      }

      resetForm();
      setOpenModal(false);
      fetchFranchises();
    } catch (error) {
      console.error("Error saving franchise:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Franchise
  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteDoc(doc(db, "franchise", deleteId));
      fetchFranchises();
    } catch (error) {
      console.error("Error deleting franchise:", error);
    } finally {
      setDeleteId(null);
    }
  };

  // Open modals
  const openAddModal = () => {
    resetForm();
    setModalType("add");
    setOpenModal(true);
  };

  const openEditModal = (item) => {
    setModalType("edit");
    setSelectedFranchise(item);
    setTitle(item.title);
    setPrice(item.price);
    setTotalInvestment(item.totalInvestment);
    setImage(null);
    setFeatures(item.features || [""]);
    setOpenModal(true);
  };

  const openViewModal = (item) => {
    setModalType("view");
    setSelectedFranchise(item);
    setOpenModal(true);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Franchise List</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} /> Add Franchise
        </button>
      </div>

      {/* Franchise Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {franchises.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md bg-white">
            <img
              src={item.img}
              alt={item.imgAlt}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700">Price: {item.price}</p>
            <p className="text-gray-700">Investment: {item.totalInvestment}</p>
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
              {item.features?.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => openViewModal(item)}
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <Eye size={16} /> View
              </button>
              <button
                onClick={() => openEditModal(item)}
                className="text-green-600 hover:underline flex items-center gap-1"
              >
                <Pencil size={16} /> Edit
              </button>
              <button
                onClick={() => setDeleteId(item.id)}
                className="text-red-600 hover:underline flex items-center gap-1"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Main Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative p-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={22} />
            </button>

            {/* View Modal */}
            {modalType === "view" && selectedFranchise && (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedFranchise.title}
                </h2>
                <img
                  src={selectedFranchise.img}
                  alt={selectedFranchise.imgAlt}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <p><strong>Price:</strong> {selectedFranchise.price}</p>
                <p><strong>Total Investment:</strong> {selectedFranchise.totalInvestment}</p>
                <h3 className="mt-4 font-semibold">Features:</h3>
                <ul className="list-disc pl-5">
                  {selectedFranchise.features?.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add / Edit Modal */}
            {(modalType === "add" || modalType === "edit") && (
              <form onSubmit={handleSaveFranchise} className="space-y-4">
                <h2 className="text-xl font-bold mb-4">
                  {modalType === "add" ? "Add Franchise" : "Edit Franchise"}
                </h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Total Investment"
                  value={totalInvestment}
                  onChange={(e) => setTotalInvestment(e.target.value)}
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full"
                  accept="image/*"
                />

                {/* Features */}
                <div>
                  <label className="font-semibold block mb-2">Features</label>
                  {features.map((f, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={f}
                        onChange={(e) =>
                          handleFeatureChange(index, e.target.value)
                        }
                        className="flex-1 border p-2 rounded"
                        placeholder={`Feature ${index + 1}`}
                      />
                      {features.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFeatureField(index)}
                          className="bg-red-500 text-white px-2 rounded"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeatureField}
                    className="text-blue-600 mt-2 text-sm"
                  >
                    + Add Feature
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg"
                >
                  {loading ? "Saving..." : "Save Franchise"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-6">Are you sure you want to delete this franchise?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white"
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

export default Fra1;
