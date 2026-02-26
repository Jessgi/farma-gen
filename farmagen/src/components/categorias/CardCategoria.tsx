import { Link } from "react-router-dom";
import type Categoria from "../../models/Categoria";

interface Props {
  categoria: Categoria;
}

export default function CardCategoria({ categoria }: Props) {
  return (
    <div className="w-72 rounded-xl border-2 border-teal-300 bg-white p-4 shadow">
      <h2 className="text-lg font-bold text-teal-900">Categoria #{categoria.id}</h2>

      <p className="mt-2 text-gray-700">
        <span className="font-semibold">Descrição:</span> {categoria.descricao}
      </p>

      <div className="mt-4 flex justify-between">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
        >
          Apagar
        </Link>
      </div>
    </div>
  );
}
