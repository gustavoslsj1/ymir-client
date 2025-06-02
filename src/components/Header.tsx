import React from "react";
import { Menu, Download, Moon, Sun } from "lucide-react";

import { ThemeToggle } from "@/app/provider/theme-toggle";
export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        <div className="flex items-center">
          <button className="md:hidden p-2 rounded-md text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
            <Menu className="h-6 w-6" />
          </button>
          <div className="ml-4 md:ml-0">
            <h1 className="text-xl font-semibold">Dashboard do Consultor</h1>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 px-3 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <Download className="h-4 w-4" />
            <span>Relatório Executivo</span>
          </button>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
