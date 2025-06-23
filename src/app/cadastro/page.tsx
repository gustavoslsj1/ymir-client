"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { creatUser } from "@/app/service/userService";

export const userFormSchema = z.object({
  name: z.string(), // valor padrão no schema
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export default function Cadastro() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "usuario",
    },
  });

  async function handleSubmit(data: z.infer<typeof userFormSchema>) {
    try {
      console.log("Dados do usuário:", data);

      await creatUser(data);

      console.log("Usuário criado com sucesso!");
      form.reset();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      console.error("Erro ao criar usuário:", errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Bem vindo a Ymir
            </h1>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full space-y-4"
            >
              {/* Email Field */}
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
                name="name"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="sr-only">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                        <Input
                          type="nome"
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

              {/* Password Field */}
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
                          // type={passwordVisible ? "text" : "password"}
                          placeholder="Senha"
                          className="pl-10 pr-10 h-12 rounded-md"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          // onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          {/* {passwordVisible ? (
                            <Eye size={18} />
                          ) : (
                            <EyeOff size={18} />
                          )} */}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                    <Button type="submit">Cadastrar</Button>
                  </FormItem>
                )}
              />

              <div className="relative my-6">
                <Separator className="bg-gray-300" />
              </div>

              {/* Sign Up Link */}
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  ja tem um conta?{" "}
                  <a
                    href="/"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>

      {/* Right Column - Image/Gradient */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-500 to-cyan-500">
        <div className="w-full flex flex-col justify-center items-center px-12 py-12 text-white">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold mb-6">Palavras</h2>
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Imagem"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
