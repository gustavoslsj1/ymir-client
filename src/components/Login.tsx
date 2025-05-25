"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<LoginFormData>();

  const rememberValue = watch("remember");

  const onSubmit = async (values: LoginFormData) => {
    setLoading(true);
    console.log("Login values:", values);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

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

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  id="email"
                  type="email"
                  placeholder="exemplo@exemplo.com"
                  className="pl-10 h-12 rounded-md"
                  {...register("email", {
                    required: "porfavor coloque seu email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "valide seu email",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="sr-only">
                Senha
              </Label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Senha"
                  className="pl-10 pr-10 h-12 rounded-md"
                  {...register("password", {
                    required: "porfavor coloque sua senha",
                  })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberValue || false}
                  onCheckedChange={(checked) =>
                    setValue("remember", checked as boolean)
                  }
                />
                <Label htmlFor="remember" className="text-gray-600 text-sm">
                  Remember me
                </Label>
              </div>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Esqueceu a senha ?
              </a>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-md bg-blue-500 hover:bg-blue-600 transition-all duration-200"
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>

            {/* Divider */}
            <div className="relative my-6">
              <Separator className="bg-gray-300" />
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Não tem uma conta ?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Cadastrar
                </a>
              </p>
            </div>
          </form>
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
