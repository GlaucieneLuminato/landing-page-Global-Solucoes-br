import { useState, useEffect } from "react";
import { Accessibility } from "lucide-react";
import AccessibilityPanel from "./AccessibilityPanel";

function AccessibilityButton() {
    const [open, setOpen] = useState(false);

    const [fontSize, setFontSize] = useState(100);

    const [highContrast, setHighContrast] = useState(false);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}%`;
    }, [fontSize]);

    useEffect(() => {
        document.body.classList.toggle("high-contrast", highContrast);
    }, [highContrast]);

    const increaseFont = () => {
        setFontSize((prev) => Math.min(prev + 10, 150));
    };

    const decreaseFont = () => {
        setFontSize((prev) => Math.max(prev - 10, 80));
    };

    const toggleContrast = () => {
        setHighContrast((prev) => !prev);
    };

    const speakPage = () => {
        const speech = new SpeechSynthesisUtterance(
            document.body.innerText
        );

        speech.lang = "pt-BR";
        speech.rate = 1;

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(speech);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                aria-label="Abrir painel de acessibilidade"
                className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[#0f5ba8] text-white shadow-xl hover:scale-110 transition-all duration-300"
            >
                <Accessibility className="mx-auto" />
            </button>

            {open && (
                <AccessibilityPanel
                    onClose={() => setOpen(false)}
                    onIncreaseFont={increaseFont}
                    onDecreaseFont={decreaseFont}
                    onToggleContrast={toggleContrast}
                    onSpeak={speakPage}
                    highContrast={highContrast}
                />
            )}
        </>
    );
}


export default AccessibilityButton;