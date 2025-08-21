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
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { Plus, X, Eye, Edit, Trash2, Search, Filter, Gift, TrendingUp, Star, XCircle } from "lucide-react";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [newOffer, setNewOffer] = useState({
    category: "",
    title: "",
    date: "",
    expiry: "",
    description: "",
    popular: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [editImageFile, setEditImageFile] = useState(null);

  // Fetch Offers
  const fetchOffers = async () => {
    const querySnapshot = await getDocs(collection(db, "offers"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOffers(data);
    setFilteredOffers(data);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  // Filter offers based on search term
  useEffect(() => {
    if (searchTerm) {
      const filtered = offers.filter(offer => 
        offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOffers(filtered);
    } else {
      setFilteredOffers(offers);
    }
  }, [searchTerm, offers]);

  // Add Offer
  const handleAddOffer = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imgUrl = "";
      if (imageFile) {
        const storageRef = ref(
          storage,
          `offers/${Date.now()}-${imageFile.name}`
        );
        await uploadBytes(storageRef, imageFile);
        imgUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "offers"), {
        ...newOffer,
        img: imgUrl,
        createdAt: serverTimestamp(),
      });

      setOpenModal(false);
      setNewOffer({
        category: "",
        title: "",
        date: "",
        expiry: "",
        description: "",
        popular: false,
      });
      setImageFile(null);
      fetchOffers();
    } catch (error) {
      console.error("Error adding offer:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update Offer
  const handleUpdateOffer = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imgUrl = selectedOffer.img;
      if (editImageFile) {
        // Delete old image if exists
        if (selectedOffer.img) {
          const oldImageRef = ref(storage, selectedOffer.img);
          try {
            await deleteObject(oldImageRef);
          } catch (error) {
            console.log("Old image doesn't exist or already deleted");
          }
        }
        
        // Upload new image
        const storageRef = ref(
          storage,
          `offers/${Date.now()}-${editImageFile.name}`
        );
        await uploadBytes(storageRef, editImageFile);
        imgUrl = await getDownloadURL(storageRef);
      }

      const offerRef = doc(db, "offers", selectedOffer.id);
      await updateDoc(offerRef, {
        ...selectedOffer,
        img: imgUrl,
        updatedAt: serverTimestamp(),
      });

      setEditModal(false);
      setSelectedOffer(null);
      setEditImageFile(null);
      fetchOffers();
    } catch (error) {
      console.error("Error updating offer:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Offer
  const handleDeleteOffer = async () => {
    setLoading(true);

    try {
      // Delete image from storage if exists
      if (selectedOffer.img) {
        const imageRef = ref(storage, selectedOffer.img);
        try {
          await deleteObject(imageRef);
        } catch (error) {
          console.log("Image doesn't exist or already deleted");
        }
      }

      // Delete document from Firestore
      await deleteDoc(doc(db, "offers", selectedOffer.id));

      setDeleteModal(false);
      setSelectedOffer(null);
      fetchOffers();
    } catch (error) {
      console.error("Error deleting offer:", error);
    } finally {
      setLoading(false);
    }
  };

  // Open View Modal
  const openViewModal = (offer) => {
    setSelectedOffer(offer);
    setViewModal(true);
  };

  // Open Edit Modal
  const openEditModal = (offer) => {
    setSelectedOffer({...offer});
    setEditModal(true);
  };

  // Open Delete Modal
  const openDeleteModal = (offer) => {
    setSelectedOffer(offer);
    setDeleteModal(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Offers Management</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search offers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-300 focus:border-amber-300 outline-none"
            />
          </div>
          
          <button
            onClick={() => setOpenModal(true)}
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow-sm transition"
          >
            <Plus size={20} /> Add Offer
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Total Offers</p>
              <h3 className="text-2xl font-bold text-gray-800">{offers.length}</h3>
            </div>
            <div className="p-3 rounded-lg bg-amber-100 text-amber-600">
              <Gift size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Active Offers</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {offers.filter(offer => new Date(offer.expiry) > new Date()).length}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-emerald-100 text-emerald-600">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Popular Offers</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {offers.filter(offer => offer.popular).length}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
              <Star size={24} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Expired Offers</p>
              <h3 className="text-2xl font-bold text-gray-800">
                {offers.filter(offer => new Date(offer.expiry) < new Date()).length}
              </h3>
            </div>
            <div className="p-3 rounded-lg bg-rose-100 text-rose-600">
              <XCircle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left border-b border-gray-200">
                <th className="p-4 font-medium text-gray-500">Image</th>
                <th className="p-4 font-medium text-gray-500">Name</th>
                <th className="p-4 font-medium text-gray-500">Category</th>
                <th className="p-4 font-medium text-gray-500">Starting Date</th>
                <th className="p-4 font-medium text-gray-500">Expiry Date</th>
                <th className="p-4 font-medium text-gray-500">Popular</th>
                <th className="p-4 font-medium text-gray-500 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOffers.length > 0 ? (
                filteredOffers.map((offer) => (
                  <tr key={offer.id} className="border-b border-gray-100 hover:bg-amber-50 transition">
                    <td className="p-4">
                      <img
                        src={offer.img}
                        alt={offer.title}
                        className="w-14 h-14 object-cover rounded-lg border border-gray-200"
                      />
                    </td>
                    <td className="p-4 font-medium text-gray-800">{offer.title}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {offer.category}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{offer.date}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        new Date(offer.expiry) < new Date() 
                          ? 'bg-rose-100 text-rose-700' 
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {offer.expiry}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        offer.popular ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {offer.popular ? '✓' : '✗'}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => openViewModal(offer)}
                          className="p-2 text-blue-500 hover:bg-blue-100 rounded-full transition"
                          title="View"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => openEditModal(offer)}
                          className="p-2 text-emerald-500 hover:bg-emerald-100 rounded-full transition"
                          title="Edit"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => openDeleteModal(offer)}
                          className="p-2 text-rose-500 hover:bg-rose-100 rounded-full transition"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center">
                      <Gift size={48} className="text-gray-300 mb-3" />
                      <p className="text-lg">No offers found</p>
                      <p className="text-sm mt-1">
                        {searchTerm ? 'Try adjusting your search terms' : 'Get started by adding your first offer'}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Offer Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative p-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
              <Plus size={24} className="inline mr-2 text-amber-600" />
              Add New Offer
            </h2>
            
            <form onSubmit={handleAddOffer} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newOffer.category}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, category: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Daily Offer">Daily Offer</option>
                    <option value="Monthly Offer">Monthly Offer</option>
                    <option value="Weekly Offer">Weekly Offer</option>
                    <option value="Limited Time Offer">Limited Time Offer</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Offer title"
                    value={newOffer.title}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, title: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Starting Date
                  </label>
                  <input
                    type="date"
                    value={newOffer.date}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, date: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    value={newOffer.expiry}
                    onChange={(e) =>
                      setNewOffer({ ...newOffer, expiry: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Offer description"
                  value={newOffer.description}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, description: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2.5 h-24 focus:ring-2 focus:ring-amber-300 outline-none"
                  required
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newOffer.popular}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, popular: e.target.checked })
                  }
                  className="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
                <span className="text-sm text-gray-700">Mark as Popular Offer</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Offer Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="w-full border border-dashed border-gray-300 rounded-lg p-2 text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2.5 rounded-lg font-medium shadow-md transition mt-4"
              >
                {loading ? "Adding Offer..." : "Add Offer"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* View Offer Modal */}
      {viewModal && selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative p-6">
            <button
              onClick={() => setViewModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
              👁️ View Offer Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedOffer.img && (
                <div className="md:col-span-2 flex justify-center">
                  <img
                    src={selectedOffer.img}
                    alt={selectedOffer.title}
                    className="w-48 h-48 object-cover rounded-xl border border-gray-200 shadow-sm"
                  />
                </div>
              )}
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Title</p>
                <p className="font-medium text-gray-800">{selectedOffer.title}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Category</p>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {selectedOffer.category}
                </span>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Starting Date</p>
                <p className="font-medium text-gray-800">{selectedOffer.date}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Expiry Date</p>
                <p className="font-medium text-gray-800">{selectedOffer.expiry}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Status</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  new Date(selectedOffer.expiry) < new Date() 
                    ? 'bg-rose-100 text-rose-700' 
                    : 'bg-emerald-100 text-emerald-700'
                }`}>
                  {new Date(selectedOffer.expiry) < new Date() ? 'Expired' : 'Active'}
                </span>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Popular</p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  selectedOffer.popular 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {selectedOffer.popular ? 'Yes' : 'No'}
                </span>
              </div>
              
              <div className="md:col-span-2 space-y-1">
                <p className="text-sm text-gray-500">Description</p>
                <p className="text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  {selectedOffer.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Offer Modal */}
      {editModal && selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl relative p-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setEditModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
              ✏️ Edit Offer
            </h2>

            <form onSubmit={handleUpdateOffer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={selectedOffer.category}
                  onChange={(e) =>
                    setSelectedOffer({ ...selectedOffer, category: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Daily Offer">Daily Offer</option>
                  <option value="Weekly Offer">Weekly Offer</option>
                  <option value="Monthly Offer">Monthly Offer</option>
                  <option value="Limited Time Offer">Limited Time Offer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter offer title"
                  value={selectedOffer.title}
                  onChange={(e) =>
                    setSelectedOffer({ ...selectedOffer, title: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Starting Date
                </label>
                <input
                  type="date"
                  value={selectedOffer.date}
                  onChange={(e) =>
                    setSelectedOffer({ ...selectedOffer, date: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ending Date
                </label>
                <input
                  type="date"
                  value={selectedOffer.expiry}
                  onChange={(e) =>
                    setSelectedOffer({ ...selectedOffer, expiry: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-amber-300 outline-none"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  placeholder="Enter offer details"
                  value={selectedOffer.description}
                  onChange={(e) =>
                    setSelectedOffer({ ...selectedOffer, description: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2.5 h-24 focus:ring-2 focus:ring-amber-300 outline-none"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedOffer.popular}
                  onChange={(e) =>
                    setSelectedOffer({ ...selectedOffer, popular: e.target.checked })
                  }
                  className="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                />
                <span className="text-sm text-gray-700">Mark as Popular</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Update Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEditImageFile(e.target.files[0])}
                  className="w-full border border-dashed border-gray-300 rounded-lg p-2 text-sm"
                />
                {selectedOffer.img && (
                  <div className="mt-3">
                    <p className="text-sm text-gray-500 mb-1">Current Image:</p>
                    <img
                      src={selectedOffer.img}
                      alt={selectedOffer.title}
                      className="w-28 h-28 object-cover rounded-md "
                    />
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2.5 rounded-lg font-medium shadow-md transition"
                >
                  {loading ? "Updating..." : "Update Offer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal && selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative p-6">
            <button
              onClick={() => setDeleteModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Delete Offer</h2>
            
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <Trash2 size={24} />
              </div>
              
              <p className="text-gray-600 mb-2">Are you sure you want to delete this offer?</p>
              <p className="font-medium text-gray-800">"{selectedOffer.title}"</p>
              
              {selectedOffer.img && (
                <div className="mt-4">
                  <img
                    src={selectedOffer.img}
                    alt={selectedOffer.title}
                    className="w-32 h-32 object-cover rounded-lg border border-gray-200 mx-auto"
                  />
                </div>
              )}
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteOffer}
                disabled={loading}
                className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition"
              >
                {loading ? "Deleting..." : "Delete Offer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;