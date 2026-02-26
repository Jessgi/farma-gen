import { useNavigate } from "react-router-dom";

export default function DeletarProduto() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-teal-900">Apagar Produto</h1>
        <p className="mt-4 text-gray-700">Tela de exclusao de produto em construcao.</p>
        <button
          onClick={() => navigate("/produtos")}
          className="mt-6 rounded bg-gray-300 px-4 py-2 font-semibold hover:bg-gray-400"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
