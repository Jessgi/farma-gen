import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

import ListaCategorias from "./components/categorias/ListaCategorias";
import FormCategoria from "./components/categorias/FormCategoria";
import DeletarCategoria from "./components/categorias/Deletarcategoria";

import ListaProdutos from "./components/produtos/ListaProdutos";
import FormProduto from "./components/produtos/FormProduto";
import DeletarProduto from "./components/produtos/DeletarProduto";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-[calc(100vh-160px)] bg-teal-50">
        <div className="p-6 text-4xl font-bold text-black">TESTE VISÍVEL ✅</div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/cadastrarproduto" element={<FormProduto />} />
          <Route path="/editarproduto/:id" element={<FormProduto />} />
          <Route path="/deletarproduto/:id" element={<DeletarProduto />} />

          <Route
            path="*"
            element={<div className="p-6 font-bold text-red-600">Rota não encontrada</div>}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}