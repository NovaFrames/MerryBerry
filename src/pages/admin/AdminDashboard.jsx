import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Gift, 
  Package, 
  Building2, 
  Briefcase, 
  TrendingUp, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Bell, 
  Plus, 
  FileText, 
  Users,
  User,
  LogOut,
  Menu,
  Search,
  X,
  PieChart,
  ShoppingBag,
  MessageSquare
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "Alex Johnson",
    role: "Admin",
    notifications: 3,
    email: "alex.johnson@example.com",
    profileImg: ""
  });

  // Sidebar menu items from array
  const menuItems = [
    { id: 2, label: "Offers", path: "/dashboard/offers", icon: <Gift size={20} /> },
    { id: 3, label: "Products", path: "/dashboard/products", icon: <Package size={20} /> },
    { id: 4, label: "Franchise", path: "/dashboard/franchise", icon: <Building2 size={20} /> },
    { id: 5, label: "Careers", path: "/dashboard/careers", icon: <Briefcase size={20} /> },
    { id: 6, label: "Analytics", path: "/dashboard/analytics", icon: <TrendingUp size={20} /> },
    { id: 7, label: "Settings", path: "/dashboard/settings", icon: <Settings size={20} /> },
  ];


  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle search
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Check if current route is dashboard home
  const isDashboardHome = location.pathname === "/dashboard";

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile menu button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-amber-500 text-white shadow-md"
        onClick={toggleMobileMenu}
      >
        <Menu size={20} />
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} fixed md:relative bg-white text-gray-800 flex flex-col transition-all duration-300 z-40 h-full shadow-lg border-r border-gray-200`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-2xl font-bold flex items-center">
              <span className="bg-amber-500 text-white p-1 rounded mr-2">
                <ShoppingBag size={20} />
              </span>
              <span className="text-sm">Merry Berry</span>
            </h2>
          )}
          {isCollapsed && (
            <div className="bg-amber-500 text-white p-2 rounded mx-auto">
              <ShoppingBag size={20} />
            </div>
          )}
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-full text-gray-500"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`w-full text-left flex items-center p-3 rounded-lg mb-2 transition ${
                  isActive 
                    ? "bg-amber-100 text-amber-700 shadow-sm border border-amber-200" 
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                <span className={`flex items-center justify-center ${isActive ? "text-amber-600" : "text-gray-500"}`}>
                  {item.icon}
                </span>
                {!isCollapsed && <span className="ml-3 font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>
        
        {/* User profile section */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">
                <User size={18} />
              </div>
              <div className="ml-3">
                <p className="font-semibold">{userData.name}</p>
                <p className="text-sm text-gray-500">{userData.role}</p>
              </div>
            </div>
            <button className="w-full mt-4 flex items-center text-gray-500 hover:text-amber-600 p-2 rounded-lg text-sm font-medium hover:bg-amber-50 transition">
              <LogOut size={16} className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-0 ml-0">

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {!isDashboardHome && (
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <Outlet />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;