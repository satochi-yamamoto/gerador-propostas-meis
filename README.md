# Gerador de Propostas MEI

Gerador de Propostas MEI é uma aplicação web moderna e intuitiva que facilita a criação de propostas comerciais profissionais para microempreendedores individuais. Com uma interface responsiva e totalmente em português, o sistema permite personalizar cores, adicionar logotipo e gerar um PDF pronto para envio ao cliente.

## 📱 Demo

![Screenshot da Aplicação](https://github.com/user-attachments/assets/38ec8d6b-311b-46a4-8d62-cec5ff6e1aa3)

**[🔗 Acesse a aplicação](https://gerador-propostas-meis.vercel.app)**

## ✨ Principais Recursos

### 📝 Criação de Propostas
- **Formulário intuitivo**: Interface com abas organizadas (Empresa, Cliente, Itens, Configurações)
- **Validação em tempo real**: Campos obrigatórios e validações automáticas
- **Múltiplos itens**: Adicione quantos produtos/serviços desejar
- **Cálculos automáticos**: Soma total e valores unitários calculados automaticamente

### 🎨 Personalização
- **Cores customizáveis**: Personalize as cores da proposta
- **Upload de logotipo**: Adicione a identidade visual da sua empresa
- **Visualização em tempo real**: Veja como ficará a proposta antes de gerar o PDF

### 📄 Geração de PDF
- **PDF profissional**: Layout limpo e organizado
- **Download instantâneo**: Baixe a proposta em PDF com um clique
- **Otimizado para impressão**: Formatação adequada para impressão

### 🚀 Funcionalidades Extras
- **Compartilhamento WhatsApp**: Envie a proposta diretamente pelo WhatsApp
- **Design responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- **Limite mensal gratuito**: Três propostas gratuitas por mês
- **Dados persistentes**: Suas informações são salvas localmente no navegador

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[React](https://react.dev)** - Biblioteca JavaScript para construção da interface
- **[Vite](https://vitejs.dev)** - Build tool moderna e rápida
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com)** - Componentes acessíveis e não estilizados
- **[Framer Motion](https://www.framer.com/motion)** - Animações fluidas
- **[Lucide React](https://lucide.dev)** - Ícones SVG modernos

### Geração de PDF
- **[jsPDF](https://github.com/parallax/jsPDF)** - Biblioteca para criação de PDFs
- **[html2canvas](https://html2canvas.hertzen.com)** - Captura de tela de elementos HTML

### Analytics e Monitoramento
- **[Vercel Analytics](https://vercel.com/docs/analytics)** - Análise de tráfego
- **[Vercel Speed Insights](https://vercel.com/docs/speed-insights)** - Monitoramento de performance

## 🚀 Como Usar

### 1. Acesse a Aplicação
Visite [https://gerador-propostas-meis.vercel.app](https://gerador-propostas-meis.vercel.app) ou execute localmente.

### 2. Preencha os Dados
- **Empresa**: Insira as informações da sua empresa (nome, CNPJ, contato, etc.)
- **Cliente**: Adicione os dados do cliente que receberá a proposta
- **Itens**: Cadastre os produtos/serviços com quantidade e valores
- **Configurações**: Personalize cores e adicione seu logotipo

### 3. Visualize e Ajuste
- Acompanhe a proposta sendo gerada em tempo real
- Faça ajustes conforme necessário
- Verifique todos os dados antes de gerar o PDF

### 4. Gerar e Compartilhar
- Clique em "Gerar PDF" para baixar a proposta
- Use o botão "Compartilhar" para enviar pelo WhatsApp
- Sua proposta está pronta para envio!

## 📋 Requisitos do Sistema

### Navegadores Suportados
- Chrome 80+
- Firefox 74+
- Safari 13.1+
- Edge 80+

### Recomendações
- Conexão com internet para carregamento inicial
- JavaScript habilitado
- Resolução mínima: 360px (mobile-first)

## 💻 Desenvolvimento Local

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/satochi-yamamoto/gerador-propostas-meis.git

# Navegue até o diretório
cd gerador-propostas-meis

# Instale as dependências
npm install
```

### Executar em Desenvolvimento
```bash
npm run dev
```
Abra `http://localhost:5173` para acessar a aplicação em modo de desenvolvimento.

### Build de Produção
```bash
npm run build
npm run preview
```

### Estrutura do Projeto
```
src/
├── components/          # Componentes React
├── lib/                # Utilitários e configurações
├── App.jsx             # Componente principal
└── main.jsx            # Ponto de entrada
```

## 🌐 Deploy

A aplicação está hospedada na [Vercel](https://vercel.com) com deploy automático a partir da branch principal.

### Deploy Manual
```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- 🐛 Reportar bugs através das [Issues](https://github.com/satochi-yamamoto/gerador-propostas-meis/issues)
- 💡 Sugerir novas funcionalidades
- 🔧 Enviar Pull Requests com melhorias
- 📖 Melhorar a documentação

### Como Contribuir
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Autor**: Satochi Yamamoto
- **GitHub**: [@satochi-yamamoto](https://github.com/satochi-yamamoto)
- **Issues**: [Reportar problema](https://github.com/satochi-yamamoto/gerador-propostas-meis/issues)

## 🎯 Roadmap

- [ ] Modo escuro
- [ ] Temas personalizáveis
- [ ] Exportação para Word
- [ ] Templates de propostas
- [ ] Histórico de propostas geradas
- [ ] Integração com APIs de CEP
- [ ] Assinatura digital
- [ ] Múltiplos idiomas
