import Sidebar from "@/components/sidebar";
import UserProfile from "@/components/user-profile";
import DocumentForm from "@/components/document-form";

export default function DocumentPage() {
  // Mock user data - in a real app, this would come from authentication
  const user = {
    id: 1,
    displayName: "Sophia Carter",
    profileImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <main className="ml-[220px] flex-1 p-6 bg-white overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div></div>
          <UserProfile user={user} />
        </header>
        
        <DocumentForm userId={user.id} />
      </main>
    </div>
  );
}
