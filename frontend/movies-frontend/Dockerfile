# Usa uma imagem base do Node.js
FROM node:18.6


# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de configuração
COPY package.json yarn.lock ./

#RUN yarn add -g vite

# Instala as dependências do projeto
RUN yarn install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila o código do projeto
RUN yarn build

# Expõe a porta 3000 para acesso externo
EXPOSE 5173

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["yarn", "dev"]

