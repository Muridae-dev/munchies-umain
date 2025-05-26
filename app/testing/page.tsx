export default function About() {
  return (
    <div className="flex align-center flex-col gap-10 h-screen w-screen p-5 bg-red-300">
      <div className="flex align-center flex-col gap-5">
        <span className="underline">TEXT</span>
        <span className="text-display">Text Display</span>
        <span className="text-h1">Text h1</span>
        <span className="text-title">Text title</span>
        <span className="text-subtitle">Text subtitle</span>
        <span className="text-body">Text body</span>
      </div>

      <div className="flex align-center flex-col gap-5 h-screen w-screen text-lg font-sans">
        <span className="underline">Colors</span>
        <div>
          White
          <div className="w-20 aspect-square bg-white"></div>
        </div>

        <div>
          Stroke
          <div className="w-20 aspect-square bg-stroke"></div>
        </div>

        <div>
          Off-white
          <div className="w-20 aspect-square bg-off-white"></div>
        </div>

        <div>
          Black
          <div className="w-20 aspect-square bg-black"></div>
        </div>

        <div>
          Green
          <div className="w-20 aspect-square bg-green"></div>
        </div>
      </div>
    </div>
  );
}
