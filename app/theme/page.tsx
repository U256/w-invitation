export const metadata = {
  title: "Тема",
};

export default function Theme() {
  return (
    <>
      <div className="block-section w-3" style={{ padding: 50, background: "gray", fontSize: 26, marginTop: 80 }}>
        <div style={{ border: "5px solid var(--clr-background)", color: "var(--clr-background)" }}>clr-background</div>
        <div style={{ border: "5px solid var(--clr-foreground)", color: "var(--clr-foreground)" }}>clr-foreground</div>
        <div style={{ border: "5px solid var(--clr-accent)", color: "var(--clr-accent)" }}>clr-accent</div>
        <div style={{ border: "5px solid var(--clr-content)", color: "var(--clr-content)" }}> clr-content</div>
        <div style={{ border: "5px solid var(--clr-content-sub)", color: "var(--clr-content-sub)" }}>
          clr-content-sub
        </div>
      </div>
      <div style={{ padding: 50 }}>
        <p>
          main
          <br />
          Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас. friendship000
        </p>
        <br />
        <p style={{ fontFamily: "var(--font-pixel)" }}>
          handjet
          <br /> Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас. friendship000
        </p>
        <br />
        <p style={{ fontFamily: "var(--font-handwritten)" }}>
          caveat
          <br />
          Приглашаем на свадьбу Дарьи и Алексея. Будем рады видеть вас. friendship000
        </p>
      </div>
    </>
  );
}
