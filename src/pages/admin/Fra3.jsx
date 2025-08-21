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
import { Plus, Eye, Pencil, Trash2, X } from "lucide-react";

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
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "cards"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCards(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Add card
  const handleAdd = async () => {
    await addDoc(collection(db, "cards"), {
      ...formData,
      createdAt: serverTimestamp(),
    });
    setModalOpen(false);
    setFormData({
      title: "",
      sales: "",
      expenses: "",
      netProfit: "",
      netProfitPercent: "",
      grossProfit: "",
    });
    fetchCards();
  };

  // Update card
  const handleUpdate = async () => {
    const cardRef = doc(db, "cards", selectedCard.id);
    await updateDoc(cardRef, { ...formData });
    setEditModal(false);
    fetchCards();
  };

  // Delete card
  const handleDelete = async () => {
    if (!selectedCard) return;
    await deleteDoc(doc(db, "cards", selectedCard.id));
    setDeleteModal(false);
    setSelectedCard(null);
    fetchCards();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cards</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} /> Add Card
        </button>
      </div>

      {/* Cards Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-lg p-5 border relative"
            >
              <h2 className="text-lg font-bold mb-3">{card.title}</h2>
              <div className="space-y-1 text-sm text-gray-700">
                <p><strong>Sales:</strong> {card.sales}</p>
                <p><strong>Expenses:</strong> {card.expenses}</p>
                <p><strong>Net Profit:</strong> {card.netProfit}</p>
                <p><strong>Net %:</strong> {card.netProfitPercent}</p>
                <p><strong>Gross Profit:</strong> {card.grossProfit}</p>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => {
                    setSelectedCard(card);
                    setViewModal(true);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Eye size={18} />
                </button>
                <button
                  onClick={() => {
                    setSelectedCard(card);
                    setFormData(card);
                    setEditModal(true);
                  }}
                  className="text-green-600 hover:text-green-800"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => {
                    setSelectedCard(card);
                    setDeleteModal(true);
                  }}
                  className="text-red-600 hover:text-red-800"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Add Card</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(formData).map((field) => (
                <input
                  key={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field}
                  className="border p-2 rounded"
                />
              ))}
            </div>
            <button
              onClick={handleAdd}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModal && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setViewModal(false)}
              className="absolute top-4 right-4 text-gray-600"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedCard.title}</h2>
            <ul className="space-y-2">
              <li><strong>Sales:</strong> {selectedCard.sales}</li>
              <li><strong>Expenses:</strong> {selectedCard.expenses}</li>
              <li><strong>Net Profit:</strong> {selectedCard.netProfit}</li>
              <li><strong>Net %:</strong> {selectedCard.netProfitPercent}</li>
              <li><strong>Gross Profit:</strong> {selectedCard.grossProfit}</li>
            </ul>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setEditModal(false)}
              className="absolute top-4 right-4 text-gray-600"
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Card</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(formData).map((field) => (
                <input
                  key={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field}
                  className="border p-2 rounded"
                />
              ))}
            </div>
            <button
              onClick={handleUpdate}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Update
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal && selectedCard && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
            <button
              onClick={() => setDeleteModal(false)}
              className="absolute top-4 right-4 text-gray-600"
            >
              <X />
            </button>
            <h2 className="text-lg font-bold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete <strong>{selectedCard.title}</strong>?</p>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setDeleteModal(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
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

export default Fra3;
