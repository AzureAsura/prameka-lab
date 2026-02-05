import { AdminNavbar } from '@/components/navbar/AdminNavbar';
import { Sidebar } from '@/components/navbar/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <AdminNavbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 lg:pl-72 w-full transition-all duration-300">
          <div className="p-4 md:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}