import { ChevronLeft, ChevronRight, Dice1 } from "lucide-react";

export default function Controls({ onPrev, onNext, onRandom }) {
  return (
    <div className="controls">
      <button onClick={onPrev} aria-label="Anterior">
        <ChevronLeft />
      </button>
      <button onClick={onNext} aria-label="Siguiente">
        <ChevronRight />
      </button>
      <button onClick={onRandom} aria-label="Aleatorio">
        <Dice1 />
      </button>
    </div>
  );
}
