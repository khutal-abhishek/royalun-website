export default function Loader() {

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[99999]">

      <div className="text-center">

        <img
          src="/images/logo.png"
          alt="RoyalSun"
          className="h-20 mx-auto mb-6 animate-pulse"
        />

        <p className="text-yellow-400 text-xl tracking-[4px] uppercase">
          Loading Luxury Fragrance...
        </p>

      </div>

    </div>
  );
}