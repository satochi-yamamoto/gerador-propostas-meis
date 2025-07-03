
import { jsPDF } from 'jspdf';

export const generatePDF = async (data) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Configurações de cores
  const primaryColor = hexToRgb(data.primaryColor);
  const secondaryColor = hexToRgb(data.secondaryColor);

  // Helper function para converter hex para RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 59, g: 130, b: 246 };
  }

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
      } catch (error) {
        console.warn('Erro ao adicionar logo:', error);
      }
    }

    // Título da empresa
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text(data.companyName || 'Sua Empresa', data.companyLogo ? margin + 35 : margin, yPosition + 15);

    // Data e validade
    const currentDate = new Date().toLocaleDateString('pt-BR');
    const validUntil = new Date(Date.now() + (parseInt(data.validityDays) || 30) * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR');
    
    pdf.setTextColor(100, 100, 100);
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Data: ${currentDate}`, pageWidth - margin - 40, yPosition + 10);
    pdf.text(`Válida até: ${validUntil}`, pageWidth - margin - 40, yPosition + 20);

    yPosition += 40;

    // Linha separadora
    pdf.setDrawColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setLineWidth(2);
    pdf.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 15;

    // Título da proposta
    pdf.setTextColor(secondaryColor.r, secondaryColor.g, secondaryColor.b);
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    const titleWidth = pdf.getTextWidth(data.proposalTitle);
    pdf.text(data.proposalTitle, (pageWidth - titleWidth) / 2, yPosition);
    yPosition += 20;

    // Descrição da proposta
    if (data.proposalDescription) {
      pdf.setTextColor(80, 80, 80);
      yPosition = addText(data.proposalDescription, margin, yPosition, pageWidth - 2 * margin, 10);
      yPosition += 10;
    }

    checkPageBreak(60);

    // Dados da empresa e cliente (lado a lado)
    const columnWidth = (pageWidth - 3 * margin) / 2;

    // Dados da empresa
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DADOS DA EMPRESA', margin, yPosition);
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    let companyY = yPosition + 10;
    
    if (data.companyName) companyY = addText(`Nome: ${data.companyName}`, margin, companyY, columnWidth, 9);
    if (data.companyDocument) companyY = addText(`CNPJ/CPF: ${data.companyDocument}`, margin, companyY, columnWidth, 9);
    if (data.companyPhone) companyY = addText(`Telefone: ${data.companyPhone}`, margin, companyY, columnWidth, 9);
    if (data.companyEmail) companyY = addText(`E-mail: ${data.companyEmail}`, margin, companyY, columnWidth, 9);
    if (data.companyAddress) companyY = addText(`Endereço: ${data.companyAddress}`, margin, companyY, columnWidth, 9);

    // Dados do cliente
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('DADOS DO CLIENTE', margin + columnWidth + margin, yPosition);
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    let clientY = yPosition + 10;
    
    if (data.clientName) clientY = addText(`Nome: ${data.clientName}`, margin + columnWidth + margin, clientY, columnWidth, 9);
    if (data.clientDocument) clientY = addText(`CNPJ/CPF: ${data.clientDocument}`, margin + columnWidth + margin, clientY, columnWidth, 9);
    if (data.clientPhone) clientY = addText(`Telefone: ${data.clientPhone}`, margin + columnWidth + margin, clientY, columnWidth, 9);
    if (data.clientEmail) clientY = addText(`E-mail: ${data.clientEmail}`, margin + columnWidth + margin, clientY, columnWidth, 9);
    if (data.clientAddress) clientY = addText(`Endereço: ${data.clientAddress}`, margin + columnWidth + margin, clientY, columnWidth, 9);

    yPosition = Math.max(companyY, clientY) + 15;

    checkPageBreak(80);

    // Itens da proposta
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('ITENS DA PROPOSTA', margin, yPosition);
    yPosition += 15;

    // Cabeçalho da tabela
    const tableStartY = yPosition;
    const colWidths = [100, 20, 30, 30];
    const colPositions = [margin, margin + colWidths[0], margin + colWidths[0] + colWidths[1], margin + colWidths[0] + colWidths[1] + colWidths[2]];

    // Fundo do cabeçalho
    pdf.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b, 0.1);
    pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 15, 'F');

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Descrição', colPositions[0] + 2, yPosition + 5);
    pdf.text('Qtd', colPositions[1] + 2, yPosition + 5);
    pdf.text('Valor Unit.', colPositions[2] + 2, yPosition + 5);
    pdf.text('Total', colPositions[3] + 2, yPosition + 5);

    yPosition += 15;

    // Linhas da tabela
    pdf.setFont('helvetica', 'normal');
    let totalValue = 0;

    data.items.forEach((item, index) => {
      checkPageBreak(20);

      const itemTotal = item.total || 0;
      totalValue += itemTotal;

      // Fundo alternado
      if (index % 2 === 0) {
        pdf.setFillColor(245, 245, 245);
        pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 15, 'F');
      }

      pdf.setTextColor(0, 0, 0);
      
      // Descrição (com quebra de linha se necessário)
      const descLines = pdf.splitTextToSize(item.description || 'Não informado', colWidths[0] - 4);
      pdf.text(descLines, colPositions[0] + 2, yPosition + 5);
      
      pdf.text(item.quantity.toString(), colPositions[1] + 2, yPosition + 5);
      pdf.text(`R$ ${item.unitPrice.toFixed(2)}`, colPositions[2] + 2, yPosition + 5);
      pdf.text(`R$ ${itemTotal.toFixed(2)}`, colPositions[3] + 2, yPosition + 5);

      yPosition += Math.max(15, descLines.length * 5);
    });

    // Total
    pdf.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b, 0.2);
    pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 15, 'F');

    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFont('helvetica', 'bold');
    pdf.text('VALOR TOTAL:', colPositions[2] + 2, yPosition + 5);
    pdf.text(`R$ ${totalValue.toFixed(2)}`, colPositions[3] + 2, yPosition + 5);

    yPosition += 25;

    checkPageBreak(40);

    // Condições
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('CONDIÇÕES', margin, yPosition);
    yPosition += 10;

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    yPosition = addText(`Validade: ${data.validityDays} dias`, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition = addText(`Forma de Pagamento: ${data.paymentTerms}`, margin, yPosition, pageWidth - 2 * margin, 9);
    yPosition += 10;

    // Observações
    if (data.observations) {
      checkPageBreak(30);
      
      pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('OBSERVAÇÕES', margin, yPosition);
      yPosition += 10;

      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(9);
      pdf.setFont('helvetica', 'normal');
      yPosition = addText(data.observations, margin, yPosition, pageWidth - 2 * margin, 9);
    }

    // Rodapé
    pdf.setTextColor(150, 150, 150);
    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'italic');
    pdf.text(`Proposta gerada em ${currentDate}`, margin, pageHeight - 20);
    pdf.text(`Esta proposta é válida até ${validUntil}`, margin, pageHeight - 10);

    // Salvar o PDF
    const fileName = `Proposta_${data.clientName || 'Cliente'}_${currentDate.replace(/\//g, '-')}.pdf`;
    pdf.save(fileName);

  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    throw new Error('Erro ao gerar o PDF. Tente novamente.');
  }
};
