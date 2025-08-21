import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { Plus, Eye, Pencil, Trash2, X, TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";

const Fra3 = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    sales: "",
    expenses: "",
    netProfit: "",
    netProfitPercent: "",
    grossProfit: "",
  });

  // Fetch data from firebase
  const fetchCards = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "cards"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards: ", error);
      alert("Failed to fetch cards. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Reset form data
  const resetFormData = () => {
    setFormData({
      title: "",
      sales: "",
      expenses: "",
      netProfit: "",
      netProfitPercent: "",
      grossProfit: "",
    });
  };

  // Close all modals
  const closeAllModals = () => {
    setModalOpen(false);
    setViewModal(false);
    setEditModal(false);
    setDeleteModal(false);
    setSelectedCard(null);
    resetFormData();
  };

  // Add card
  const handleAdd = async () => {
    try {
      // Validate required fields
      if (!formData.title.trim()) {
        alert("Title is required");
        return;
      }

      await addDoc(collection(db, "cards"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      closeAllModals();
      fetchCards();
    } catch (error) {
      console.error("Error adding card: ", error);
      alert("Failed to add card. Please try again.");
    }
  };

  // Update card - FIXED THIS FUNCTION
  const handleUpdate = async () => {
    try {
      // Validate selectedCard exists and has an id
      if (!selectedCard || !selectedCard.id) {
        console.error("No card selected for update");
        alert("No card selected for update");
        return;
      }

      // Validate required fields
      if (!formData.title.trim()) {
        alert("Title is required");
        return;
      }

      const cardRef = doc(db, "cards", selectedCard.id);
      console.log("Updating card with ID:", selectedCard.id);
      
      // Create update object with only the changed fields
      const updateData = {
        title: formData.title,
        sales: formData.sales,
        expenses: formData.expenses,
        netProfit: formData.netProfit,
        netProfitPercent: formData.netProfitPercent,
        grossProfit: formData.grossProfit,
        updatedAt: serverTimestamp(),
      };

      await updateDoc(cardRef, updateData);
      console.log("Card updated successfully");
      
      closeAllModals();
      fetchCards();
    } catch (error) {
      console.error("Error updating card: ", error);
      console.error("Error details:", error.message, error.code);
      alert(`Failed to update card: ${error.message}`);
    }
  };

  // Delete card
  const handleDelete = async () => {
    if (!selectedCard || !selectedCard.id) {
      console.error("No card selected for deletion");
      return;
    }
    
    try {
      await deleteDoc(doc(db, "cards", selectedCard.id));
      closeAllModals();
      fetchCards();
    } catch (error) {
      console.error("Error deleting card: ", error);
      alert("Failed to delete card. Please try again.");
    }
  };

  // Open edit modal with selected card data - FIXED THIS FUNCTION
  const openEditModal = (card) => {
    if (!card || !card.id) {
      console.error("Invalid card data");
      return;
    }
    
    setSelectedCard(card);
    setFormData({
      title: card.title || "",
      sales: card.sales || "",
      expenses: card.expenses || "",
      netProfit: card.netProfit || "",
      netProfitPercent: card.netProfitPercent || "",
      grossProfit: card.grossProfit || "",
    });
    setEditModal(true);
  };

  // Format percentage values
  const formatPercentage = (value) => {
    if (!value) return "0%";
    const num = parseFloat(value);
    return isNaN(num) ? "0%" : `${num.toFixed(2)}%`;
  };

  // Format currency values
  const formatCurrency = (value) => {
    if (!value) return "₹0";
    const num = parseFloat(value);
    return isNaN(num) ? "₹0" : `₹${num.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Financial Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your financial performance cards</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-amber-500 text-white px-5 py-3 rounded-xl hover:bg-amber-600 transition-colors mt-4 md:mt-0 shadow-md hover:shadow-lg"
        >
          <Plus size={20} /> Add New Card
        </button>
      </div>

      {/* Cards Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      ) : cards.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
          <BarChart3 size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No cards yet</h3>
          <p className="text-gray-500 mb-4">Get started by creating your first financial performance card</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Create Card
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
              
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
                <div className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                  Active
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center">
                    <TrendingUp size={16} className="mr-2" /> Sales
                  </span>
                  <span className="font-semibold text-gray-800">{formatCurrency(card.sales)}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 flex items-center">
                    <DollarSign size={16} className="mr-2" /> Expenses
                  </span>
                  <span className="font-semibold text-red-600">{formatCurrency(card.expenses)}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-gray-600 flex items-center">
                    <PieChart size={16} className="mr-2" /> Net Profit
                  </span>
                  <span className="font-semibold text-green-600">{formatCurrency(card.netProfit)}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Net %</span>
                  <span className="font-semibold text-blue-600">{formatPercentage(card.netProfitPercent)}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-gray-600">Gross Profit</span>
                  <span className="font-semibold text-purple-600">{formatCurrency(card.grossProfit)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                  onClick={() => {
                    setSelectedCard(card);
                    setViewModal(true);
                  }}
                  className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="View details"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => openEditModal(card)}
                  className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                  title="Edit card"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => {
                    setSelectedCard(card);
                    setDeleteModal(true);
                  }}
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Delete card"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Card</h2>
            <p className="text-gray-600 mb-6">Add a new financial performance card to your dashboard</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Object.keys(formData).map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={closeAllModals}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-5 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              >
                Create Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            >
              <X size={24} />
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedCard.title}</h2>
              <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Sales</span>
                <span className="font-semibold text-gray-800">{formatCurrency(selectedCard.sales)}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Expenses</span>
                <span className="font-semibold text-red-600">{formatCurrency(selectedCard.expenses)}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-green-700">Net Profit</span>
                <span className="font-semibold text-green-700">{formatCurrency(selectedCard.netProfit)}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-blue-700">Net Profit %</span>
                <span className="font-semibold text-blue-700">{formatPercentage(selectedCard.netProfitPercent)}</span>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-purple-700">Gross Profit</span>
                <span className="font-semibold text-purple-700">{formatCurrency(selectedCard.grossProfit)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Edit Card</h2>
            <p className="text-gray-600 mb-6">Update the financial information for this card</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Object.keys(formData).map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={closeAllModals}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-5 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              >
                Update Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={closeAllModals}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
            >
              <X size={24} />
            </button>
            
            <div className="text-center mb-6">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <Trash2 className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Confirm Deletion</h2>
              <p className="text-gray-600">
                Are you sure you want to delete <strong>"{selectedCard.title}"</strong>? This action cannot be undone.
              </p>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={closeAllModals}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                Delete Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fra3;