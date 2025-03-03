
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  CreditCard, 
  Users, 
  Settings, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  Bell
} from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const { toast } = useToast();
  
  const navItems = [
    { name: "Calendar", icon: Calendar, path: "/admin/calendar" },
    { name: "Clients", icon: Users, path: "/admin/clients" },
    { name: "Payments", icon: CreditCard, path: "/admin/payments" },
    { name: "Analytics", icon: BarChart3, path: "/admin/analytics" },
    { name: "Notifications", icon: Bell, path: "/admin/notifications" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const userInitials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase()
    : "AM";

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      <aside 
        className={`fixed md:relative h-screen z-50 md:z-0 bg-navy transition-all duration-300 ${
          isOpen ? "w-64 translate-x-0" : "w-0 md:w-16 -translate-x-full md:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col overflow-hidden">
          {/* Sidebar header with logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
            {isOpen && (
              <Link to="/admin" className="flex items-center gap-2">
                <span className="text-white font-bold">CareerMentor</span>
              </Link>
            )}
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/10 md:ml-auto"
              onClick={toggleSidebar}
            >
              {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
            </Button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={isOpen ? (
                    isActive ? 'nav-link-active' : 'nav-link-inactive'
                  ) : (
                    `flex justify-center p-2 mb-1 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-white/10 text-white' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`
                  )}
                >
                  <item.icon size={20} />
                  {isOpen && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
          
          {/* User section at bottom */}
          <div className="p-4 border-t border-white/10">
            {isOpen ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-white">
                  {userInitials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{user?.name || "Admin"}</p>
                  <p className="text-xs text-white/70 truncate">{user?.email || "admin@careermentor.com"}</p>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-white text-xs">
                  {userInitials}
                </div>
              </div>
            )}
            
            {isOpen && (
              <Button 
                variant="ghost" 
                className="w-full mt-4 justify-start text-white/70 hover:text-white hover:bg-white/10"
                onClick={handleLogout}
              >
                <LogOut size={18} className="mr-2" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
