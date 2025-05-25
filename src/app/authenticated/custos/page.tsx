"use client";

import { ExpenseChart } from "@/components/chart";
import { ExpenseForm } from "@/components/form";
import { ExpenseTable } from "@/components/table";
import { useState } from "react";

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
}

const initialExpenses: Expense[] = [
  {
    id: "1",
    description: "Supermercado",
    amount: 350.0,
    category: "Alimentação",
  },
  {
    id: "2",
    description: "Uber",
    amount: 50.0,
    category: "Transporte",
  },
];

export default function Custo() {
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);

  const addExpense = (expense: Omit<Expense, "id">) => {
    const newExpense: Expense = {
      ...expense,
      id: Date.now().toString(),
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gráfico de Pizza */}
          <div className="col-span-1">
            <ExpenseChart expenses={expenses} />
          </div>

          {/* Lista de Custos */}
          <div className="col-span-1 lg:col-span-2">
            <ExpenseTable expenses={expenses} onDelete={deleteExpense} />
          </div>

          {/* Formulário de Cadastro */}
          <div className="col-span-1">
            <ExpenseForm onSubmit={addExpense} />
          </div>
        </div>
      </main>
    </div>
  );
}
