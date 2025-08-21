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
import { Plus, X, Eye, Edit, Trash2 } from "lucide-react";

const Offers = () => {
  const [offers, setOffers] = useState([]);
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
  };

  useEffect(() => {
    fetchOffers();
  }, []);

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
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Offers</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={20} /> Add Offer
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Starting Date</th>
              <th className="p-3 border">Expiry Date</th>
              <th className="p-3 border">Popular</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer) => (
              <tr key={offer.id} className="border-t">
                <td className="p-3 border">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 border">{offer.title}</td>
                <td className="p-3 border">{offer.date}</td>
                <td className="p-3 border">{offer.expiry}</td>
                <td className="p-3 border">
                  {offer.popular ? "✅" : "❌"}
                </td>
                <td className="p-3 border">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openViewModal(offer)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => openEditModal(offer)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => openDeleteModal(offer)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Offer Modal */}
      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-4">Add New Offer</h2>
            <form onSubmit={handleAddOffer} className="space-y-3">
              <select
                value={newOffer.category}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, category: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              >
                <option value="">Select Category</option>
                <option value="Daily Offer">Daily Offer</option>
                <option value="Monthly Offer">Monthly Offer</option>
                <option value="Weekly Offer">Weekly Offer</option>
                <option value="Limited Time Offer">Limited Time Offer</option>
              </select>
              <input
                type="text"
                placeholder="Title"
                value={newOffer.title}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, title: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <label>Starting Date</label>
              <input
                type="date"
                value={newOffer.date}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, date: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <label>Ending Date</label>
              <input
                type="date"
                value={newOffer.expiry}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, expiry: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                placeholder="Description"
                value={newOffer.description}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, description: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newOffer.popular}
                  onChange={(e) =>
                    setNewOffer({ ...newOffer, popular: e.target.checked })
                  }
                />
                Popular
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                {loading ? "Adding..." : "Add Offer"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* View Offer Modal */}
      {viewModal && selectedOffer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setViewModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-4">View Offer</h2>
            <div className="space-y-3">
              <div>
                <strong>Category:</strong> {selectedOffer.category}
              </div>
              <div>
                <strong>Title:</strong> {selectedOffer.title}
              </div>
              <div>
                <strong>Starting Date:</strong> {selectedOffer.date}
              </div>
              <div>
                <strong>Expiry Date:</strong> {selectedOffer.expiry}
              </div>
              <div>
                <strong>Description:</strong> {selectedOffer.description}
              </div>
              <div>
                <strong>Popular:</strong> {selectedOffer.popular ? "Yes" : "No"}
              </div>
              {selectedOffer.img && (
                <div>
                  <strong>Image:</strong>
                  <img
                    src={selectedOffer.img}
                    alt={selectedOffer.title}
                    className="w-32 h-32 object-cover rounded mt-2"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit Offer Modal */}
      {editModal && selectedOffer && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl relative p-6">
      
      {/* Close Button */}
      <button
        onClick={() => setEditModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
      >
        <X size={22} />
      </button>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
        ✏️ Edit Offer
      </h2>

      {/* Form */}
      <form onSubmit={handleUpdateOffer} className="grid grid-cols-2 gap-6">
        
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={selectedOffer.category}
            onChange={(e) =>
              setSelectedOffer({ ...selectedOffer, category: e.target.value })
            }
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
            required
          >
            <option value="">Select Category</option>
            <option value="Daily Offer">Daily Offer</option>
            <option value="Weekly Offer">Weekly Offer</option>
            <option value="Monthly Offer">Monthly Offer</option>
            <option value="Limited Time Offer">Limited Time Offer</option>
          </select>
        </div>

        {/* Title */}
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
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        {/* Starting Date */}
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
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        {/* Ending Date */}
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
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        {/* Description (full width) */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Enter offer details"
            value={selectedOffer.description}
            onChange={(e) =>
              setSelectedOffer({ ...selectedOffer, description: e.target.value })
            }
            className="w-full border rounded-lg p-2 h-20 focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        {/* Popular Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectedOffer.popular}
            onChange={(e) =>
              setSelectedOffer({ ...selectedOffer, popular: e.target.checked })
            }
            className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
          />
          <span className="text-sm text-gray-700">Mark as Popular</span>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Update Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEditImageFile(e.target.files[0])}
            className="w-full border rounded-lg p-2 text-sm"
          />
          {selectedOffer.img && (
            <div className="mt-3">
              <p className="text-sm text-gray-500">Current Image:</p>
              <img
                src={selectedOffer.img}
                alt={selectedOffer.title}
                className="w-28 h-28 object-cover rounded-md mt-1 border"
              />
            </div>
          )}
        </div>

        {/* Submit Button (full width) */}
        <div className="col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium shadow-md transition"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setDeleteModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-4">Delete Offer</h2>
            <p className="mb-4">Are you sure you want to delete the offer "{selectedOffer.title}"?</p>
            
            {selectedOffer.img && (
              <div className="mb-4">
                <img
                  src={selectedOffer.img}
                  alt={selectedOffer.title}
                  className="w-32 h-32 object-cover rounded mx-auto"
                />
              </div>
            )}
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteOffer}
                disabled={loading}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                {loading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;