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
  MapPin,
  Clock,
  DollarSign,
  BarChart3,
  Package,
  Users,
  Briefcase,
} from "lucide-react";

const AdminCareers = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
    salary: [{ type: "", amount: "" }],
    image: null,
    active: true,
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [viewingJob, setViewingJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Statistics
  const totalJobs = jobs.length;
  const activeJobs = jobs.filter(j => j.active).length;
  const fullTimeJobs = jobs.filter(j => j.type === "Full-time").length;
  const partTimeJobs = jobs.filter(j => j.type === "Part-time").length;

  // Fetch jobs from Firebase
  const fetchJobs = async () => {
    const querySnapshot = await getDocs(collection(db, "careers"));
    const jobList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setJobs(jobList);
    setFilteredJobs(jobList);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter and sort jobs
  useEffect(() => {
    let result = [...jobs];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply location filter
    if (locationFilter !== "all") {
      result = result.filter(job => job.location === locationFilter);
    }

    // Apply type filter
    if (typeFilter !== "all") {
      result = result.filter(job => job.type === typeFilter);
    }

    // Apply status filter
    if (statusFilter !== "all") {
      const statusBool = statusFilter === "active";
      result = result.filter(job => job.active === statusBool);
    }

    setFilteredJobs(result);
  }, [jobs, searchTerm, locationFilter, typeFilter, statusFilter]);

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

  const handleSalaryChange = (index, field, value) => {
    const updatedSalary = [...formData.salary];
    updatedSalary[index][field] = value;
    setFormData({ ...formData, salary: updatedSalary });
  };

  const addSalaryField = () => {
    setFormData({
      ...formData,
      salary: [...formData.salary, { type: "", amount: "" }]
    });
  };

  const removeSalaryField = (index) => {
    if (formData.salary.length <= 1) return;
    const updatedSalary = [...formData.salary];
    updatedSalary.splice(index, 1);
    setFormData({ ...formData, salary: updatedSalary });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image;

      // Upload new image if provided
      if (formData.image && typeof formData.image !== "string") {
        const imageRef = ref(
          storage,
          `careers/${Date.now()}_${formData.image.name}`
        );
        await uploadBytes(imageRef, formData.image);
        imageUrl = await getDownloadURL(imageRef);
      }

      if (editingId) {
        // Update job
        const jobRef = doc(db, "careers", editingId);
        await updateDoc(jobRef, {
          title: formData.title,
          description: formData.description,
          location: formData.location,
          type: formData.type,
          salary: formData.salary,
          image: imageUrl,
          active: formData.active,
          updatedAt: new Date(),
        });
        alert("Job updated successfully!");
      } else {
        // Add new job
        await addDoc(collection(db, "careers"), {
          title: formData.title,
          description: formData.description,
          location: formData.location,
          type: formData.salary[0].type,
          salary: formData.salary,
          image: imageUrl,
          active: formData.active,
          createdAt: new Date(),
        });
        alert("Job added successfully!");
      }

      // Reset form
      setFormData({
        title: "",
        description: "",
        location: "",
        type: "",
        salary: [{ type: "", amount: "" }],
        image: null,
        active: true,
      });
      setEditingId(null);
      setModalOpen(false);
      fetchJobs();
    } catch (error) {
      console.error("Error:", error);
      alert("Operation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      await deleteDoc(doc(db, "careers", id));
      fetchJobs();
    }
  };

  const handleEdit = (job) => {
    setFormData(job);
    setEditingId(job.id);
    setModalOpen(true);
  };

  const handleView = (job) => {
    setViewingJob(job);
    setViewModalOpen(true);
  };

  const handleAdd = () => {
    setFormData({
      title: "",
      description: "",
      location: "",
      type: "",
      salary: [{ type: "", amount: "" }],
      image: null,
      active: true,
    });
    setEditingId(null);
    setModalOpen(true);
  };

  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      const jobRef = doc(db, "careers", id);
      await updateDoc(jobRef, {
        active: !currentStatus,
        updatedAt: new Date(),
      });
      fetchJobs();
    } catch (error) {
      console.error("Error toggling status:", error);
      alert("Failed to update status.");
    }
  };

  // Extract unique locations and types for filters
  const locations = [...new Set(jobs.map(job => job.location))];


  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Career Management</h1>
          <p className="text-gray-600 mt-1">Manage job postings and applications</p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          <Plus size={18} /> Add Job
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Total Jobs</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{totalJobs}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Briefcase className="text-blue-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Active Jobs</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{activeJobs}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="text-green-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-amber-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Full-time</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{fullTimeJobs}</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-full">
              <Clock className="text-amber-500" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Part-time</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">{partTimeJobs}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Package className="text-purple-500" size={20} />
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
              placeholder="Search jobs by title, description or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* <div className="relative">
              <Clock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div> */}

            <div className="relative">
              <Filter size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              {/* <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th> */}
              <th className="p-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredJobs.map((job) => (
              <tr key={job.id} className="hover:bg-amber-50 transition-colors">
                <td className="p-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${job.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {job.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="p-4">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-16 h-16 object-cover rounded-lg shadow-sm"
                  />
                </td>
                <td className="p-4 font-medium text-gray-900">{job.title}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {job.location}
                  </span>
                </td>
                {/* <td className="p-4">
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                    {job.type}
                  </span>
                </td> */}
                <td className="p-4 flex justify-center gap-3">
                  <button
                    onClick={() => handleView(job)}
                    className="text-green-600 hover:text-green-800 p-2 rounded-full hover:bg-green-100 transition-colors"
                    title="View job details"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleEdit(job)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                    title="Edit job"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-100 transition-colors"
                    title="Delete job"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredJobs.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-12 text-gray-500">
                  {jobs.length === 0 ? "No jobs found. Add your first job!" : "No jobs match your filters."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Job" : "Add Job"}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter job title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  name="description"
                  placeholder="Enter job description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>


                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Image</label>
                  <div className="flex items-center gap-4">
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
                    {formData.image && (
                      <img
                        src={typeof formData.image === 'string' ? formData.image : URL.createObjectURL(formData.image)}
                        alt="Preview"
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    )}
                  </div>
                </div>

              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Salary Details</label>
                {formData.salary.map((sal, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <select
                      value={sal.type}
                      onChange={(e) => handleSalaryChange(index, 'type', e.target.value)}
                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Internship">Internship</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Amount (e.g., ₹10,000 / month)"
                      value={sal.amount}
                      onChange={(e) => handleSalaryChange(index, 'amount', e.target.value)}
                      className="flex-1 border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeSalaryField(index)}
                      className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      disabled={formData.salary.length <= 1}
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSalaryField}
                  className="mt-2 text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center"
                >
                  <span className="mr-1">+</span> Add another salary option
                </button>
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
                  Active Job Posting
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg transition-colors disabled:opacity-50 shadow-md"
                >
                  {loading && <Loader2 className="animate-spin" size={18} />}
                  {editingId ? "Update Job" : "Add Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Modal */}
      {viewModalOpen && viewingJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-gray-800">Job Details</h2>
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
                  src={viewingJob.image}
                  alt={viewingJob.title}
                  className="w-48 h-48 object-cover rounded-xl shadow-md"
                />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Job Title</h3>
                  <p className="text-lg font-semibold text-gray-900">{viewingJob.title}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Location</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {viewingJob.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Job Type</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      {viewingJob.type}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${viewingJob.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {viewingJob.active ? 'Active' : 'Inactive'}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Description</h3>
                  <p className="text-gray-700">{viewingJob.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Salary Details</h3>
                  <div className="space-y-2 mt-2">
                    {viewingJob.salary.map((sal, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                        <span className="font-medium">{sal.type}</span>
                        <span className="font-bold text-amber-600">{sal.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 p-6 border-t">
              <button
                onClick={() => {
                  setViewModalOpen(false);
                  handleEdit(viewingJob);
                }}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md"
              >
                Edit Job
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

export default AdminCareers;