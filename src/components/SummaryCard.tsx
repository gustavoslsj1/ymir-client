import { ReactNode } from 'react';

type SummaryCardProps = {
  title: string;
  value: string;
  icon: ReactNode;
};

export default function SummaryCard({ title, value, icon }: SummaryCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-white text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className="text-gray-400">
        {icon}
      </div>
    </div>
  );
}