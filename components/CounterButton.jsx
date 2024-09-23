import Image from "next/image";
export default function CounterButton({ state, handleClick }) {
  return (
    <button
      onClick={() => handleClick(state)}
      className="flex justify-center items-center counter-btn"
    >
      <Image
        src={`/images/icon-${state === "plus" ? "plus" : "minus"}.svg`}
        width={12}
        height={3.33}
        priority={true}
        alt={`${state === "plus" ? "plus-icon" : "minus-icon"}`}
        className="pointer-events-none"
      />
    </button>
  );
}
