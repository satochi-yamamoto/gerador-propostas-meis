# Gerador de Propostas MEI

Gerador de Propostas MEI é uma aplicação web que facilita a criação de propostas comerciais profissionais para microempreendedores individuais. Com uma interface simples e totalmente em português, o sistema permite personalizar cores, adicionar logo e gerar um PDF pronto para envio ao cliente.

## Principais Recursos
- Formulário dinâmico para preenchimento dos dados da empresa e do cliente
- Cadastro de serviços ou produtos com cálculo automático de valores
- Personalização das cores e inserção de logotipo
- Visualização em tempo real da proposta
- Geração de PDF utilizando [jsPDF](https://github.com/parallax/jsPDF)
- Atalho para compartilhamento da proposta pelo WhatsApp
- Limite gratuito de três propostas por mês

## Tecnologias Utilizadas
- [React](https://react.dev) e [Vite](https://vitejs.dev) para a interface
- [Tailwind CSS](https://tailwindcss.com) com componentes Radix UI
- [jsPDF](https://github.com/parallax/jsPDF) para criação de PDFs
- [Vercel Web Analytics](https://vercel.com/docs/analytics) e [Speed Insights](https://vercel.com/docs/speed-insights)

## Instalação
```bash
npm install
```

## Ambiente de Desenvolvimento
```bash
npm run dev
```
Abra `http://localhost:5173` para acessar a aplicação em modo de desenvolvimento.

Para gerar a versão de produção:
```bash
npm run build
npm run preview
```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias e correções.

## Histórico de Versões
### v0.1.1
- Correção na importação do jsPDF que causava falha ao gerar PDFs

### v0.1.0
- Primeira versão com geração de propostas e download em PDF
