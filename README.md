# Gerador de Propostas MEI

Aplicação web para criação de propostas comerciais personalizadas para microempreendedores individuais.

## Funcionalidades
- Formulário interativo para dados de empresa e cliente
- Cadastro de itens com cálculo de valor total
- Personalização de cores e inclusão de logo
- Pré-visualização em tempo real
- Geração de PDF com [jsPDF](https://github.com/parallax/jsPDF)
- Compartilhamento rápido via WhatsApp
- Limite gratuito de três propostas por mês

## Tecnologias
- [React](https://react.dev) + [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com) e Radix UI
- [jsPDF](https://github.com/parallax/jsPDF)
- [Vercel Web Analytics](https://vercel.com/docs/analytics) e [Speed Insights](https://vercel.com/docs/speed-insights)

## Instalação
```bash
npm install
```

## Ambiente de desenvolvimento
```bash
npm run dev
```

Para gerar a versão de produção:
```bash
npm run build
npm run preview
```

Acesse `http://localhost:5173` em seu navegador e preencha os campos para gerar a proposta.

## Release Notes
### v0.1.1
- Correção na importação do jsPDF que causava erro ao gerar PDFs

### v0.1.0
- Primeira versão da aplicação com geração de propostas e download em PDF
