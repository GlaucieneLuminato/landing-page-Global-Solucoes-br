import { X } from "lucide-react";

function AccessibilityPanel({
    onClose,
    onIncreaseFont,
    onDecreaseFont,
    onToggleContrast,
    onSpeak,
    highContrast,
    
}) {
  return (
    <div className="fixed bottom-40 right-6 w-72 bg-white rounded-2xl shadow-2xl p-6 z-[100]">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-lg font-bold text-[#0f5ba8]">
          Acessibilidade
        </h3>

        <button
          aria-label="Fechar painel"
          onClick={() => onClose(false)}
        >
          <X />
        </button>

      </div>

      <div className="space-y-3">

        <button  onClick={onSpeak} className="w-full text-left p-3 rounded-lg hover:bg-slate-100 transition">
          🔊 Ler página
        </button>

        <button  onCanPlay={onIncreaseFont} className="w-full text-left p-3 rounded-lg hover:bg-slate-100 transition">
          A+ Aumentar fonte
        </button>

        <button  onClick={onDecreaseFont} className="w-full text-left p-3 rounded-lg hover:bg-slate-100 transition">
          A− Diminuir fonte
        </button>

        <button  onClick={onToggleContrast} className="w-full text-left p-3 rounded-lg hover:bg-slate-100 transition">
         {highContrast ? "Desativar contraste " : "  ◐ Alto contraste"}
        
        </button>

      </div>

    </div>
  );
}

export default AccessibilityPanel;