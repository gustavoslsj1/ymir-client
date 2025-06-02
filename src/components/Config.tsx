"use client"
import { useState } from "react";
import {
  Globe,
  Bell,
  Moon,
  CreditCard,
  Settings as SettingsIcon,
} from "lucide-react";

export default function Config() {
  const [activeTab, setActiveTab] = useState("geral");

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Configurações</h1>
        <p className="text-gray-400">
          Personalize suas preferências do sistema
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="border-b border-gray-700">
          <div className="flex overflow-x-auto">
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "geral"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("geral")}
            >
              Geral
            </button>
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "tema"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("tema")}
            >
              Tema & Aparência
            </button>
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "notificacoes"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("notificacoes")}
            >
              Notificações
            </button>
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "integracao"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("integracao")}
            >
              Integrações
            </button>
            <button
              className={`px-4 py-3 font-medium whitespace-nowrap ${
                activeTab === "faturamento"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab("faturamento")}
            >
              Faturamento
            </button>
          </div>
        </div>

        <div className="p-6">
          {activeTab === "geral" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Preferências Gerais
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Idioma</p>
                      <p className="text-sm text-gray-400">
                        Escolha o idioma de exibição
                      </p>
                    </div>
                    <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2">
                      <option>Português (Brasil)</option>
                      <option>English (US)</option>
                      <option>Español</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fuso horário</p>
                      <p className="text-sm text-gray-400">
                        Defina seu fuso horário
                      </p>
                    </div>
                    <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2">
                      <option>America/Sao_Paulo (GMT-3)</option>
                      <option>UTC</option>
                      <option>America/New_York</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Formato de data</p>
                      <p className="text-sm text-gray-400">
                        Escolha como as datas serão exibidas
                      </p>
                    </div>
                    <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2">
                      <option>DD/MM/YYYY</option>
                      <option>MM/DD/YYYY</option>
                      <option>YYYY-MM-DD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Página inicial</p>
                      <p className="text-sm text-gray-400">
                        Escolha a página que será exibida ao fazer login
                      </p>
                    </div>
                    <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2">
                      <option>Dashboard</option>
                      <option>Relatórios</option>
                      <option>Clientes</option>
                      <option>Retenização</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Mostrar valores monetários</p>
                      <p className="text-sm text-gray-400">
                        Exibir ou ocultar valores monetários no dashboard
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

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          )}

          {activeTab === "tema" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">Tema</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4 border-2 border-blue-500">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Moon size={18} className="mr-2" />
                        <span>Escuro</span>
                      </div>
                      <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="bg-gray-900 rounded h-24 mt-2"></div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <Globe size={18} className="mr-2" />
                        <span>Claro</span>
                      </div>
                      <div className="h-4 w-4 rounded-full bg-gray-500"></div>
                    </div>
                    <div className="bg-gray-100 rounded h-24 mt-2"></div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <SettingsIcon size={18} className="mr-2" />
                        <span>Sistema</span>
                      </div>
                      <div className="h-4 w-4 rounded-full bg-gray-500"></div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-900 to-gray-100 rounded h-24 mt-2"></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Cores do Tema</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="h-12 w-12 mx-auto rounded-full bg-blue-500 mb-2 ring-2 ring-white ring-offset-2 ring-offset-gray-800"></div>
                    <span className="text-sm">Azul</span>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 mx-auto rounded-full bg-purple-500 mb-2"></div>
                    <span className="text-sm">Roxo</span>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 mx-auto rounded-full bg-green-500 mb-2"></div>
                    <span className="text-sm">Verde</span>
                  </div>
                  <div className="text-center">
                    <div className="h-12 w-12 mx-auto rounded-full bg-orange-500 mb-2"></div>
                    <span className="text-sm">Laranja</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Configurações Adicionais
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Animações</p>
                      <p className="text-sm text-gray-400">
                        Ativar animações na interface
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
                      <p className="font-medium">Reduzir movimento</p>
                      <p className="text-sm text-gray-400">
                        Diminuir efeitos visuais para melhor acessibilidade
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

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          )}

          {activeTab === "notificacoes" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Preferências de Notificação
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações por email</p>
                      <p className="text-sm text-gray-400">
                        Receber notificações por email
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
                      <p className="font-medium">Notificações no navegador</p>
                      <p className="text-sm text-gray-400">
                        Receber notificações no navegador
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
                      <p className="font-medium">Alertas de SMS</p>
                      <p className="text-sm text-gray-400">
                        Receber alertas críticos por SMS
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

              <div>
                <h3 className="text-lg font-medium mb-4">Alertas de Sistema</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Alertas de pagamento</p>
                      <p className="text-sm text-gray-400">
                        Notificação quando uma cobrança estiver próxima
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
                        Notificação sobre clientes em risco
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
                      <p className="font-medium">Atualizações do sistema</p>
                      <p className="text-sm text-gray-400">
                        Notificação sobre novas funcionalidades e atualizações
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

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          )}

          {activeTab === "integracao" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Serviços Conectados
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold">
                        G
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Google</p>
                        <p className="text-sm text-gray-400">
                          Conectado em 10/05/2025
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm bg-gray-600 hover:bg-gray-500 rounded-lg">
                      Desconectar
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold">
                        M
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Microsoft</p>
                        <p className="text-sm text-gray-400">
                          Conectado em 15/06/2025
                        </p>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-sm bg-gray-600 hover:bg-gray-500 rounded-lg">
                      Desconectar
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Conectar Novas Integrações
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-650 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold mb-3">
                      S
                    </div>
                    <p className="font-medium">Slack</p>
                    <p className="text-sm text-gray-400">
                      Integre seu workspace
                    </p>
                    <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
                      Conectar
                    </button>
                  </div>

                  <div className="p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-650 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold mb-3">
                      T
                    </div>
                    <p className="font-medium">Trello</p>
                    <p className="text-sm text-gray-400">
                      Sincronize seus quadros
                    </p>
                    <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
                      Conectar
                    </button>
                  </div>

                  <div className="p-4 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-650 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold mb-3">
                      Z
                    </div>
                    <p className="font-medium">Zoom</p>
                    <p className="text-sm text-gray-400">Gerencie reuniões</p>
                    <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
                      Conectar
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Salvar Integrações
                </button>
              </div>
            </div>
          )}

          {activeTab === "faturamento" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Informações de Faturamento
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Nome na Fatura
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Chico Lucas"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email para Fatura
                    </label>
                    <input
                      type="email"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="financeiro@chicolucas.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Endereço de Cobrança
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Av. Paulista, 1000, São Paulo, SP"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      CNPJ ou CPF
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="12.345.678/0001-90"
                    />
                  </div>
                </form>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Método de Pagamento
                </h3>
                <div className="p-4 bg-gray-700 rounded-lg mb-4 flex items-center">
                  <div className="p-2 bg-gray-600 rounded-md mr-3">
                    <CreditCard size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Cartão de Crédito</p>
                    <p className="text-sm text-gray-400">**** **** **** 4582</p>
                  </div>
                  <div>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                      Padrão
                    </span>
                  </div>
                </div>

                <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
                  + Adicionar novo método
                </button>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Salvar Alterações
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
