/** Large statement text. `*word*` (optionally followed by punctuation) renders in the accent colour. */
function renderWord(w: string) {
  const m = w.match(/^\*(.+?)\*([.,!?;:…]*)$/);
  if (!m) return w;
  return (
    <>
      <em>{m[1]}</em>
      {m[2]}
    </>
  );
}

export function Statement({ text, id }: { text: string; id?: string }) {
  return (
    <p id={id} className="statement">
      {text.split(" ").map((w, i, arr) => (
        <span key={i}>
          {renderWord(w)}
          {i < arr.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
