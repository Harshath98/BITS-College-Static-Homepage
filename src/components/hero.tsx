import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      min-h-[calc(100vh-120px)]
      mt-[120px]
      bg-cover
      bg-center
      flex items-end justify-start
      relative
      px-6 md:px-16
      pb-16
      "
      style={{ backgroundImage: "url('/BITS image.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-xl">

        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-yellow-400 drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
          Welcome to BITS
        </h2>

        <p className="text-lg md:text-xl mb-8 text-white drop-shadow-md">
          Bheema Institute Of Technology And Science - AI Enabled Campus With 100% Placements
        </p>

        {/* Apply Button with Redirect */}
        <Link href="/apply">
          <button className="
            bg-blue-600 
            hover:bg-blue-700
            px-6 py-3 
            rounded-lg 
            font-semibold 
            text-white 
            shadow-[0_0_12px_rgba(37,99,235,0.7)]
            transition duration-300">
            Apply Now
          </button>
        </Link>

      </div>
    </section>
  );
}