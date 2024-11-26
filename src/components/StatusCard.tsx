import { FC } from 'react';
import { PieChart } from 'lucide-react';

export const StatusCard: FC = () => (
  <div className="flex gap-2 items-start px-7 pt-4 pr-1 mt-5 max-w-full bg-gray-200 rounded-2xl shadow-sm w-[378px]">
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold">You are currently...</h2>
      <div className="mt-2 text-base">
        <p>65% Tasks Completed</p>
        <p>25% To Be Completed</p>
        <p>5% Missed Tasks</p>
      </div>
    </div>
    <div className="mt-3.5">
      <PieChart size={124} className="text-gray-600" />
    </div>
  </div>
);