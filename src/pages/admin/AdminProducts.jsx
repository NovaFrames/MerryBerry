import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../utils/firebaseConfig";
import {
  Plus,
  Eye,
  Pencil,
  Trash2,
  Loader2,
  X,
} from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (formData.image && typeof formData.image !== "string") {
        const imageRef = ref(
          storage,
          `products/${Date.now()}_${formData.image.name}`
        );
        await uploadBytes(imageRef, formData.image);
        imageUrl = await getDownloadURL(imageRef);
      }

      if (editingId) {
        // Update product
        const productRef = doc(db, "products", editingId);
        await updateDoc(productRef, {
          name: formData.name,
          description: formData.description,
          category: formData.category,
          image: imageUrl || formData.image,
        });
        alert("Product updated!");
      } else {
        // Add product
        await addDoc(collection(db, "products"), {
          name: formData.name,
          description: formData.description,
          category: formData.category,
          image: imageUrl,
          createdAt: new Date(),
        });
        alert("Product added!");
      }

      setFormData({ name: "", description: "", category: "", image: null });
      setEditingId(null);
      setModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error("Error:", error);
      alert("Operation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setFormData({ name: "", description: "", category: "", image: null });
    setEditingId(null);
    setModalOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">{p.description}</td>
                <td className="p-3 flex justify-center gap-3">
                  <button className="text-green-600 hover:text-green-800">
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">
              {editingId ? "Edit Product" : "Add Product"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              >
                <option value="">Select Category</option>
                <option value="ice-cream">Ice Cream</option>
                <option value="burger">Burger</option>
                <option value="fries">Fries</option>
                <option value="mojito">Mojito</option>
                <option value="sandwich">Sandwich</option>
                <option value="fried-chicken">Fried Chicken</option>
              </select>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                {loading && <Loader2 className="animate-spin" size={18} />}
                {editingId ? "Update Product" : "Add Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
