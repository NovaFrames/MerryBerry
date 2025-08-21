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
import { Plus, Eye, Pencil, Trash2, X, Search, Filter, BarChart3, List, Image } from "lucide-react";

const Fra2 = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [viewModal, setViewModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Filter features based on search
  const filteredFeatures = features.filter((feature) => {
    return feature.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Features Management</h1>
        <p className="text-gray-600">Manage your feature listings and details</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none">
                <option value="all">All Features</option>
                <option value="recent">Recently Added</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={() => {
              resetForm();
              setOpenModal(true);
            }}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
          >
            <Plus size={18} /> Add Feature
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((f) => (
            <div
              key={f.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-amber-500 text-white text-xs font-semibold px-2 py-1 rounded-br">
                  Feature
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{f.title}</h3>
                
                <h4 className="font-medium text-gray-700 mb-2">Key Points:</h4>
                <ul className="text-sm text-gray-600 mb-6">
                  {f.description?.slice(0, 3).map((d, i) => (
                    <li key={i} className="mb-1 flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>{d.length > 60 ? `${d.substring(0, 60)}...` : d}</span>
                    </li>
                  ))}
                  {f.description?.length > 3 && (
                    <li className="text-amber-500 font-medium">+{f.description.length - 3} more</li>
                  )}
                </ul>

                {/* Actions */}
                <div className="flex justify-between border-t pt-4">
                  <button
                    onClick={() => setViewModal(f)}
                    className="text-gray-600 hover:text-amber-600 flex items-center gap-1 transition-colors text-sm font-medium"
                  >
                    <Eye size={16} /> View
                  </button>
                  <button
                    onClick={() => {
                      setEditModal(f);
                      setTitle(f.title);
                      setDescription(f.description || [""]);
                      setImageURL(f.image);
                      setOpenModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors text-sm font-medium"
                  >
                    <Pencil size={16} /> Edit
                  </button>
                  <button
                    onClick={() => setDeleteId(f.id)}
                    className="text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors text-sm font-medium"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredFeatures.length === 0 && (
        <div className="bg-white rounded-xl p-8 text-center shadow-md mt-6">
          <p className="text-gray-500 text-lg">No features found. Try adjusting your search or add a new feature.</p>
        </div>
      )}

      {/* Add/Edit Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                {editModal ? "Edit Feature" : "Add Feature"}
              </h2>
              <button
                onClick={() => {
                  setOpenModal(false);
                  setEditModal(null);
                }}
                className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Feature Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Dynamic Description Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description Points</label>
                {description.map((desc, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={desc}
                      onChange={(e) =>
                        setDescription(description.map((d, idx) => (idx === i ? e.target.value : d)))
                      }
                      className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder={`Point ${i + 1}`}
                    />
                    {description.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setDescription(description.filter((_, idx) => idx !== i))}
                        className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setDescription([...description, ""])}
                  className="text-amber-600 hover:text-amber-700 mt-2 text-sm font-medium flex items-center gap-1"
                >
                  <Plus size={16} /> Add Point
                </button>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Image className="w-8 h-8 mb-4 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span></p>
                      <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                    </div>
                    <input 
                      type="file" 
                      onChange={(e) => setImageFile(e.target.files[0])} 
                      className="hidden" 
                      accept="image/*" 
                    />
                  </label>
                </div>
                {imageURL && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-700 mb-2">Current Image:</p>
                    <img src={imageURL} alt="preview" className="w-24 h-24 rounded-lg object-cover" />
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                >
                  {editModal ? "Update Feature" : "Add Feature"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Feature Details</h2>
              <button
                onClick={() => setViewModal(null)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="h-56 overflow-hidden rounded-lg mb-6">
                <img
                  src={viewModal.image}
                  alt={viewModal.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{viewModal.title}</h2>
              
              <h3 className="font-semibold text-gray-700 mb-3">Description Points:</h3>
              <ul className="space-y-2">
                {viewModal.description.map((d, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this feature? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
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