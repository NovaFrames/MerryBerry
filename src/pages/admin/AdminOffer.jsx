import React, { useEffect, useState } from "react";
import { db, storage } from "../../utils/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Plus, X } from "lucide-react";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newOffer, setNewOffer] = useState({
    category: "",
    title: "",
    date: "",
    expiry: "",
    description: "",
    popular: false,
  });
  const [imageFile, setImageFile] = useState(null);

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
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
              <label >Starting Date</label>
              <input
                type="date"
                value={newOffer.date}
                onChange={(e) =>
                  setNewOffer({ ...newOffer, date: e.target.value })
                }
                className="w-full border p-2 rounded"
                required
              />
              <label >Ending Date</label>
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
    </div>
  );
};

export default Offers;
