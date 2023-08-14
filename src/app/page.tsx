import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <h1 className="mt-8 text-3xl font-bold text-center capitalize sm:mt-16 text-slate-200">
        Beautiful button animations
      </h1>
      <p className="mt-5 mb-10 text-base text-center sm:mb-20 text-slate-200">
        Hover or click on our buttons components to reveal mesmerizing hover
        effects.
      </p>

      <main className="buttons-container text-slate-200">
        <button className="btn-1">Hover Me</button>
        <button className="btn-2 text-violet-500 before:bg-violet-500">
          Hover Me
        </button>
        <button className="btn-3">Hover Me</button>
        <button className="btn-4">Hover Me</button>
        <button className="btn-5">Hover Me</button>
        <button className="btn-6">Hover Me</button>
        <button className="btn-7">Hover Me</button>
        <button className="btn-8">Hover Me</button>
        <button className="btn-9">Hover Me</button>
        <button className="btn-10">Hover Me</button>
        <button className="btn-11">Hover Me</button>
        <button className="btn-12">
          <span></span>Hover Me
        </button>
        <button className="btn-13">Hover Me</button>
        <button className="btn-14">
          <span> Hover Me </span>
        </button>
        <button className="btn-15">Hover Me</button>
        <button className="btn-16 font-bench">Hover Me</button>
        <button className="btn-17">
          <span>B</span>utton
        </button>
        <button className="btn-19 btn-wave">
          Hover Me
          <div className="wave"></div>
        </button>
        <button className="btn-18">
          <span> Hover Me </span>
        </button>
        <button className="btn-20">
          <span></span>Hover Me
        </button>
        <button className="btn-21 btn-skew">Button</button>
        <button className="btn-22">Hover Me</button>
        <button className="btn-23">Hover Me</button>
        <button className="btn-25 btn-neon">
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
          Hover Me
        </button>
        <button className="btn-24 btn-glow">Hover Me</button>
      </main>

      <footer className="mt-12 mb-8 attribution">
        <Link
          href="https://github.com/vatsalsinghkv/image-animations"
          target="_blank"
        >
          Design &amp; Built by Vatsal Singh
        </Link>
      </footer>
    </main>
  );
}
