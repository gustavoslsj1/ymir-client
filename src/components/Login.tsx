"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Percent,
  Sparkles,
  Clock,
  CircleDot,
  Globe,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { LoginUser } from "@/app/service/userService";

export const userFormSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, seterror] = useState<string>("");
  const router = useRouter();
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(data: z.infer<typeof userFormSchema>) {
    seterror("");
    try {
      await LoginUser(data);
      router.replace("/authenticated");
      form.reset();
    } catch (error: any) {
      const message =
        error?.response?.data?.message ??
        (error instanceof Error ? error.message : "error");

      seterror(message);
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-2 text-center">
              Login
            </h1>
            <p className="text-gray-600  font-medium text-center ">
              Bem vindo ao Ymir
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full space-y-4"
            >
              {error && (
                <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only ">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                        <Input
                          type="email"
                          placeholder="exemplo@exemplo.com"
                          className="pl-10 h-12 rounded-md"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Senha</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                        <Input
                          type={passwordVisible ? "text" : "password"}
                          placeholder="Senha"
                          className="pl-10 pr-10 h-12 rounded-md"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {passwordVisible ? (
                            <Eye size={18} />
                          ) : (
                            <EyeOff size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Entrar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex justify-between items-center mb-6">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <div className="relative my-6">
                <Separator className="bg-gray-300" />
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  Não tem uma conta?{" "}
                  <a
                    href="cadastro"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Cadastrar
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-700/20 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-400/20"></div>

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-300 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-40 left-16 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-60 left-1/2 w-1 h-1 bg-sky-300 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-60 right-20 w-2 h-2 bg-blue-200 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-32 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-blue-300 rounded-full animate-bounce opacity-40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-12 text-center">
          <div className="mb-8 relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-blue-300/30 shadow-2xl">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-white">Y</span>
              </div>
            </div>
          </div>

          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 mb-6 animate-pulse">
            ymir
          </h1>

          <p className="text-xl text-blue-100 mb-16 max-w-lg leading-relaxed opacity-90">
            Transforme suas ideias em realidade com nossa plataforma inovadora
            de gestão e automação
          </p>

          <div className="grid grid-cols-3 gap-6 mb-16">
            <div className="group ">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-300/20 hover:bg-white/20 hover:border-blue-300/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Shield className="w-10 h-10 text-blue-300 mx-auto animate-pulse" />
              </div>
              <p className="text-sm text-blue-200 mt-3 font-medium">
                Segurança
              </p>
            </div>

            <div className="group">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-300/20 hover:bg-white/20 hover:border-blue-300/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Zap className="w-10 h-10 text-cyan-300 mx-auto" />
              </div>
              <p className="text-sm text-blue-200 mt-3 font-medium">
                Performance
              </p>
            </div>

            <div className="group ">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-300/20 hover:bg-white/20 hover:border-blue-300/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Globe
                  className="w-10 h-10 text-blue-400 mx-auto animate-spin"
                  style={{ animationDuration: "4s" }}
                />
              </div>
              <p className="text-sm text-blue-200 mt-3 font-medium">Global</p>
            </div>
          </div>

          <div
            className="absolute top-1/4 right-16 w-40 h-40 border-2 border-blue-400/20 rounded-full animate-spin opacity-30"
            style={{ animationDuration: "25s" }}
          ></div>
          <div className="absolute bottom-1/4 left-16 w-28 h-28 border border-cyan-400/30 rounded-full animate-pulse"></div>

          <div className="absolute top-36 right-36 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 transform rotate-45 animate-bounce opacity-60"></div>
          <div className="absolute bottom-36 left-36 w-8 h-8 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-pulse opacity-50"></div>

          <div className="absolute top-1/2 left-8 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-pulse"></div>
          <div
            className="absolute top-1/3 right-8 w-1 h-24 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-950 to-transparent"></div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-transparent"></div>
      </div>
    </div>
  );
}
