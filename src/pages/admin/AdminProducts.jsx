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
  TrendingUp,
  BarChart3,
  Package,
  CheckCircle,
  XCircle,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
    active: true,
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewingProduct, setViewingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOption, setSortOption] = useState("name");

  // Statistics
  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.active).length;
  const inactiveProducts = products.filter(p => !p.active).length;

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

    // Apply status filter
    if (statusFilter !== "all") {
      const statusBool = statusFilter === "active";
      result = result.filter(product => product.active === statusBool);
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortOption === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortOption === "category") {
        return a.category.localeCompare(b.category);
      } else if (sortOption === "status") {
        return (a.active === b.active) ? 0 : a.active ? -1 : 1;
      }
      return 0;
    });

    setFilteredProducts(result);
  }, [products, searchTerm, categoryFilter, statusFilter, sortOption]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image;

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
          image: imageUrl,
          active: formData.active,
          updatedAt: new Date(),
        });
        alert("Product updated!");
      } else {
        // Add product
        await addDoc(collection(db, "products"), {
          name: formData.name,
          description: formData.description,
          category: formData.category,
          image: imageUrl,
          active: formData.active,
          createdAt: new Date(),
        });
        alert("Product added!");
      }

      setFormData({ name: "", description: "", category: "", image: null, active: true });
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
    setFormData({ name: "", description: "", category: "", image: null, active: true });
    setEditingId(null);
    setModalOpen(true);
  };

  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, {
        active: !currentStatus,
        updatedAt: new Date(),
      });
      fetchProducts();
    } catch (error) {
      console.error("Error toggling status:", error);
      alert("Failed to update status.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Product Management</h1>
          <p className="text-gray-600 mt-1">Manage your menu items and inventory</p>
        </div>

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
            onClick={handleAdd}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            <Plus size={18} /> Add Product
          </button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{totalProducts}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Package className="text-blue-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Active Products</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{activeProducts}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="text-green-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-red-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Inactive Products</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{inactiveProducts}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <XCircle className="text-red-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Categories</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">6</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <BarChart3 className="text-purple-500" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-5 rounded-xl shadow-md mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products by name or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Filter size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-4 pr-8 py-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="pl-4 pr-8 py-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="category">Sort by Category</option>
                <option value="status">Sort by Status</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((p) => (
              <tr key={p.id} className="hover:bg-amber-50 transition-colors">
                <td className="p-4">
                  <button
                    onClick={() => toggleActiveStatus(p.id, p.active)}
                    className="flex items-center"
                    title={p.active ? "Active - Click to deactivate" : "Inactive - Click to activate"}
                  >
                    {p.active ? (
                      <ToggleRight className="text-green-500" size={24} />
                    ) : (
                      <ToggleLeft className="text-gray-400" size={24} />
                    )}
                  </button>
                </td>
                <td className="p-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="p-4 font-medium text-gray-900">{p.name}</td>
                <td className="p-4">
                  <span className="px-3 py-1.5 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                    {p.category}
                  </span>
                </td>
                <td className="p-4 text-gray-600 max-w-xs truncate">{p.description}</td>
                <td className="p-4 flex justify-center gap-3">
                  <button
                    onClick={() => handleView(p)}
                    className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-100 transition-colors"
                    title="View product details"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleEdit(p)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                    title="Edit product"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition-colors"
                    title="Delete product"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-12 text-gray-500">
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
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="ice-cream">Ice Cream</option>
                  <option value="burger">Burger</option>
                  <option value="fries">Fries</option>
                  <option value="mojito">Mojito</option>
                  <option value="sandwich">Sandwich</option>
                  <option value="fried-chicken">Fried Chicken</option>
                  <option value="milk-shake">Milk Shake</option>
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
                      <span className="text-amber-600 font-medium">Choose file</span> or drag and drop
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

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="active"
                  id="active"
                  checked={formData.active}
                  onChange={handleChange}
                  className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                />
                <label htmlFor="active" className="ml-2 block text-sm text-gray-900">
                  Active Product
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg transition-colors disabled:opacity-50 shadow-md"
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
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${viewingProduct.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {viewingProduct.active ? (
                      <>
                        <CheckCircle size={14} className="mr-1" /> Active
                      </>
                    ) : (
                      <>
                        <XCircle size={14} className="mr-1" /> Inactive
                      </>
                    )}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Category</h3>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full">
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
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md"
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