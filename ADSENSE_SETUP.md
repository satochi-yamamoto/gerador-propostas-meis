# Google AdSense - Configuração e Uso

## ✅ Configuração Implementada

### 1. Script AdSense Adicionado
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4789090074866563"
     crossorigin="anonymous"></script>
```

### 2. Performance Otimizada
- **Preconnect**: `<link rel="preconnect" href="https://pagead2.googlesyndication.com" crossorigin>`
- **DNS Prefetch**: `<link rel="dns-prefetch" href="//pagead2.googlesyndication.com">`

### 3. Componente AdSense Criado
Localização: `src/components/AdSenseAd.jsx`

## 🚀 Como Usar Anúncios

### Exemplo Básico
```jsx
import AdSenseAd from '@/components/AdSenseAd';

// Em qualquer componente
<AdSenseAd 
  adSlot="1234567890"
  adFormat="auto"
  className="my-4"
/>
```

### Configurações Disponíveis
- `adSlot`: ID do slot do anúncio (obrigatório)
- `adFormat`: Formato do anúncio (default: "auto")
- `fullWidthResponsive`: Responsivo (default: true)
- `className`: Classes CSS customizadas
- `style`: Estilos inline

## 📍 Locais Recomendados para Anúncios

### 1. Entre Seções
```jsx
// No ProposalGenerator.jsx, entre os formulários
<AdSenseAd 
  adSlot="SLOT_ID_1" 
  className="my-8"
/>
```

### 2. Sidebar/Lateral
```jsx
// Em uma sidebar
<AdSenseAd 
  adSlot="SLOT_ID_2"
  adFormat="vertical"
  className="w-full max-w-xs"
/>
```

### 3. Footer/Rodapé
```jsx
// No final da página
<AdSenseAd 
  adSlot="SLOT_ID_3"
  adFormat="horizontal"
  className="mt-8 mb-4"
/>
```

## ⚠️ Próximos Passos

### 1. Criar Slots no Google AdSense
1. Acesse [Google AdSense](https://www.google.com/adsense/)
2. Vá em "Anúncios" > "Por site"
3. Adicione seu site: `gerador-propostas-meis.vercel.app`
4. Crie slots de anúncio para diferentes posições
5. Copie os IDs dos slots criados

### 2. Implementar Anúncios
```jsx
// Exemplo com slots reais
<AdSenseAd adSlot="1234567890" /> // Substitua pelo ID real
```

### 3. Testar em Produção
- Os anúncios só aparecem em produção
- Teste no domínio real após deploy
- Monitore performance e earnings

## 🎯 Boas Práticas

### Posicionamento
- **Não exagere**: 2-3 anúncios por página
- **Integre naturalmente**: Entre conteúdos relevantes
- **Evite acima da dobra**: Não cubra conteúdo principal

### Performance
- **Lazy loading**: Carregue anúncios quando necessário
- **Responsive**: Use `data-full-width-responsive="true"`
- **Mobile-friendly**: Teste em dispositivos móveis

### Compliance
- **Política implementada**: ✅ Já temos política de privacidade
- **LGPD**: ✅ Conformidade total
- **Conteúdo apropriado**: Mantenha sempre profissional

## 📊 Monitoramento

### Métricas Importantes
- **RPM**: Receita por mil impressões
- **CTR**: Taxa de cliques
- **Viewability**: Percentual de anúncios visíveis
- **Core Web Vitals**: Impact na performance

### Ferramentas
- Google AdSense Dashboard
- Google Analytics
- Vercel Analytics (já implementado)
- PageSpeed Insights

---

**Nota**: O Publisher ID `ca-pub-4789090074866563` está configurado. Certifique-se de que este ID está correto e aprovado no Google AdSense.
