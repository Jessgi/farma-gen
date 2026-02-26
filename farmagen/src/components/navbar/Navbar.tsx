import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-teal-300 text-teal-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4 font-semibold">
        <Link to="/" className="text-xl">FarmaGen</Link>

        <div className="flex gap-6">
          <Link to="/categorias">Categorias</Link>
          <Link to="/cadastrarcategoria">Nova Categoria</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/cadastrarproduto">Novo Produto</Link>
        </div>
      </nav>
    </header>
  );
}