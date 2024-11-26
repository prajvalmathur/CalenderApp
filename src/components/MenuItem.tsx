import { FC } from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  to: string;
  className?: string;
}

export const MenuItem: FC<MenuItemProps> = ({ label, to, className }) => (
  <Link
    to={to}
    className={`block text-lg py-3 px-4 text-gray-800 hover:bg-purple-100 transition-colors rounded-lg ${className}`}
  >
    {label}
  </Link>
);