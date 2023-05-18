import style from "./styles.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <img
        className="inline-block h-14 w-14 rounded-md"
        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
        alt="Dan_Abromov"
      />
      <main className={style.main}>{children}</main>
    </>
  );
}
