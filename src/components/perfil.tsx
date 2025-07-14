"use client";
import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Bell,
  CreditCard,
  LogOut,
  Edit,
} from "lucide-react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

type DecodedUser = {
  sub: number;
  name: string;
  email: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
};
export default function Perfil() {
  const [activeTab, setActiveTab] = useState("informacoes");
  const [user, setUser] = useState<DecodedUser | null>(null);
  useEffect(() => {
    const token = Cookies.get("auth");
    if (token) {
      try {
        const decoded: DecodedUser = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Token inválido", err);
      }
    }
  }, []);

  function update() {
    try {
    } catch (err) {}
  }
  const userData = {
    name: user?.name?.split("@")[0] ?? "Usuário",
    email: user?.email ?? "",
    phone: "(11) 00000-0000",
    plan: "Plano Básico",
    joinedDate: "01/01/2025",
    avatarInitial: user?.email?.charAt(0).toUpperCase() ?? "U",
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Perfil</h1>
        <p className="text-gray-400">
          Gerencie suas informações pessoais e preferências
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                {userData.avatarInitial}
              </div>
              <h3 className="text-xl font-semibold">{userData.name}</h3>
              <p className="text-gray-400 mb-2">{userData.email}</p>
              <p className="text-blue-400 font-medium">{userData.plan}</p>
              <button className="flex items-center mt-4 text-sm text-gray-400 hover:text-white">
                <Edit size={14} className="mr-2" />
                Editar Foto
              </button>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <nav className="space-y-1">
              <button
                className={`w-full flex items-center px-6 py-3 text-sm ${
                  activeTab === "informacoes"
                    ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-400"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setActiveTab("informacoes")}
              >
                <User size={18} className="mr-3" />
                Informações Pessoais
              </button>
              <button
                className={`w-full flex items-center px-6 py-3 text-sm ${
                  activeTab === "seguranca"
                    ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-400"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setActiveTab("seguranca")}
              >
                <Lock size={18} className="mr-3" />
                Segurança
              </button>
              <button
                className={`w-full flex items-center px-6 py-3 text-sm ${
                  activeTab === "notificacoes"
                    ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-400"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setActiveTab("notificacoes")}
              >
                <Bell size={18} className="mr-3" />
                Notificações
              </button>
              <button
                className={`w-full flex items-center px-6 py-3 text-sm ${
                  activeTab === "plano"
                    ? "bg-blue-600/20 text-blue-400 border-l-2 border-blue-400"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setActiveTab("plano")}
              >
                <CreditCard size={18} className="mr-3" />
                Plano e Faturamento
              </button>
              <button className="w-full flex items-center px-6 py-3 text-sm text-red-400 hover:bg-gray-700">
                <LogOut size={18} className="mr-3" />
                Sair
              </button>
            </nav>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="bg-gray-800 rounded-lg p-6">
            {activeTab === "informacoes" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  Informações Pessoais
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue={userData.name}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="Tech Consultoria"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue={userData.email}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue={userData.phone}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Endereço
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Av. Paulista, 1000, São Paulo, SP"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Consultor especializado em otimização de custos com SaaS e serviços de tecnologia."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mr-4 px-4 py-2 text-gray-400 hover:text-white"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                      Salvar Alterações
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "seguranca" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Segurança</h2>

                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Senha Atual
                      </label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Nova Senha
                      </label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Confirmar Nova Senha
                      </label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <h3 className="text-lg font-medium mb-4">
                      Autenticação em Duas Etapas
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          Status:{" "}
                          <span className="text-red-400">Desativado</span>
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          Adicione uma camada extra de segurança à sua conta.
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
                        Ativar
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mr-4 px-4 py-2 text-gray-400 hover:text-white"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                      Atualizar Senha
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "notificacoes" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Notificações</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Email</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Resumo semanal</p>
                          <p className="text-sm text-gray-400">
                            Receba um resumo das atividades semanais.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Alertas de pagamento</p>
                          <p className="text-sm text-gray-400">
                            Receba notificações sobre cobranças próximas.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notificações de sistema</p>
                          <p className="text-sm text-gray-400">
                            Receba atualizações sobre o sistema e manutenções.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <h3 className="text-lg font-medium mb-4">Push</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Alertas em tempo real</p>
                          <p className="text-sm text-gray-400">
                            Receba notificações instantâneas sobre atividades
                            importantes.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Alertas de retenção</p>
                          <p className="text-sm text-gray-400">
                            Receba notificações sobre clientes em risco.
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="mr-4 px-4 py-2 text-gray-400 hover:text-white"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                      Salvar Preferências
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "plano" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">
                  Plano e Faturamento
                </h2>

                <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <CreditCard size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium">
                        Plano Atual:{" "}
                        <span className="text-blue-400">Plano Rico</span>
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Seu plano renova em 15/08/2025
                      </p>
                      <div className="flex mt-2">
                        <button className="text-blue-400 text-sm mr-4 hover:text-blue-300">
                          Alterar plano
                        </button>
                        <button className="text-red-400 text-sm hover:text-red-300">
                          Cancelar assinatura
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">
                    Detalhes do Plano
                  </h3>
                  <div className="bg-gray-700 rounded-lg">
                    <div className="px-4 py-3 border-b border-gray-600 flex justify-between">
                      <span>Valor mensal</span>
                      <span className="font-semibold">R$ 99,90</span>
                    </div>
                    <div className="px-4 py-3 border-b border-gray-600 flex justify-between">
                      <span>Limite de clientes</span>
                      <span className="font-semibold">30</span>
                    </div>
                    <div className="px-4 py-3 border-b border-gray-600 flex justify-between">
                      <span>Relatórios avançados</span>
                      <span className="font-semibold">Incluídos</span>
                    </div>
                    <div className="px-4 py-3 border-b border-gray-600 flex justify-between">
                      <span>Ferramentas de retenção</span>
                      <span className="font-semibold">Incluídas</span>
                    </div>
                    <div className="px-4 py-3 flex justify-between">
                      <span>Suporte prioritário</span>
                      <span className="font-semibold">Incluído</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">
                    Histórico de Pagamentos
                  </h3>
                  <div className="bg-gray-700 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-600">
                      <thead className="bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Data
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Valor
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                          >
                            Fatura
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-600">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            15/06/2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            R$ 99,90
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                              Pago
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-blue-400 hover:text-blue-300">
                              Baixar PDF
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            15/05/2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            R$ 99,90
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                              Pago
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-blue-400 hover:text-blue-300">
                              Baixar PDF
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            15/04/2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            R$ 99,90
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                              Pago
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button className="text-blue-400 hover:text-blue-300">
                              Baixar PDF
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
