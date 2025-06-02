"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { useIsMounted } from "@/hooks/useIsMounted";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
