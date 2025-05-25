"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import type { Expense } from "@/app/authenticated/custos/page";

interface ExpenseTableProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const categoryColors: Record<string, string> = {
  Alimentação: "bg-green-100 text-green-800",
  Transporte: "bg-blue-100 text-blue-800",
  Lazer: "bg-purple-100 text-purple-800",
  Saúde: "bg-red-100 text-red-800",
  Outros: "bg-gray-100 text-gray-800",
};

export function ExpenseTable({ expenses, onDelete }: ExpenseTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Custos Cadastrados</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Descrição</TableHead>
              <TableHead>Valor</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="w-[100px]">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-gray-500 py-8"
                >
                  Nenhum custo cadastrado ainda
                </TableCell>
              </TableRow>
            ) : (
              expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell className="font-medium">
                    {expense.description}
                  </TableCell>
                  <TableCell>R$ {expense.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        categoryColors[expense.category] ||
                        categoryColors["Outros"]
                      }
                    >
                      {expense.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(expense.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
