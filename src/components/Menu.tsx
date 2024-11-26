import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import { ArrowLeft } from 'lucide-react';

const menuItems = [
  { label: 'Home', route: '/' },
  { label: 'Calendar', route: '/calendar' },
  { label: 'Account Settings', route: '/account' },
  { label: 'General Settings', route: '/settings' },
  { label: 'Log Out', route: '/logout' },
] as const;

export const Menu: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="max-w-md mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </button>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-2">
          {menuItems.map((item) => (
            <MenuItem
              key={item.route}
              label={item.label}
              to={item.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};