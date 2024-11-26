import { FC } from 'react';

export const UpcomingTask: FC = () => (
  <div className="flex justify-between gap-5 px-6 pt-2.5 pb-6 mt-2 w-full max-w-md rounded-xl shadow-md">
    <div className="flex flex-col text-xl">
      <h2 className="font-semibold text-center">Upcoming Task</h2>
      <div className="mt-5 text-left">
        <p>CS HW3</p>
        <p>11:59 pm</p>
      </div>
    </div>
    <div className="self-end mt-7 text-sm text-right">
      <button className="block text-emerald-100 hover:text-emerald-200 transition-colors">
        Finish Task
      </button>
      <button className="block mt-5 text-rose-100 hover:text-rose-200 transition-colors">
        Dismiss
      </button>
    </div>
  </div>
);