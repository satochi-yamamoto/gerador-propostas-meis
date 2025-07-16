// Lazy-loaded PDF generation module
export const generatePDFLazy = async (data) => {
  // Dynamically import the heavy PDF generation dependencies
  const [{ jsPDF }, { hexToRgb }] = await Promise.all([
    import('jspdf'),
    import('./utils')
  ]);

  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Configurações de cores
  const primaryColor = hexToRgb(data.primaryColor);
  const secondaryColor = hexToRgb(data.secondaryColor);

  // Helper function para adicionar texto com quebra de linha
  function addText(text, x, y, maxWidth, fontSize = 10, style = 'normal') {
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', style);
    
    const lines = pdf.splitTextToSize(text, maxWidth);
    pdf.text(lines, x, y);
    return y + (lines.length * fontSize * 0.4);
  }

  // Helper function para adicionar nova página se necessário
  function checkPageBreak(requiredSpace) {
    if (yPosition + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      yPosition = margin;
    }
  }

  try {
    // Header com logo (se disponível)
    if (data.companyLogo) {
      try {
        pdf.addImage(data.companyLogo, 'JPEG', margin, yPosition, 30, 20);
      } catch {
        // Ignora falhas ao adicionar a logo
      }
    }

    // Título da empresa
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text(data.companyName || 'Sua Empresa', data.companyLogo ? margin + 35 : margin, yPosition + 15);

    // Data e validade
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    const currentDate = new Date().toLocaleDateString('pt-BR');
    pdf.text(`Data: ${currentDate}`, pageWidth - 80, yPosition + 10);
    pdf.text(`Validade: ${data.validityDays} dias`, pageWidth - 80, yPosition + 20);

    yPosition += 40;

    // Informações da empresa
    checkPageBreak(60);
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DADOS DA EMPRESA', margin, yPosition);
    yPosition += 10;

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    
    if (data.companyDocument) {
      yPosition = addText(`CNPJ: ${data.companyDocument}`, margin, yPosition, pageWidth - 2 * margin);
    }
    if (data.companyPhone) {
      yPosition = addText(`Telefone: ${data.companyPhone}`, margin, yPosition, pageWidth - 2 * margin);
    }
    if (data.companyEmail) {
      yPosition = addText(`E-mail: ${data.companyEmail}`, margin, yPosition, pageWidth - 2 * margin);
    }
    if (data.companyAddress) {
      yPosition = addText(`Endereço: ${data.companyAddress}`, margin, yPosition, pageWidth - 2 * margin);
    }

    yPosition += 15;

    // Informações do cliente
    checkPageBreak(60);
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DADOS DO CLIENTE', margin, yPosition);
    yPosition += 10;

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    
    if (data.clientName) {
      yPosition = addText(`Nome: ${data.clientName}`, margin, yPosition, pageWidth - 2 * margin);
    }
    if (data.clientDocument) {
      yPosition = addText(`Documento: ${data.clientDocument}`, margin, yPosition, pageWidth - 2 * margin);
    }
    if (data.clientPhone) {
      yPosition = addText(`Telefone: ${data.clientPhone}`, margin, yPosition, pageWidth - 2 * margin);
    }
    if (data.clientEmail) {
      yPosition = addText(`E-mail: ${data.clientEmail}`, margin, yPosition, pageWidth - 2 * margin);
    }
    if (data.clientAddress) {
      yPosition = addText(`Endereço: ${data.clientAddress}`, margin, yPosition, pageWidth - 2 * margin);
    }

    yPosition += 15;

    // Título da proposta
    checkPageBreak(30);
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text(data.proposalTitle || 'Proposta Comercial', margin, yPosition);
    yPosition += 15;

    // Descrição da proposta
    if (data.proposalDescription) {
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      yPosition = addText(data.proposalDescription, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 10;
    }

    // Tabela de serviços/produtos
    checkPageBreak(80);
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('SERVIÇOS/PRODUTOS', margin, yPosition);
    yPosition += 15;

    // Cabeçalho da tabela
    pdf.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 10, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Descrição', margin + 2, yPosition);
    pdf.text('Qtd', pageWidth - 80, yPosition);
    pdf.text('Valor Unit.', pageWidth - 60, yPosition);
    pdf.text('Total', pageWidth - 30, yPosition);
    yPosition += 10;

    // Itens da tabela
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');
    
    let total = 0;
    data.items.forEach((item, index) => {
      checkPageBreak(15);
      
      const itemTotal = item.quantity * item.unitPrice;
      total += itemTotal;
      
      yPosition = addText(item.description, margin + 2, yPosition, pageWidth - 120, 10);
      pdf.text(item.quantity.toString(), pageWidth - 80, yPosition - 5);
      pdf.text(`R$ ${item.unitPrice.toFixed(2)}`, pageWidth - 60, yPosition - 5);
      pdf.text(`R$ ${itemTotal.toFixed(2)}`, pageWidth - 30, yPosition - 5);
      yPosition += 5;
    });

    // Total geral
    yPosition += 5;
    pdf.setFillColor(240, 240, 240);
    pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 10, 'F');
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('TOTAL GERAL:', pageWidth - 80, yPosition);
    pdf.text(`R$ ${total.toFixed(2)}`, pageWidth - 30, yPosition);
    yPosition += 20;

    // Condições de pagamento
    checkPageBreak(30);
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CONDIÇÕES DE PAGAMENTO', margin, yPosition);
    yPosition += 10;

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    yPosition = addText(data.paymentTerms, margin, yPosition, pageWidth - 2 * margin);
    yPosition += 15;

    // Observações
    if (data.observations) {
      checkPageBreak(30);
      pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('OBSERVAÇÕES', margin, yPosition);
      yPosition += 10;

      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      yPosition = addText(data.observations, margin, yPosition, pageWidth - 2 * margin);
    }

    // Rodapé
    const footerY = pageHeight - 30;
    pdf.setFontSize(8);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Esta proposta é válida por ' + data.validityDays + ' dias a partir da data de emissão.', margin, footerY);
    pdf.text('Gerado por Gerador de Propostas MEI', margin, footerY + 10);

    return pdf;
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw error;
  }
};