import { FC } from 'react';
import { Header } from '../components/Header';
import { StatusCard } from '../components/StatusCard';
import { UpcomingTask } from '../components/UpcomingTask';
import { ActivityCard } from '../components/ActivityCard';

const ACTIVITIES = [
  { title: 'Academics', time: '7 Hrs & 55 mins' },
  { title: 'Extra-Curricular', time: '7 Hrs & 55 mins' },
  { title: 'Work', time: '7 Hrs & 55 mins' },
  { title: 'Free-Time', time: '7 Hrs & 55 mins' },
] as const;

export const Home: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      <main className="max-w-lg mx-auto px-4 py-6 flex flex-col items-center gap-4">
        <StatusCard />
        <UpcomingTask />
        <div className="grid grid-cols-2 gap-3 w-full max-w-[388px]">
          {ACTIVITIES.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              time={activity.time}
            />
          ))}
        </div>
      </main>
    </div>
  );
};