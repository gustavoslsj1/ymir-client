import React from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  RefreshCw,
  Settings,
  ChartArea,
} from "lucide-react";

export function AppSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-2">
          <ChartArea className="h-6 w-6 text-blue-600" />
          <h1 className="text-lg font-bold text-slate-900 dark:text-white">
            ymir
          </h1>
        </div>
      </div>

      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-3">
          <a
            href="/authenticated/perfil "
            className="flex justify-center items-center "
          >
            <div className="h-10 w-10 rounded-full m-2 bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="font-medium">cl</span>
            </div>
            <div>
              <p className="font-medium text-sm">chico lucas </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                patrão rico
              </p>
            </div>
          </a>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <a
              href="/authenticated"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/authenticated/relatorios"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <FileText className="h-5 w-5" />
              <span>Relatórios</span>
            </a>
          </li>
          <li>
            <a
              href="/authenticated/clientes"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Users className="h-5 w-5" />
              <span>Clientes</span>
            </a>
          </li>
          <li>
            <a
              href="/authenticated/retenizacao"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Retenização</span>
            </a>
          </li>
          <li>
            <a
              href="/authenticated/configuracao"
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>Configurações</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
