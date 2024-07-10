import Navbar from '@/components/Navbar';
import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;