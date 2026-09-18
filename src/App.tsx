import { useState } from "react";

import type { FormEvent } from "react";

import "./App.css";

interface InfoProps {
  pessoas: number;
  valorConta: string;
  valorPessoa: string;
}

export default function App() {
  const [valorConta, setValorConta] = useState(0);
  const [valorPessoa, setValorPessoa] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();

    if (valorPessoa === 0) {
      return;
    }

    let calculo = valorConta / valorPessoa;

    setInfo({
      pessoas: valorPessoa,
      valorConta: formatarMoeda(valorConta),
      valorPessoa: formatarMoeda(calculo),
    });
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <main className="container">
      <section className="card">
        <header className="header">
          <span className="icon">🍽️</span>

          <div>
            <h1>Divisão de Conta</h1>
            <p>Calcule quanto cada pessoa deve pagar.</p>
          </div>
        </header>

        <form className="form" onSubmit={calcular}>
          <div className="inputGroup">
            <label htmlFor="pessoas">Quantas pessoas estão pagando?</label>

            <input
              id="pessoas"
              type="number"
              placeholder="Ex: 4"
              required
              min="0"
              value={valorPessoa}
              onChange={(e) => setValorPessoa(Number(e.target.value))}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="conta">Valor da conta</label>

            <input
              id="conta"
              type="number"
              placeholder="Ex: 120,00"
              required
              min="0"
              step="0.01"
              value={valorConta}
              onChange={(e) => setValorConta(Number(e.target.value))}
            />
          </div>

          <button className="calculateButton" type="submit">
            Calcular conta
          </button>
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2>Resultado</h2>

            <div className="resultItem">
              <span>Valor da conta</span>
              <strong>{info.valorConta}</strong>
            </div>

            <div className="resultItem">
              <span>Pessoas</span>
              <strong>{info.pessoas}</strong>
            </div>

            <div className="resultItem highlight">
              <span>Valor por pessoa</span>
              <strong>{info.valorPessoa}</strong>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
