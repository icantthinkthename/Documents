import { LogOut, Bell, MessageSquare, FileText } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Sidebar() {
  const [location] = useLocation();
  
  return (
    <aside className="bg-sidebar w-[136px] h-screen flex flex-col justify-between fixed left-0 top-0">
      <div>
        <div className="p-4 text-sidebar-foreground">
          <img src="/bitchat-logo.png" alt="BITCHAT Logo" className="w-28" />
        </div>
        
        <nav className="mt-8">
          <ul>
            <li>
              <Link href="#">
                <a className="flex flex-col items-center py-4 text-sidebar-foreground opacity-80 hover:bg-sidebar-accent/10">
                  <Bell className="h-6 w-6" />
                  <span className="mt-1 text-xs">Notification</span>
                </a>
              </Link>
            </li>
            
            <li>
              <Link href="#">
                <a className="flex flex-col items-center py-4 text-sidebar-foreground opacity-80 hover:bg-sidebar-accent/10">
                  <MessageSquare className="h-6 w-6" />
                  <span className="mt-1 text-xs">Messages</span>
                </a>
              </Link>
            </li>
            
            <li>
              <Link href="/">
                <a className={`flex flex-col items-center py-4 text-sidebar-foreground ${location === "/" ? "bg-sidebar-primary" : "hover:bg-sidebar-accent/10"}`}>
                  <FileText className="h-6 w-6" />
                  <span className="mt-1 text-xs">Document</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <div className="mb-6">
        <Link href="#">
          <a className="flex items-center justify-center gap-2 mx-4 text-sidebar-foreground py-2 hover:bg-sidebar-accent/10 rounded">
            <LogOut className="h-5 w-5" />
            <span className="text-sm">Log out</span>
          </a>
        </Link>
      </div>
    </aside>
  );
}
