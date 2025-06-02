"use client"
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  User,
  Users,
} from "lucide-react";

const retentionData = [
  { month: "Jan", rate: 95 },
  { month: "Fev", rate: 97 },
  { month: "Mar", rate: 93 },
  { month: "Abr", rate: 91 },
  { month: "Mai", rate: 94 },
  { month: "Jun", rate: 96 },
];

const churnsData = [
  { month: "Jan", value: 2 },
  { month: "Fev", value: 1 },
  { month: "Mar", value: 3 },
  { month: "Abr", value: 4 },
  { month: "Mai", value: 2 },
  { month: "Jun", value: 1 },
];

const riskClientsData = [
  {
    id: 1,
    name: "Carlos Mendes",
    company: "Startup Inc",
    lastInteraction: "45 dias atrás",
    riskScore: "Alto",
    riskReasons: ["Inatividade prolongada", "Reclamações recentes"],
  },
  {
    id: 2,
    name: "Ana Pereira",
    company: "Marketing Pro",
    lastInteraction: "30 dias atrás",
    riskScore: "Médio",
    riskReasons: ["Atraso em pagamento", "Baixo uso do serviço"],
  },
  {
    id: 3,
    name: "Pedro Santos",
    company: "Development Co",
    lastInteraction: "25 dias atrás",
    riskScore: "Médio",
    riskReasons: ["Baixo engajamento", "Feedback negativo"],
  },
  {
    id: 4,
    name: "Laura Oliveira",
    company: "Media Group",
    lastInteraction: "35 dias atrás",
    riskScore: "Alto",
    riskReasons: ["Múltiplas reclamações", "Considerando concorrentes"],
  },
];

export default function Retenization() {
  const [activeTab, setActiveTab] = useState("overview");

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Alto":
        return "bg-red-500/20 text-red-400";
      case "Médio":
        return "bg-yellow-500/20 text-yellow-400";
      case "Baixo":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Retenização</h1>
          <p className="text-gray-400">
            Monitore e melhore a retenção de clientes
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <Calendar size={18} className="mr-2" />
            <span>Últimos 6 meses</span>
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <Download size={18} className="mr-2" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-5 rounded-lg flex items-center">
          <div className="p-3 rounded-full bg-green-500/20 mr-4">
            <Users size={24} className="text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Taxa de Retenção</p>
            <div className="flex items-center">
              <p className="text-2xl font-semibold mr-2">94%</p>
              <div className="flex items-center text-green-400 text-sm">
                <ArrowUp size={14} className="mr-1" />
                <span>2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-5 rounded-lg flex items-center">
          <div className="p-3 rounded-full bg-red-500/20 mr-4">
            <User size={24} className="text-red-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Taxa de Churn</p>
            <div className="flex items-center">
              <p className="text-2xl font-semibold mr-2">6%</p>
              <div className="flex items-center text-red-400 text-sm">
                <ArrowUp size={14} className="mr-1" />
                <span>1%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-5 rounded-lg flex items-center">
          <div className="p-3 rounded-full bg-yellow-500/20 mr-4">
            <AlertTriangle size={24} className="text-yellow-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Clientes em Risco</p>
            <div className="flex items-center">
              <p className="text-2xl font-semibold mr-2">4</p>
              <div className="flex items-center text-green-400 text-sm">
                <ArrowDown size={14} className="mr-1" />
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 mb-8">
        <div className="flex border-b border-gray-700 mb-4">
          <button
            className={`px-4 py-3 font-medium ${
              activeTab === "overview"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Visão Geral
          </button>
          <button
            className={`px-4 py-3 font-medium ${
              activeTab === "churns"
                ? "text-blue-400 border-b-2 border-blue-400"
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("churns")}
          >
            Histórico de Churns
          </button>
        </div>

        <div className="h-80">
          {activeTab === "overview" && (
            <ResponsiveContainer width="100%\" height="100%">
              <LineChart
                data={retentionData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#999" />
                <YAxis stroke="#999" domain={[85, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    border: "1px solid #555",
                  }}
                  formatter={(value) => [`${value}%`, "Taxa de Retenção"]}
                />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#10B981" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}

          {activeTab === "churns" && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={churnsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    border: "1px solid #555",
                  }}
                  formatter={(value) => [`${value} clientes`, "Churns"]}
                />
                <Bar dataKey="value" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Clientes em Risco</h2>
          <div className="flex space-x-3">
            <button className="flex items-center text-gray-400 hover:text-white">
              <Filter size={16} className="mr-2" />
              <span>Filtrar</span>
            </button>
            <button className="flex items-center text-gray-400 hover:text-white">
              <RefreshCw size={16} className="mr-2" />
              <span>Atualizar</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Cliente
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Última Interação
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Nível de Risco
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Motivos
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {riskClientsData.map((client) => (
                <tr key={client.id} className="hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="font-medium text-white">
                          {client.name.charAt(0)}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium">{client.name}</div>
                        <div className="text-sm text-gray-400">
                          {client.company}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {client.lastInteraction}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${getRiskColor(
                        client.riskScore
                      )}`}
                    >
                      {client.riskScore}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <ul className="text-sm text-gray-300">
                      {client.riskReasons.map((reason, index) => (
                        <li key={index} className="mb-1">
                          • {reason}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-400 hover:text-blue-300 mr-3">
                      Contatar
                    </button>
                    <button className="text-blue-400 hover:text-blue-300">
                      Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
