import Image from 'next/image';
import Card from './ui/components/cards';

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 py-16 md:py-24"
    >
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6 max-w-xl">
          <h6 className="text-pink-500 font-semibold">CrochetCute Shop</h6>
          <h1 className="text-4xl md:text-5xl font-bold">
            Tempat Terbaik Untuk Produk Rajut
          </h1>
          <p className="text-lg text-gray-600">
            Toko rajutan handmade dengan sentuhan cinta dan warna pastel. Temukan boneka amigurumi, pouch, tas, dan aksesoris lucu lainnya!
          </p>
          <a
            href="#contact"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Jelajahi Semua yang lucu disini
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/logo.png"
            alt="Hero"
            width={400}
            height={400}
            priority
            className="rounded-xl object-contain"
          />
        </div>

      </div>
      {/* <section>
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center gap-8 justify-center md:py-24">
        <h1 className="text-3xl font-bold mb-8 text-pink-600 text-center">
          Statistik Toko Crochet
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <Card
            icon={<span className="text-4xl">🧶</span>}
            title="Total Produk"
            value={120}
            unit="pcs"
          />
          <Card
            icon={<span className="text-4xl">🛍️</span>}
            title="Pesanan Bulan Ini"
            value={35}
            unit="order"
          />
          <Card
            icon={<span className="text-4xl">😊</span>}
            title="Pelanggan Happy"
            value={98}
            unit="%"
          />
        </div>
      </div>
      </section> */}


    </section>
  );
}
