# MensConcept

Projeto React com TypeScript, Vite, React Router e shadcn/ui.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **React Router** - Roteamento para aplicações React
- **shadcn/ui** - Componentes UI acessíveis e customizáveis
- **Tailwind CSS** - Framework CSS utility-first

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar o projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build para produção

```bash
npm run build
```

## 📁 Estrutura do projeto

```
src/
├── components/     # Componentes reutilizáveis
├── lib/           # Utilitários
├── pages/         # Páginas da aplicação
├── App.tsx        # Componente principal com rotas
├── main.tsx       # Ponto de entrada
└── index.css      # Estilos globais
```

## 🎨 Adicionar componentes shadcn/ui

```bash
npx shadcn@latest add [component-name]
```

Exemplo:
```bash
npx shadcn@latest add button
```

**Nota:** O shadcn/ui está configurado e pronto para uso. Você pode adicionar qualquer componente disponível na [documentação oficial](https://ui.shadcn.com/docs/components).

## 🔗 GitHub

O projeto está configurado com Git. Para conectar ao GitHub:

1. Crie um novo repositório no GitHub (não inicialize com README, .gitignore ou licença)

2. Conecte o repositório local ao remoto:
```bash
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

3. Renomeie a branch principal (se necessário):
```bash
git branch -M main
```

4. Envie o código para o GitHub:
```bash
git push -u origin main
```

**Nota:** Se você já tem um repositório criado, substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos valores corretos.

