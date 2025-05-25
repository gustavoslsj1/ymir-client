import {
  Github,
  Zap,
  Mail,
  Database,
  Shield,
  Cpu,
  DollarSign,
  PieChart,
  FileText,
} from "lucide-react";

export default function Dashboard() {
  const upcomingBills = [
    {
      id: 1,
      name: "GitHub Pro",
      amount: "200",
      period: "/mo",
      icon: Github,
      bgColor: "bg-black",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      id: 2,
      name: "Vercel Pro",
      amount: "150",
      period: "/mo",
      icon: Zap,
      bgColor: "bg-slate-900",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      id: 3,
      name: "Resend",
      amount: "75",
      period: "/mo",
      icon: Mail,
      bgColor: "bg-green-600",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      id: 4,
      name: "Supabase",
      amount: "125",
      period: "/mo",
      icon: Database,
      bgColor: "bg-emerald-600",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      id: 5,
      name: "Auth0",
      amount: "300",
      period: "/mo",
      icon: Shield,
      bgColor: "bg-orange-500",
      textColor: "text-white",
      iconColor: "text-white",
    },
    {
      id: 6,
      name: "OpenAI",
      amount: "250",
      period: "/mo",
      icon: Cpu,
      bgColor: "bg-purple-600",
      textColor: "text-white",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard YMIR</h1>
          <p className="text-muted-foreground">
            Gerencie seus custos e relatórios
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Total Mensal
              </p>
              <p className="text-2xl font-bold">R$ 1.100</p>
            </div>
            <DollarSign className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Serviços Ativos
              </p>
              <p className="text-2xl font-bold">6</p>
            </div>
            <PieChart className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Economia
              </p>
              <p className="text-2xl font-bold">R$ 200</p>
            </div>
            <FileText className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Upcoming Bills Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Próximas Cobranças</h2>
          <button className="text-sm text-muted-foreground hover:text-foreground">
            Ver todos →
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingBills.map((bill) => (
            <div
              key={bill.id}
              className={`${bill.bgColor} ${bill.textColor} rounded-xl p-6 transition-transform hover:scale-105 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <bill.icon className={`h-8 w-8 ${bill.iconColor}`} />
                <div className="text-right">
                  <p className="text-2xl font-bold">R$ {bill.amount}</p>
                  <p className="text-sm opacity-80">{bill.period}</p>
                </div>
              </div>
              <div>
                <p className="font-medium">{bill.name}</p>
                <p className="text-sm opacity-80">
                  Próximo pagamento em 5 dias
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-blue-100 p-3">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">
              Você tem R$ 5.250 em fundos restantes
            </h3>
            <p className="text-sm text-muted-foreground">
              para os próximos 15 dias.
            </p>
            <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
              Ver detalhes →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
