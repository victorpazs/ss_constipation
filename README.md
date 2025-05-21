# ![Logo](./logo.png)

# 🩺 Sistema Especialista: Constipação

Sistema especialista interativo para triagem e orientação sobre constipação intestinal, com interface web moderna e backend robusto para registro e análise dos dados coletados.

---

## 📁 Estrutura do Projeto

```
constipation_ss/
├── frontend/        # Interface em React (Vite + Tailwind + shadcn/ui)
├── backend/         # API em Express com banco de dados via Prisma
├── .gitignore
├── README.md
├── package.json     # Scripts utilitários para todo o monorepo
```

---

## ⚙️ Tecnologias Utilizadas

| Camada    | Tecnologias                                     |
| --------- | ----------------------------------------------- |
| Frontend  | React, Vite, TypeScript, TailwindCSS, shadcn/ui |
| Backend   | Node.js, Express, TypeScript, Prisma ORM        |
| Banco     | SQLite (padrão) ou PostgreSQL                   |
| Dev Tools | ts-node-dev, concurrently, dotenv               |

---

## 🚀 Primeiros Passos

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/constipation_ss.git
cd constipation_ss
```

### 2. Instale as dependências

```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

### 3. Configure o banco de dados

Crie o arquivo `.env` no backend com:

```env
# backend/.env
DATABASE_URL="file:./dev.db"
```

Depois:

```bash
cd backend
npx prisma migrate dev --name init
```

---

## 🧪 Desenvolvimento Local

Com `concurrently` instalado, você pode rodar tudo de uma vez:

```bash
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend/API: [http://localhost:3000/api/assessments](http://localhost:3000/api/assessments)

---

## 📦 Scripts disponíveis

### No diretório raiz:

```json
"scripts": {
  "dev": "concurrently \"npm run dev --prefix frontend\" \"npm run dev --prefix backend\"",
  "build": "npm run build --prefix frontend && npm run build --prefix backend"
}
```

### No `frontend/`:

- `npm run dev` → inicia app React
- `npm run build` → build de produção

### No `backend/`:

- `npm run dev` → inicia API com `ts-node-dev`
- `npm run build` → compila para `/dist`
- `npx prisma studio` → painel web de visualização do banco

---

## 🧠 Funcionalidades

- Motor de inferência com regras configuráveis
- Interface progressiva com perguntas baseadas em JSON
- Encaminhamento com alerta e reinício
- Resumo do diagnóstico final
- Integração com backend e banco de dados

---

## 🚀 Deploy (Sugerido)

| Camada   | Plataforma                                                     | Sugestão                    |
| -------- | -------------------------------------------------------------- | --------------------------- |
| Frontend | [Vercel](https://vercel.com)                                   | CI/CD automático com GitHub |
| Backend  | [Railway](https://railway.app) ou [Render](https://render.com) | Deploy contínuo da API      |
| Banco    | SQLite (dev) ou PostgreSQL em produção via Railway             |                             |

---

## 📄 Licença

Este projeto é livre para fins educacionais e profissionais. Adicione uma licença (MIT, GPL etc.) conforme necessário.
