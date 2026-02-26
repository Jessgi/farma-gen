import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../models/Categoria";
import { atualizar, buscarPorId, cadastrar } from "../../services/Service";

export default function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  useEffect(() => {
    if (id) buscarPorId(`/categorias/${id}`, setCategoria);
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function enviarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id) {
      await atualizar("/categorias", categoria, setCategoria);
    } else {
      await cadastrar("/categorias", categoria, setCategoria);
    }

    navigate("/categorias");
  }

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="text-3xl font-bold text-teal-900 mb-6">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form onSubmit={enviarFormulario} className="rounded-xl bg-white p-6 shadow">
        <label className="font-semibold text-gray-700">Descrição</label>
        <input
          type="text"
          name="descricao"
          value={categoria.descricao || ""}
          onChange={atualizarEstado}
          className="mt-2 w-full rounded border p-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
          placeholder="Ex: Remédios, Vitaminas, Higiene..."
          required
        />

        <div className="mt-6 flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/categorias")}
            className="rounded bg-gray-300 px-4 py-2 font-semibold text-gray-800 hover:bg-gray-400"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="rounded bg-teal-400 px-4 py-2 font-semibold text-teal-950 hover:bg-teal-500"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
