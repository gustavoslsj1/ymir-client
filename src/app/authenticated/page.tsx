import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";

import Image from "next/image";
import { ThemeProvider } from "../provider/ThemeProvider";

export default function Authenticated() {
  return (
    <div>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}
