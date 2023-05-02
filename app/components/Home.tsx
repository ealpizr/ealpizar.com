import Image from "next/image";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl flex items-center justify-between gap-10">
        <main className="flex flex-shrink-0 max-w-[480px] flex-col gap-12">
          <div className="flex flex-col text-5xl w-fit">
            <p>Hi there, my name&apos;s</p>
            <div className="flex items-center gap-3">
              <h1 className="font-bold">Enrique Alp&iacute;zar</h1>
              <div className="relative aspect-square h-12">
                <Image fill alt="Waving Hand Sign" src="/waving-emoji.png" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl text-[var(--fg-secondary)] font-mulish">
            I&apos;m a self-taught Full-Stack Web Developer based in Costa Rica.
            📍
          </h2>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-black rounded-full"></div>
            <div className="w-8 h-8 bg-black  rounded-full"></div>
            <div className="w-8 h-8 bg-black  rounded-full"></div>
            <div className="w-8 h-8 bg-black  rounded-full"></div>
          </div>
        </main>
        <div className="relative aspect-square w-full max-w-[480px]">
          <Image fill alt="A placeholder image" src="/placeholder.svg" />
        </div>
      </div>
    </section>
  );
}
