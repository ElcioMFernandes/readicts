# 🌪️ Readicts - Um Visualizador de Redis

Um simples visualizador de dados do Redis construído com Vue.js no frontend e uma API Express.js no backend. Este projeto foi criado para fins de estudo, explorando a integração de uma stack moderna full-stack com TypeScript.

<img width="1916" height="961" alt="Captura de tela de 2025-07-17 22-29-49" src="https://github.com/user-attachments/assets/e1839eeb-f942-40a0-8690-fcbdcefdbe52" />

---

## ✨ Features

- API RESTful com Express.js e TypeScript.
- Visualização em tempo real das chaves e valores armazenados no Redis.
- Interface responsiva e moderna construída com Vue.js 3 e Tailwind CSS.
- Geração de dados falsos (mock data) para popular o banco de dados com um clique.

## 🚀 Tech Stack

**Frontend:**

- Vite
- Vue.js 3
- TypeScript
- TailwindCSS

**Backend:**

- Redis
- Node.js
- Express.js
- TypeScript

**Infraestrutura:**

- Docker

---

## 📋 Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas na sua máquina:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop/)

---

## 🛠️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento.

**1. Clone o repositório:**

```bash
git clone https://github.com/ElcioMFernandes/readicts.git
cd readicts
```

**2. Inicie o container do Redis:**
Certifique-se de que o Docker está em execução e rode o comando abaixo para iniciar o banco de dados Redis.

```bash
docker run --name meu-redis -p 6379:6379 -d redis
```

**3. Instale as dependências do backend (server):**

```bash
cd server
npm i
```

**4. Instale as dependências do frontend (client):**

```bash
cd client
npm i
```

**5. Inicie o servidor backend:**

```bash
cd server
npm run dev
```

**6. Inicie o frontend:**

```bash
cd client
npm run dev
```

Agora, você pode acessar o visualizador de Redis no seu navegador em `http://localhost:5173`.

---

## Autor

**Elcio M. Fernandes**

- [GitHub](https://github.com/ElcioMFernandes)
- [LinkedIn](https://www.linkedin.com/in/elcio-mateus-fernandes/)
