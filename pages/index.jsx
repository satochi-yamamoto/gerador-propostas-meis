import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ nome: '', servicos: '', preco: '' });
  const [gerando, setGerando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGerando(true);
    const res = await fetch('/api/gerar-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'proposta.pdf';
    link.click();
    setGerando(false);
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gerador de Propostas para MEIs</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome ou empresa"
          className="w-full p-2 border rounded"
          onChange={e => setForm({ ...form, nome: e.target.value })}
        />
        <textarea
          placeholder="Serviços oferecidos"
          className="w-full p-2 border rounded"
          onChange={e => setForm({ ...form, servicos: e.target.value })}
        />
        <input
          type="text"
          placeholder="Valor total (ex: R$ 500,00)"
          className="w-full p-2 border rounded"
          onChange={e => setForm({ ...form, preco: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={gerando}
        >
          {gerando ? 'Gerando PDF...' : 'Gerar Proposta'}
        </button>
      </form>
    </main>
  );
}
