import { LogOut, Bell, MessageSquare, FileText } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Sidebar() {
  const [location] = useLocation();
  
  return (
    <aside className="bg-[#112D4E] w-[220px] h-screen flex flex-col justify-between fixed left-0 top-0">
      <div>
        <div className="p-4 text-white flex justify-center">
          <img src="/logo-bitchat.png" alt="BITCHAT Logo" className="w-24" />
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-3">
            <li>
              <Link 
                href="#" 
                className={`flex items-center gap-3 px-4 py-3 text-white rounded-lg bg-[#1D4A7E] hover:bg-[#1D4A7E]/90`}
              >
                <Bell className="h-5 w-5" />
                <span className="text-base font-medium">Notification</span>
              </Link>
            </li>
            
            <li>
              <Link 
                href="#" 
                className={`flex items-center gap-3 px-4 py-3 text-white rounded-lg bg-[#1D4A7E] hover:bg-[#1D4A7E]/90`}
              >
                <MessageSquare className="h-5 w-5" />
                <span className="text-base font-medium">Messages</span>
              </Link>
            </li>
            
            <li>
              <Link 
                href="/" 
                className={`flex items-center gap-3 px-4 py-3 text-white rounded-lg ${
                  location === "/" ? "bg-[#2A5A8F]" : "bg-[#1D4A7E] hover:bg-[#1D4A7E]/90"
                }`}
              >
                <FileText className="h-5 w-5" />
                <span className="text-base font-medium">Document</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="mb-6 px-4">
        <Link 
          href="#" 
          className="flex items-center gap-2 px-4 py-3 text-white bg-[#1D4A7E] hover:bg-[#1D4A7E]/90 rounded-lg"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-base font-medium">Log out</span>
        </Link>
      </div>
    </aside>
  );
}
