"use client";
import { useState } from "react";
import {
  Search,
  Plus,
  Filter,
  RefreshCw,
  MoreHorizontal,
  User,
  Mail,
  Phone,
  Calendar,
  Building,
  X,
} from "lucide-react";
import { useThemeColors } from "@/hooks/useThemeColors";

type Client = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "Ativo" | "Inativo" | "Pendente";
  createdAt: string;
  value: number;
};

const clientsData: Client[] = [
  {
    id: 1,
    name: "João Silva",
    company: "Tech Solutions",
    email: "joao@techsolutions.com",
    phone: "(11) 98765-4321",
    status: "Ativo",
    createdAt: "15/01/2025",
    value: 350,
  },
  {
    id: 2,
    name: "Maria Oliveira",
    company: "Design Studio",
    email: "maria@designstudio.com",
    phone: "(21) 97654-3210",
    status: "Ativo",
    createdAt: "23/02/2025",
    value: 450,
  },
  {
    id: 3,
    name: "Carlos Mendes",
    company: "Startup Inc",
    email: "carlos@startup.com",
    phone: "(31) 96543-2109",
    status: "Inativo",
    createdAt: "10/03/2025",
    value: 200,
  },
  {
    id: 4,
    name: "Ana Pereira",
    company: "Marketing Pro",
    email: "ana@marketingpro.com",
    phone: "(41) 95432-1098",
    status: "Pendente",
    createdAt: "05/04/2025",
    value: 300,
  },
  {
    id: 5,
    name: "Roberto Santos",
    company: "Cloud Services",
    email: "roberto@cloudservices.com",
    phone: "(51) 94321-0987",
    status: "Ativo",
    createdAt: "20/05/2025",
    value: 500,
  },
];

export default function Clients() {
  const { cor, clientbutton, textcor, barcor, correlatorios, textbuttoncor } =
    useThemeColors();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filteredClients = clientsData.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "todos") return matchesSearch;
    if (activeTab === "ativos")
      return matchesSearch && client.status === "Ativo";
    if (activeTab === "inativos")
      return matchesSearch && client.status === "Inativo";
    if (activeTab === "pendentes")
      return matchesSearch && client.status === "Pendente";

    return matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "bg-green-500/20 text-green-400";
      case "Inativo":
        return "bg-red-500/20 text-red-400";
      case "Pendente":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Clientes</h1>
          <p className={`${textcor} `}>Gerencie seus clientes e contratos</p>
        </div>
        <button
          className={`flex items-center px-4 py-2 ${clientbutton} rounded-lg`}
        >
          <Plus size={18} className="mr-2" />
          <span>Novo Cliente</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`${cor} p-5 rounded-lg flex items-center`}>
          <div className="p-3 rounded-full bg-blue-500/20 mr-4">
            <User size={24} className="text-blue-400" />
          </div>
          <div>
            <p className={`text-sm ${textcor}`}>Total de Clientes</p>
            <p className="text-2xl font-semibold">{clientsData.length}</p>
          </div>
        </div>

        <div className={`${cor} p-5 rounded-lg flex items-center`}>
          <div className="p-3 rounded-full bg-green-500/20 mr-4">
            <User size={24} className="text-green-400" />
          </div>
          <div>
            <p className={`text-sm ${textcor}`}>Clientes Ativos</p>
            <p className="text-2xl font-semibold">
              {clientsData.filter((c) => c.status === "Ativo").length}
            </p>
          </div>
        </div>

        <div className={`${cor} p-5 rounded-lg flex items-center`}>
          <div className="p-3 rounded-full bg-purple-500/20 mr-4">
            <DollarSign size={24} className="text-purple-400" />
          </div>
          <div>
            <p className={`text-sm ${textcor}`}>Receita Mensal</p>
            <p className="text-2xl font-semibold">
              R$ {clientsData.reduce((acc, client) => acc + client.value, 0)}
            </p>
          </div>
        </div>
      </div>

      <div className={`${cor} rounded-lg p-4 bg- mb-8`}>
        <div className="flex flex-col sm:flex-row justify-between mb-6 space-y-4 sm:space-y-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar clientes..."
              className={`${barcor} pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

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

        <div className="border-b border-gray-700 mb-4">
          <div className="flex overflow-x-auto">
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "todos"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : `${textbuttoncor}`
              }`}
              onClick={() => setActiveTab("todos")}
            >
              Todos
            </button>
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "ativos"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : `${textbuttoncor}`
              }`}
              onClick={() => setActiveTab("ativos")}
            >
              Ativos
            </button>
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "inativos"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : `${textbuttoncor}`
              }`}
              onClick={() => setActiveTab("inativos")}
            >
              Inativos
            </button>
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "pendentes"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : `${textbuttoncor}`
              }`}
              onClick={() => setActiveTab("pendentes")}
            >
              Pendentes
            </button>
          </div>
        </div>

        {filteredClients.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider`}
                  >
                    Cliente
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider`}
                  >
                    Contato
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider`}
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider`}
                  >
                    Data de Cadastro
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider`}
                  >
                    Valor
                  </th>
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider`}
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-750">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center">
                          <span className="font-medium text-white">
                            {client.name.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium">
                            {client.name}
                          </div>
                          <div className={`text-sm ${textcor} `}>
                            {client.company}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm">{client.email}</div>
                      <div className={`text-sm ${textcor} `}>
                        {client.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                          client.status,
                        )}`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${textcor} `}
                    >
                      {client.createdAt}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${textcor} `}
                    >
                      R$ {client.value}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-blue-400 hover:text-blue-300"
                        onClick={() => setSelectedClient(client)}
                      >
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className={` ${textcor} `}>Nenhum cliente encontrado.</p>
          </div>
        )}
      </div>

      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg w-full max-w-md">
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Detalhes do Cliente</h3>
                <button onClick={() => setSelectedClient(null)}>
                  <X size={20} className="text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-gray-700 flex items-center justify-center text-white text-xl font-bold">
                  {selectedClient.name.charAt(0)}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <User size={18} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Nome</p>
                    <p>{selectedClient.name}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Building size={18} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Empresa</p>
                    <p>{selectedClient.company}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail size={18} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>{selectedClient.email}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone size={18} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Telefone</p>
                    <p>{selectedClient.phone}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar size={18} className="text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Data de Cadastro</p>
                    <p>{selectedClient.createdAt}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-3">
                <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
                  Editar
                </button>
                <button className="flex-1 py-2 bg-red-600 hover:bg-red-700 rounded-lg">
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DollarSign(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <line x1="12" y1="2" x2="12" y2="22"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  );
}
