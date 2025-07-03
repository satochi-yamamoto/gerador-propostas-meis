
import React from 'react';

const ProposalPreview = ({ data }) => {
  const currentDate = new Date().toLocaleDateString('pt-BR');
  const validUntil = new Date(Date.now() + (parseInt(data.validityDays) || 30) * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR');
  const totalValue = data.items.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="proposal-preview bg-white p-6 rounded-lg shadow-sm border text-gray-800 text-sm">
      {/* Header com Logo */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2" style={{ borderColor: data.primaryColor }}>
        <div className="flex items-center gap-4">
          {data.companyLogo && (
            <img
              src={data.companyLogo}
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          )}
          <div>
            <h1 className="text-2xl font-bold" style={{ color: data.primaryColor }}>
              {data.companyName || 'Sua Empresa'}
            </h1>
            {data.companyDocument && (
              <p className="text-gray-600">{data.companyDocument}</p>
            )}
          </div>
        </div>
        <div className="text-right text-gray-600">
          <p>Data: {currentDate}</p>
          <p>Válida até: {validUntil}</p>
        </div>
      </div>

      {/* Título da Proposta */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold" style={{ color: data.secondaryColor }}>
          {data.proposalTitle}
        </h2>
        {data.proposalDescription && (
          <p className="mt-2 text-gray-600">{data.proposalDescription}</p>
        )}
      </div>

      {/* Dados da Empresa */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold mb-2 pb-1 border-b" style={{ color: data.primaryColor }}>
            Dados da Empresa
          </h3>
          <div className="space-y-1 text-sm">
            <p><strong>Nome:</strong> {data.companyName || 'Não informado'}</p>
            {data.companyDocument && <p><strong>CNPJ/CPF:</strong> {data.companyDocument}</p>}
            {data.companyPhone && <p><strong>Telefone:</strong> {data.companyPhone}</p>}
            {data.companyEmail && <p><strong>E-mail:</strong> {data.companyEmail}</p>}
            {data.companyAddress && <p><strong>Endereço:</strong> {data.companyAddress}</p>}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2 pb-1 border-b" style={{ color: data.primaryColor }}>
            Dados do Cliente
          </h3>
          <div className="space-y-1 text-sm">
            <p><strong>Nome:</strong> {data.clientName || 'Não informado'}</p>
            {data.clientDocument && <p><strong>CNPJ/CPF:</strong> {data.clientDocument}</p>}
            {data.clientPhone && <p><strong>Telefone:</strong> {data.clientPhone}</p>}
            {data.clientEmail && <p><strong>E-mail:</strong> {data.clientEmail}</p>}
            {data.clientAddress && <p><strong>Endereço:</strong> {data.clientAddress}</p>}
          </div>
        </div>
      </div>

      {/* Itens da Proposta */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3 pb-1 border-b" style={{ color: data.primaryColor }}>
          Itens da Proposta
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: data.primaryColor + '10' }}>
                <th className="border p-2 text-left font-semibold">Descrição</th>
                <th className="border p-2 text-center font-semibold w-20">Qtd</th>
                <th className="border p-2 text-right font-semibold w-24">Valor Unit.</th>
                <th className="border p-2 text-right font-semibold w-24">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-2">{item.description || 'Descrição não informada'}</td>
                  <td className="border p-2 text-center">{item.quantity}</td>
                  <td className="border p-2 text-right">R$ {item.unitPrice.toFixed(2)}</td>
                  <td className="border p-2 text-right font-semibold">R$ {item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={{ backgroundColor: data.primaryColor + '20' }}>
                <td colSpan="3" className="border p-2 text-right font-bold">
                  VALOR TOTAL:
                </td>
                <td className="border p-2 text-right font-bold text-lg" style={{ color: data.primaryColor }}>
                  R$ {totalValue.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Condições */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold mb-2 pb-1 border-b" style={{ color: data.primaryColor }}>
            Condições
          </h3>
          <div className="space-y-1 text-sm">
            <p><strong>Validade:</strong> {data.validityDays} dias</p>
            <p><strong>Forma de Pagamento:</strong> {data.paymentTerms}</p>
          </div>
        </div>
      </div>

      {/* Observações */}
      {data.observations && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2 pb-1 border-b" style={{ color: data.primaryColor }}>
            Observações
          </h3>
          <p className="text-sm whitespace-pre-line">{data.observations}</p>
        </div>
      )}

      {/* Rodapé */}
      <div className="text-center pt-4 border-t text-xs text-gray-500">
        <p>Proposta gerada em {currentDate}</p>
        <p>Esta proposta é válida até {validUntil}</p>
      </div>
    </div>
  );
};

export default ProposalPreview;
