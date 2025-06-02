"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { Calendar, Download, Filter, RefreshCw } from "lucide-react";
import { useTheme } from "next-themes";
import { useThemeColors } from "@/hooks/useThemeColors";

const monthlyData = [
  { name: "Jan", value: 850 },
  { name: "Fev", value: 900 },
  { name: "Mar", value: 1000 },
  { name: "Abr", value: 1100 },
  { name: "Mai", value: 980 },
  { name: "Jun", value: 1050 },
];

const serviceData = [
  { name: "GitHub", value: 200 },
  { name: "Vercel", value: 150 },
  { name: "Resend", value: 75 },
  { name: "Supabase", value: 125 },
  { name: "Auth0", value: 300 },
  { name: "OpenAI", value: 250 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#FF5733",
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState("despesas");

  const { cor, corbutton, textcor, correlatorios, textbuttoncor } =
    useThemeColors();

  return (
    <div>
      <div className="flex justify-between items-center  mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">Relatórios</h1>
          <p className={` ${textcor}`}>
            Visualize dados e métricas importantes
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            className={` flex items-center px-4 py-2  ${corbutton}   rounded-lg `}
          >
            <Calendar size={18} className="mr-2" />
            <span>Últimos 30 dias</span>
          </button>
          <button
            className={`flex items-center px-4 py-2 ${corbutton}   rounded-lg `}
          >
            <Download size={18} className="mr-2" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      <div className={` ${cor}  rounded-lg p-4 mb-8`}>
        <div className="flex border-b border-gray-700 mb-4">
          <button
            className={`px-4 py-3 font-medium ${
              activeTab === "despesas"
                ? "text-blue-400 border-b-2 border-blue-400"
                : `${textbuttoncor}`
            }`}
            onClick={() => setActiveTab("despesas")}
          >
            Despesas Mensais
          </button>
          <button
            className={`px-4 py-3 font-medium ${
              activeTab === "servicos"
                ? "text-blue-400 border-b-2 border-blue-400"
                : `${textbuttoncor}`
            }`}
            onClick={() => setActiveTab("servicos")}
          >
            Distribuição por Serviço
          </button>
          <button
            className={`px-4 py-3 font-medium ${
              activeTab === "tendencias"
                ? "text-blue-400 border-b-2 border-blue-400"
                : `${textbuttoncor}`
            }`}
            onClick={() => setActiveTab("tendencias")}
          >
            Tendências e Previsões
          </button>
        </div>

        <div className="h-80">
          {activeTab === "despesas" && (
            <ResponsiveContainer width="100%\" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    border: "1px solid #555",
                  }}
                  formatter={(value) => [`R$ ${value}`, "Valor"]}
                />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}

          {activeTab === "servicos" && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {serviceData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    border: "1px solid #555",
                  }}
                  formatter={(value) => [`R$ ${value}`, "Valor"]}
                />
              </PieChart>
            </ResponsiveContainer>
          )}

          {activeTab === "tendencias" && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#333",
                    border: "1px solid #555",
                  }}
                  formatter={(value) => [`R$ ${value}`, "Valor"]}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Relatórios Salvos</h2>
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

        <div className={` ${cor} rounded-lg overflow-hidden`}>
          <table className="min-w-full divide-y divide-gray-700">
            <thead className={` `}>
              <tr>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium   uppercase tracking-wider`}
                >
                  Nome do Relatório
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Período
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Criado em
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                >
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className={` ${correlatorios}`}>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm font-medium`}
                >
                  Relatório Mensal - Junho
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm  `}
                >
                  01/06/2025 - 30/06/2025
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm  `}
                >
                  05/06/2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-400 hover:text-blue-300 mr-4">
                    Visualizar
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 mr-4">
                    Editar
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Excluir
                  </button>
                </td>
              </tr>
              <tr className={` ${correlatorios}`}>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm font-medium`}
                >
                  Comparativo Trimestral
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm  `}
                >
                  01/04/2025 - 30/06/2025
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm  `}
                >
                  02/07/2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-400 hover:text-blue-300 mr-4">
                    Visualizar
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 mr-4">
                    Editar
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Excluir
                  </button>
                </td>
              </tr>
              <tr className={` ${correlatorios}`}>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm font-medium`}
                >
                  Análise de Gastos por Categoria
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm  `}
                >
                  01/01/2025 - 30/06/2025
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap ${textcor} text-sm  `}
                >
                  10/07/2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button className="text-blue-400 hover:text-blue-300 mr-4">
                    Visualizar
                  </button>
                  <button className="text-blue-400 hover:text-blue-300 mr-4">
                    Editar
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
