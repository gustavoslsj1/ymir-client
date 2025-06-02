import { useTheme } from "next-themes";

export function useThemeColors() {
  const { theme } = useTheme();

  if (theme === "dark") {
    return {
      cor: "bg-gray-800",
      corbutton: "bg-gray-800 hover:bg-gray-700",
      textbuttoncor: "text-gray-400  hover:text-gray-300",
      correlatorios : " hover:bg-gray-600",
      textcor: "text-gray-400",
      barcor:" bg-slate-700" ,
      clientbutton: " bg-blue-600 hover:bg-blue-700",
    };
  }

  return {
    cor: "bg-slate-300",
    corbutton: "bg-gray-50 hover:bg-gray-200",
    textbuttoncor: "text-gray-700 hover:text-gray-900",
    correlatorios : " hover:bg-gray-200",
    barcor:" bg-slate-200" ,
    textcor: "text-gray-700",
    clientbutton: " bg-blue-300 hover:bg-blue-400",
  };
}
