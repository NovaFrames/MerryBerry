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
import { Plus, X, Eye, Pencil, Trash2, Search, Filter, DollarSign, TrendingUp, BarChart3 } from "lucide-react";

const Fra1 = () => {
  const [franchises, setFranchises] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState("add"); // add | edit | view
  const [selectedFranchise, setSelectedFranchise] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("all");

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

  // Filter franchises based on search and filter options
  const filteredFranchises = franchises.filter((franchise) => {
    const matchesSearch = franchise.title.toLowerCase().includes(searchQuery.toLowerCase());
    // Add more filter logic here if needed
    return matchesSearch;
  });

  // Calculate statistics
  const totalFranchises = franchises.length;
  const avgPrice = totalFranchises > 0 
    ? franchises.reduce((sum, franchise) => sum + parseFloat(franchise.price || 0), 0) / totalFranchises 
    : 0;
  const avgInvestment = totalFranchises > 0 
    ? franchises.reduce((sum, franchise) => sum + parseFloat(franchise.totalInvestment || 0), 0) / totalFranchises 
    : 0;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Franchise Management</h1>
        <p className="text-gray-600">Manage your franchise listings and details</p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl p-6 shadow-md mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search franchises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={filterOption}
                onChange={(e) => setFilterOption(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none"
              >
                <option value="all">All Franchises</option>
                <option value="low">Low Investment</option>
                <option value="medium">Medium Investment</option>
                <option value="high">High Investment</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={openAddModal}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
          >
            <Plus size={18} /> Add Franchise
          </button>
        </div>
      </div>

      {/* Franchise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFranchises.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="h-48 overflow-hidden">
              <img
                src={item.img}
                alt={item.imgAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <DollarSign size={16} className="mr-1" />
                <span className="font-medium">Price:</span>
                <span className="ml-1">{item.price}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <TrendingUp size={16} className="mr-1" />
                <span className="font-medium">Investment:</span>
                <span className="ml-1">{item.totalInvestment}</span>
              </div>
              
              <h3 className="font-medium text-gray-700 mb-2">Key Features:</h3>
              <ul className="text-sm text-gray-600 mb-6">
                {item.features?.slice(0, 3).map((f, idx) => (
                  <li key={idx} className="mb-1 flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>{f.length > 60 ? `${f.substring(0, 60)}...` : f}</span>
                  </li>
                ))}
                {item.features?.length > 3 && (
                  <li className="text-amber-500 font-medium">+{item.features.length - 3} more</li>
                )}
              </ul>

              {/* Actions */}
              <div className="flex justify-between border-t pt-4">
                <button
                  onClick={() => openViewModal(item)}
                  className="text-gray-600 hover:text-amber-600 flex items-center gap-1 transition-colors"
                >
                  <Eye size={16} /> View
                </button>
                <button
                  onClick={() => openEditModal(item)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <Pencil size={16} /> Edit
                </button>
                <button
                  onClick={() => setDeleteId(item.id)}
                  className="text-red-600 hover:text-red-800 flex items-center gap-1 transition-colors"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFranchises.length === 0 && (
        <div className="bg-white rounded-xl p-8 text-center shadow-md mt-6">
          <p className="text-gray-500 text-lg">No franchises found. Try adjusting your search or add a new franchise.</p>
        </div>
      )}

      {/* Main Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                {modalType === "view" 
                  ? "Franchise Details" 
                  : modalType === "add" ? "Add Franchise" : "Edit Franchise"}
              </h2>
              <button
                onClick={() => setOpenModal(false)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            {/* View Modal */}
            {modalType === "view" && selectedFranchise && (
              <div className="p-6">
                <div className="h-56 overflow-hidden rounded-lg mb-6">
                  <img
                    src={selectedFranchise.img}
                    alt={selectedFranchise.imgAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedFranchise.title}</h2>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="text-lg font-semibold text-gray-800">{selectedFranchise.price}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Investment</p>
                    <p className="text-lg font-semibold text-gray-800">{selectedFranchise.totalInvestment}</p>
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-700 mb-3">Features:</h3>
                <ul className="space-y-2">
                  {selectedFranchise.features?.map((f, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add / Edit Modal */}
            {(modalType === "add" || modalType === "edit") && (
              <form onSubmit={handleSaveFranchise} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="Franchise Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                      type="text"
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Investment</label>
                    <input
                      type="text"
                      placeholder="Total Investment"
                      value={totalInvestment}
                      onChange={(e) => setTotalInvestment(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input 
                        type="file" 
                        onChange={(e) => setImage(e.target.files[0])} 
                        className="hidden" 
                        accept="image/*" 
                      />
                    </label>
                  </div> 
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Features</label>
                  {features.map((f, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={f}
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                        className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder={`Feature ${index + 1}`}
                      />
                      {features.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFeatureField(index)}
                          className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addFeatureField}
                    className="text-amber-600 hover:text-amber-700 mt-2 text-sm font-medium flex items-center gap-1"
                  >
                    <Plus size={16} /> Add Feature
                  </button>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Saving..." : "Save Franchise"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Confirm Delete</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this franchise? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
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

export default Fra1;