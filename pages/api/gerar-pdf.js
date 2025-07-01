import PDFDocument from 'pdfkit';
import { join } from 'path';
import db from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nome, servicos, preco } = req.body;

  const doc = new PDFDocument();
  let buffers = [];
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    const pdfData = Buffer.concat(buffers);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=proposta.pdf');
    res.send(pdfData);
  });

  doc.fontSize(20).text('Proposta Comercial', { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(`Emitente: ${nome}`);
  doc.text(`Serviços: ${servicos}`);
  doc.text(`Preço: ${preco}`);
  doc.end();

  db.prepare('INSERT INTO propostas (nome, servicos, preco, data) VALUES (?, ?, ?, datetime("now"))')
    .run(nome, servicos, preco);
}
