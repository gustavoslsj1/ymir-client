import {
  DollarSign,
  Clock,
  TrendingDown,
  Github,
  Zap,
  Mail,
  Database,
  Shield,
  Cpu,
} from "lucide-react";
import SummaryCard from "@/components/SummaryCard";
import ServiceCard from "@/components/ServiceCard";
import { cookies } from "next/headers";
export default function Dashboard() {

  

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Dashboard YMIR</h1>
        <p className="text-gray-400">Gerencie seus custos e relatórios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="Total Mensal"
          value="R$ 1.100"
          icon={<DollarSign size={24} />}
        />
        <SummaryCard
          title="Serviços Ativos"
          value="6"
          icon={<Clock size={24} />}
        />
        <SummaryCard
          title="Economia"
          value="R$ 200"
          icon={<TrendingDown size={24} />}
        />
      </div>

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Próximas Cobranças</h2>
        <button className="text-sm text-gray-400 hover:text-white">
          Ver todos →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ServiceCard
          name="GitHub Pro"
          price="R$ 200"
          dueDate="5 dias"
          icon={<Github size={24} />}
          color="blue"
        />
        <ServiceCard
          name="Vercel Pro"
          price="R$ 150"
          dueDate="5 dias"
          icon={<Zap size={24} />}
          color="blue"
        />
        <ServiceCard
          name="Resend"
          price="R$ 75"
          dueDate="5 dias"
          icon={<Mail size={24} />}
          color="green"
        />
        <ServiceCard
          name="Supabase"
          price="R$ 125"
          dueDate="5 dias"
          icon={<Database size={24} />}
          color="green"
        />
        <ServiceCard
          name="Auth0"
          price="R$ 300"
          dueDate="5 dias"
          icon={<Shield size={24} />}
          color="orange"
        />
        <ServiceCard
          name="OpenAI"
          price="R$ 250"
          dueDate="5 dias"
          icon={<Cpu size={24} />}
          color="purple"
        />
      </div>

      <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg flex items-start">
        <div className="flex-shrink-0 mr-4 bg-blue-900/30 p-3 rounded-full">
          <DollarSign size={24} className="text-blue-400" />
        </div>
        <div>
          <h3 className="font-medium">Você tem R$ 5.250 em fundos restantes</h3>
          <p className="text-sm text-gray-400 mt-1">
            para os próximos 15 dias.
          </p>
          <button className="text-blue-400 text-sm mt-2 hover:text-blue-300">
            Ver detalhes →
          </button>
        </div>
      </div>
    </div>
  );
}
