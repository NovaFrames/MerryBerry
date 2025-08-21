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
  Search,
  Filter,
  ChevronDown,
} from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewingProduct, setViewingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("name");

  // Fetch products
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
    setFilteredProducts(productList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
    
    setFilteredProducts(result);
  }, [products, searchTerm, categoryFilter, sortOption]);

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

  const handleView = (product) => {
    setViewingProduct(product);
    setViewModalOpen(true);
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
        <h1 className="text-3xl font-bold text-gray-800">Product Management</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <Filter size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="ice-cream">Ice Cream</option>
                <option value="burger">Burger</option>
                <option value="fries">Fries</option>
                <option value="mojito">Mojito</option>
                <option value="sandwich">Sandwich</option>
                <option value="fried-chicken">Fried Chicken</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="pl-4 pr-8 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="p-4 font-medium text-gray-900">{p.name}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {p.category}
                  </span>
                </td>
                <td className="p-4 text-gray-600 max-w-xs truncate">{p.description}</td>
                <td className="p-4 flex justify-center gap-3">
                  <button 
                    onClick={() => handleView(p)}
                    className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-50 transition-colors"
                    title="View product details"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
                    title="Edit product"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
                    title="Delete product"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-500">
                  {products.length === 0 ? "No products found. Add your first product!" : "No products match your filters."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Product" : "Add Product"}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  placeholder="Enter product description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                <div className="flex items-center gap-4">
                  {formData.image && (
                    <img 
                      src={typeof formData.image === 'string' ? formData.image : URL.createObjectURL(formData.image)} 
                      alt="Preview" 
                      className="w-16 h-16 object-cover rounded-lg border"
                    />
                  )}
                  <label className="flex-1 cursor-pointer">
                    <div className="border border-dashed border-gray-300 rounded-lg px-4 py-3 text-center hover:bg-gray-50 transition-colors">
                      <span className="text-blue-600">Choose file</span> or drag and drop
                    </div>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading && <Loader2 className="animate-spin" size={18} />}
                  {editingId ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModalOpen && viewingProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Product Details</h2>
              <button
                onClick={() => setViewModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="flex justify-center">
                <img
                  src={viewingProduct.image}
                  alt={viewingProduct.name}
                  className="w-48 h-48 object-cover rounded-xl shadow-md"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Product Name</h3>
                  <p className="text-lg font-semibold text-gray-900">{viewingProduct.name}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Category</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {viewingProduct.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Description</h3>
                  <p className="text-gray-700">{viewingProduct.description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3 p-6 border-t">
              <button
                onClick={() => {
                  setViewModalOpen(false);
                  handleEdit(viewingProduct);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit Product
              </button>
              <button
                onClick={() => setViewModalOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;