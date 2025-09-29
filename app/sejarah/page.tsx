import Image from "next/image";

export default function Sejarah() {
  return (
    <main className="px-4 py-8 max-w-5xl mx-auto text-black">
      {/* Judul */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 judul-sejarah">
        Sejarah Sedulur Sikep
      </h1>

      {/* Paragraf pembuka */}
      <p className="text-justify mb-6 leading-relaxed">
        Gerakan Sedulur Sikep lahir pada akhir abad ke-19 di Randublatung, Blora, Jawa Tengah, dipimpin oleh 
        <b> Samin Surosentiko (1859–1914)</b>, yang lahir dengan nama kecil Raden Kohar. Ia adalah seorang petani 
        sekaligus pemimpin rakyat kecil yang berani menentang penjajahan Belanda.
      </p>

      {/* Foto utama */}
      <div className="flex justify-center mb-6">
        <Image
          src="/SaminHome.jpg"
          alt="Samin Surosentiko"
          width={500}
          height={350}
          className="rounded-lg shadow-md w-full sm:w-[500px] h-auto"
        />
      </div>

      {/* Paragraf kedua */}
      <p className="text-justify mb-6 leading-relaxed">
        Bentuk perlawanannya berbeda dengan gerakan bersenjata. <b>Samin memilih jalan damai tanpa kekerasan</b>,
        tetap berpegang pada kejujuran dan kesederhanaan. Bersama pengikutnya, ia menolak membayar pajak, 
        enggan tunduk pada aturan kolonial, bahkan menjalankan perintah Belanda dengan cara apa adanya sebagai 
        bentuk protes pasif. <i>Istilah “Samin”</i> berasal dari kata <i>sami-sami Jawa</i> (sama-sama orang Jawa), 
        menegaskan persatuan rakyat tanpa membedakan status. Sementara <i>“Sikep”</i> berarti sikap atau perilaku, 
        merujuk pada tata laku pengikutnya dalam melawan ketidakadilan.
      </p>

      {/* Bagian akhir: teks + gambar */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <div className="flex-1">
          <p className="text-justify leading-relaxed">
            Karena dianggap berbahaya, pada tahun 1907 Samin Surosentiko ditangkap dan diasingkan ke Padang hingga 
            wafat pada 1914. Meski demikian, ajarannya tetap menyebar ke berbagai daerah seperti Blora, Bojonegoro, 
            Pati, Kudus, hingga Ngawi, dan melahirkan komunitas yang dikenal hingga kini sebagai 
            <b> Sedulur Sikep</b>, simbol perlawanan damai rakyat Jawa terhadap kolonialisme.
          </p>
        </div>

        {/* Foto samping */}
        <div className="flex justify-center">
          <Image
            src="/samin_depan.jpg"
            alt="Samin"
            width={300}
            height={350}
            className="rounded-lg shadow-md w-full sm:w-[300px] h-auto"
          />
        </div>
      </div>
    </main>
  );
}
