# Etapa 1: Construção
FROM node:22-alpine AS builder

WORKDIR /app

# Instala o pnpm globalmente
RUN npm install -g pnpm

# Copia os arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install

# Copia o restante do código
COPY . .

# Build da aplicação
RUN pnpm run build

# Remove as devDependencies para reduzir o tamanho da imagem
RUN pnpm prune --prod

# Etapa 2: Execução
FROM node:22-alpine

WORKDIR /app

# Instala o pnpm novamente na imagem final
RUN npm install -g pnpm

# Copia apenas os arquivos necessários do estágio de construção
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public

# Expondo a porta 3030
EXPOSE 3030

# Comando para iniciar a aplicação
CMD ["pnpm", "start"]
