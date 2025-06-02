import { ReactNode } from 'react';

type ServiceCardProps = {
  name: string;
  price: string;
  dueDate: string;
  icon: ReactNode;
  color: string;
};

const colors = {
  blue: 'bg-blue-600/10 border-blue-600/20 text-blue-400',
  green: 'bg-green-600/10 border-green-600/20 text-green-400',
  orange: 'bg-orange-600/10 border-orange-600/20 text-orange-400',
  purple: 'bg-purple-600/10 border-purple-600/20 text-purple-400',
};

export default function ServiceCard({ name, price, dueDate, icon, color }: ServiceCardProps) {
  const colorClass = colors[color as keyof typeof colors] || colors.blue;

  return (
    <div className={`rounded-lg border p-5 ${colorClass}`}>
      <div className="flex justify-between items-start mb-6">
        <div className={`p-2 rounded-md ${colorClass}`}>
          {icon}
        </div>
        <div className="text-right">
          <p className="text-xl font-bold">{price}</p>
          <p className="text-sm opacity-80">/mo</p>
        </div>
      </div>
      <div>
        <p className="font-semibold mb-1">{name}</p>
        <p className="text-sm opacity-80">Próximo pagamento em {dueDate}</p>
      </div>
    </div>
  );
}