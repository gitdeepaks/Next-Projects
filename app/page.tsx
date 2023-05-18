import Link from "next/link";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <h1 className="text-3xl">My Next Project</h1>
        <Link href="/about">Go to About</Link>
      </main>
    </>
  );
}
