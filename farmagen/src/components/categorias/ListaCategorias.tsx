import { useEffect, useState } from "react";
import type Categoria from "../../models/Categoria";
import { buscar } from "../../services/Service";
import CardCategoria from "./CardCategoria";

export default function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscar("/categorias", setCategorias);
  }, []);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold text-teal-900 mb-6">Categorias</h1>

      <div className="flex flex-wrap gap-4">
        {categorias.map((c) => (
          <CardCategoria key={c.id} categoria={c} />
        ))}
      </div>
    </div>
  );
}
