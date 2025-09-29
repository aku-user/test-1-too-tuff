import Image from "next/image";

export default function About() {
  return (
    <main className="about-container px-4 sm:px-6 py-10 max-w-6xl mx-auto">
      <h1 className="judul-sejarah text-3xl sm:text-4xl font-bold text-center mb-8">
        Our Social Media
      </h1>

      {/* Foto Utama */}
      <div className="gambar-tengah flex justify-center mb-8">
        <Image
          src="/fotbar (2).jpg"
          alt="Samin Surosentiko"
          width={500}
          height={350}
          className="rounded-lg shadow-lg w-full sm:w-auto"
        />
      </div>

      {/* Paragraf */}
      <p className="hytam text-justify leading-relaxed mb-10 text-sm sm:text-base">
        Generasi Z yang lahir pada akhir 1990-an hingga awal 2010-an dikenal
        adaptif terhadap teknologi, namun rentan terhadap demoralisasi akibat
        pengaruh negatif media sosial seperti perundungan, penipuan, hoaks, hingga
        radikalisme. Kondisi ini berdampak pada menurunnya empati, gotong royong,
        serta kesadaran sosial, sekaligus memunculkan kecenderungan individualistik.
        Fenomena tersebut menjadi tantangan serius dalam dunia pendidikan. Di sisi
        lain, nilai-nilai luhur dari komunitas Sedulur Sikep atau Suku Samin seperti
        kejujuran, kesetaraan, kesabaran, anti kekerasan, dan hidup sederhana masih
        relevan untuk dijadikan dasar penguatan karakter generasi muda, meski belum
        banyak dikenal oleh Gen-Z. Oleh karena itu, dibutuhkan media inovatif yang
        mampu menjembatani nilai-nilai lokal dengan gaya hidup digital generasi Z.
        Salah satu solusi yang ditawarkan adalah pengembangan website edukasi
        “SEDULURGEN (Sedulur Sikep for Z Generation)” sebagai sarana penguatan
        karakter generasi Z berbasis nilai-nilai Sedulur Sikep.
      </p>

      {/* Foto Tokoh */}
      <div className="gambar-tengah flex flex-col sm:flex-row justify-center gap-6 mb-10">
        <Image
          src="/sikma.jpg"
          alt="samin"
          width={200}
          height={150}
          className="rounded-lg shadow-md w-full sm:w-auto"
        />
        <Image
          src="/sikma2.jpg"
          alt="samin"
          width={200}
          height={150}
          className="rounded-lg shadow-md w-full sm:w-auto"
        />
      </div>

      {/* Card Instagram */}
      <section className="content grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <a
          className="card bg-gray-100 rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform"
          href="https://www.instagram.com/arrknhrdano/?utm_source=ig_web_button_share_sheet"
        >
          <Image
            src="/igger.svg"
            width={40}
            height={40}
            alt="instagram logo"
            className="mx-auto mb-2"
          />
          <h2 className="font-semibold text-lg">INSTAGRAM</h2>
          <p className="hytam2 text-gray-700 text-sm sm:text-base">@arrknhrdano</p>
        </a>

        <a
          className="card bg-gray-100 rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform"
          href="https://www.instagram.com/caantikadifa?utm_source=ig_web_button_share_sheet"
        >
          <Image
            src="/igger.svg"
            width={40}
            height={40}
            alt="instagram logo"
            className="mx-auto mb-2"
          />
          <h2 className="font-semibold text-lg">INSTAGRAM</h2>
          <p className="hytam2 text-gray-700 text-sm sm:text-base">@caantikadifa</p>
        </a>
      </section>

      {/* Penutup */}
      <p className="hytam text-center text-base sm:text-lg">
        Hubungi kami melalui sosial media atau bergabung dengan komunitas untuk
        belajar dan berkembang bersama.
      </p>
    </main>
  );
}
