import Link from "next/link";

export default function Error404() {
  return (
    <main className="block-section">
      <p className="text-2xl mt-5 font-bold"> Тут ничего нет</p>
      <Link href="/" className="mt-5 underline block">
        обратно к приглашению
      </Link>
    </main>
  );
}
