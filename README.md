🏛️ Ymir ERP - Frontend

Frontend do ERP Ymir, construído com Next.js 15, TypeScript, Tailwind CSS, shadcn/ui e Docker, garantindo uma interface moderna, escalável e consistente.
🚀 Tecnologias

    Next.js 15 - Framework React fullstack com App Router

    TypeScript - Superset tipado do JavaScript

    Tailwind CSS - Framework de estilos utilitário

    shadcn/ui - Componentes de interface acessíveis

    lucide-react - Ícones open source

    pnpm - Gerenciador de pacotes rápido

    Docker - Containerização

    Node.js 22 - Ambiente de execução

📁 Estrutura do Projeto

src/
├── app/                   # Páginas e rotas via App Router
│   ├── authenticated/     # Páginas protegidas
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── sidebar/           # Sidebar e subcomponentes
│   └── ui/                # UI personalizada: botões, tabelas, etc.
├── global/                # Estilos globais
├── hooks/                 # Hooks customizados
├── lib/                   # Bibliotecas utilitárias
├── styles/                # Tailwind e CSS global
├── public/                # Arquivos estáticos
.biome.json                # Configuração de lint e formatação

🛠️ Configuração do Ambiente
Pré-requisitos

    Node.js 22+

    pnpm

    Docker & Docker Compose

✅ Instalação

    Clone o repositório:

git clone <repository-url>
cd ymir-client

    Instale as dependências:

pnpm install

    Configure as variáveis de ambiente:

cp .env.example .env
# Edite o arquivo .env conforme necessário

🐳 Docker

// mudar o packjason  nos scripts para start -> next start -p 3030
Comandos Disponíveis

    Build da imagem:

pnpm run docker:build

    Subir containers (produção):

pnpm run docker:up

    Subir containers (desenvolvimento):

pnpm run docker:dev

    Ver logs:

pnpm run docker:logs

    Parar containers:

pnpm run docker:down

    Limpar volumes e containers:

pnpm run docker:clean

Serviços

    Frontend Prod: http://localhost:3000

    Frontend Dev: http://localhost:3001 (modo dev)

    Next.js Dev Tools: http://localhost:3001/_next

🚀 Inicialização Manual
Desenvolvimento (sem Docker):

pnpm run dev

Produção (sem Docker):

pnpm run build
pnpm run start

🔍 Scripts Disponíveis

    pnpm run dev - Desenvolvimento

    pnpm run build - Build de produção

    pnpm run start - Servidor Next.js

    pnpm run lint - Lint de código

    pnpm run format - Formatação automática

    pnpm run docker:* - Comandos Docker (ver seção Docker)

🎨 Qualidade de Código

O projeto utiliza Biome para linting e formatação.
Comandos:

    pnpm run lint - Verifica problemas.

    pnpm run lint:fix - Corrige automaticamente.

    pnpm run format - Formata o código.

    pnpm run check - Lint + format + imports.

Configuração:

    Arquivo: biome.json

    Indentação: 2 espaços

    Largura: 80 caracteres

🔒 Segurança

    Autenticação via JWT (integração futura)

    CORS configurado

    Validação de entradas

🏗️ Próximas Fases

    Integração com API GraphQL

    Implementação completa de autenticação

    Módulo de Dashboard com gráficos

    Melhorias de acessibilidade

🤝 Contribuição

    Crie uma branch:
    git checkout -b feature/NovaFeature

    Commit:
    git commit -m 'Add NovaFeature'

    Push:
    git push origin feature/NovaFeature

    Abra um Pull Request

📦 Versões

    Node.js: 22

    Next.js: 15

    pnpm: última versão estável

    Tailwind: latest

    shadcn/ui: latest

Quer que eu também gere o Dockerfile e docker-compose.yml padrão para este frontend?
Se sim, me confirma:
✅ Dockerfile
✅ docker-compose.yml

