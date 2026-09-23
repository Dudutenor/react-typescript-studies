import { useState } from "react";

import type { FormEvent } from "react";

import './app.css'

interface LeitorProps {
  leitor: string;
  lendo: string;
  vaiLer: string;
  nota: number;
}

export default function App() {
  const [leitor, setLeitor] = useState<LeitorProps>({
    leitor: "",
    lendo: "",
    vaiLer: "",
    nota: 0,
  });

  const [info, setInfo] = useState<LeitorProps>();

  function cadastrar(event: FormEvent) {
    event.preventDefault();
    setInfo(leitor);
  }

function AumentarNota() {
  if (!info) return;
  if (info.nota === 0) return;
  if (info.nota >= 10) return;

  setInfo({
    ...info,
    nota: info.nota + 1,
  });
}

  return (
    <div className="vn-page">
      <div className="vn-container">
        <h1 className="vn-title">Perfil de Leitor de Visual Novel</h1>

        <form className="vn-form" onSubmit={cadastrar}>
          <div className="vn-field">
            <label className="vn-label">Nome do Leitor:</label>
            <input
              className="vn-input"
              type="text"
              required
              value={leitor.leitor}
              onChange={(e) =>
                setLeitor({
                  ...leitor,
                  leitor: e.target.value,
                })
              }
            />
          </div>

          <div className="vn-field">
            <label className="vn-label">
              Visual Novel que está lendo atualmente
            </label>
            <input
              className="vn-input"
              type="text"
              required
              value={leitor.lendo}
              onChange={(e) =>
                setLeitor({
                  ...leitor,
                  lendo: e.target.value,
                })
              }
            />
          </div>

          <div className="vn-field">
            <label className="vn-label">
              Visual Novel que irá ler futuramente:
            </label>
            <input
              className="vn-input"
              type="text"
              required
              value={leitor.vaiLer}
              onChange={(e) =>
                setLeitor({
                  ...leitor,
                  vaiLer: e.target.value,
                })
              }
            />
          </div>

          <div className="vn-field">
            <label className="vn-label">Nota para Visual Novel atual:</label>
            <input
              className="vn-input vn-input--nota"
              type="number"
              required
              min="1"
              step="0.01"
              value={leitor.nota}
              onChange={(e) =>
                setLeitor({
                  ...leitor,
                  nota: Number(e.target.value),
                })
              }
            />
          </div>

          <input className="vn-submit" type="submit" value="Cadastrar" />

          {info && Object.keys(info).length > 0 && (
            <section className="vn-card">
              <h3 className="vn-card-title">
                Nome do leitor: <span>{info.leitor}</span>
              </h3>
              <h3 className="vn-card-title">
                Lendo atualmente: <span>{info.lendo}</span>
              </h3>
              <h3 className="vn-card-title">
                Pretende ler: <span>{info.vaiLer}</span>
              </h3>
              <h3 className="vn-card-title vn-card-nota">
                Nota: <span>{info.nota}</span>
              </h3>

              <button
                className="vn-button"
                type="button"
                onClick={AumentarNota}
              >
                Aumentar nota!
              </button>
            </section>
          )}
        </form>
      </div>
    </div>
  );
}