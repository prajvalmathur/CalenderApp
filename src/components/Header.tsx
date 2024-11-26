import { FC } from 'react';
import { Calendar, Menu as MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: FC = () => (
  <header className="w-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-4 px-6 flex justify-between items-center shadow-sm">
    <Link 
      to="/menu" 
      className="text-gray-600 hover:text-gray-800 transition-colors"
    >
      <MenuIcon size={24} />
    </Link>
    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
    <Calendar className="text-gray-600" size={24} />
  </header>
);