import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../models/Categoria";
import { buscarPorId, deletar } from "../../services/Service";

export default function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  useEffect(() => {
    if (id) buscarPorId(`/categorias/${id}`, setCategoria);
  }, [id]);

  async function confirmar() {
    await deletar(`/categorias/${id}`);
    navigate("/categorias");
  }

  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-teal-900">Apagar Categoria</h1>

        <p className="mt-4 text-gray-700">
          Tem certeza que deseja apagar a categoria:
          <span className="font-semibold"> {categoria.descricao}</span>?
        </p>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate("/categorias")}
            className="rounded bg-gray-300 px-4 py-2 font-semibold hover:bg-gray-400"
          >
            Cancelar
          </button>

          <button
            onClick={confirmar}
            className="rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
}
