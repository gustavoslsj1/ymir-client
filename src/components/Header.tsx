"use client";

import { Button } from "@/components/ui/button";
import { Menu, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 border-b border-blue-700">
      <div className="flex items-center justify-between px-6 h-16">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-blue-700"
        >
          <Menu size={20} />
        </Button>

        <div className="flex items-center gap-4 ml-auto">
          <Button
            variant="secondary"
            className="bg-white hover:bg-gray-100 text-gray-900"
          >
            <Plus size={16} className="mr-2" />
            Novo Custo
          </Button>
        </div>
      </div>
    </header>
  );
}
