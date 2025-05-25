"use client";

import { cn } from "@/lib/utils";
import { PieChart, DollarSign, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { icon: PieChart, href: "/authenticated/perfil", label: "perfil" },
  { icon: PieChart, href: "/authenticated", label: "Dashboard" },
  { icon: DollarSign, href: "/authenticated/custos", label: "Custos" },
  { icon: FileText, label: "Relatórios" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar side="left" className="border-blue-700" collapsible="icon">
      <div className="flex flex-col h-full bg-gradient-to-b from-blue-600 to-blue-800">
        <SidebarHeader className="p-4">
          <h1
            className={cn(
              "text-5xl flex justify-center font-serif text-cyan-400 transition-all duration-200",
              collapsed && "opacity-0"
            )}
          >
            YMIR
          </h1>
        </SidebarHeader>

        <SidebarContent className="p-2">
          <SidebarMenu className="gap-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "w-full gap-2 justify-start text-white hover:bg-blue-700 hover:text-white data-[active=true]:bg-blue-700 data-[active=true]:text-white",
                    "h-auto py-2 px-3"
                  )}
                  // isActive={item.active}
                >
                  <a
                    href={item.href}
                    className="flex w-full items-center gap-2"
                  >
                    <item.icon size={20} />
                    {!collapsed && <span>{item.label}</span>}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
