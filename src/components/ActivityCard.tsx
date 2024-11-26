import { FC } from 'react';

interface ActivityCardProps {
  title: string;
  time: string;
}

export const ActivityCard: FC<ActivityCardProps> = ({ title, time }) => (
  <div className="flex-1 flex flex-col items-center p-6 bg-zinc-300 rounded-[39px] shadow-md text-center">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-7 text-base">You spent...</p>
    <p className="mt-2.5 text-xl font-extrabold">{time}</p>
  </div>
);