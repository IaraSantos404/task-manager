
import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";

interface NewTaskProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTask({ isOpen, onClose }: NewTaskProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button
        aria-label="Fechar modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
      />

      <div className="relative z-10 w-[92%] max-w-2xl rounded-2xl border border-gray-800 bg-secondary/90 p-9 text-text shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-text">Nova Tarefa</h2>
            <p className="mt-1 text-sm text-text/80">
              Preencha os detalhes para criar uma nova tarefa.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg cursor-pointer border border-gray-800 p-2 text-text hover:bg-primary-500 transition-colors"
          >
            <FaXmark />
          </button>
        </div>

        <form className="mt-6 grid grid-cols-1 gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-text/90" htmlFor="titulo">
              Titulo
            </label>
            <input
              id="titulo"
              type="text"
              placeholder="Digite o titulo da tarefa"
              className="w-full rounded-xl border border-gray-800 bg-background p-3 text-text"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-text/90" htmlFor="descricao">
              Descricao
            </label>
            <textarea
              id="descricao"
              rows={4}
              placeholder="Descreva a tarefa"
              className="w-full rounded-xl border border-gray-800 bg-background p-3 text-text"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm text-text/90" htmlFor="vencimento">
                Data de vencimento
              </label>
              <input
                id="vencimento"
                type="date"
                className="w-full rounded-xl border border-gray-800 bg-background p-3 text-text"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-text/90" htmlFor="categoria">
                Categoria
              </label>
              <select
                id="categoria"
                className="w-full rounded-xl border border-gray-800 bg-background p-3 text-text"
              >
                <option disabled value="">Selecione</option>
                <option value="estudo">Estudo</option>
                <option value="trabalho">Trabalho</option>
                <option value="pessoal">Pessoal</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm text-text/90" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                className="w-full rounded-xl border border-gray-800 bg-background p-3 text-text"
              >
                <option disabled value="">Selecione</option>
                <option value="pendente">Pendente</option>
                <option value="andamento">Em andamento</option>
                <option value="concluida">Concluida</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-text/90"> </label>
              <button
                type="button"
                className="w-full cursor-pointer rounded-xl bg-primary text-[#ced7e0] hover:bg-primary-300 transition-colors"
              >
                Salvar tarefa
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}