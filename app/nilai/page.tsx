import Image from "next/image";

export default function NilaiPage() {
  return (
    <main className="px-4 py-8 max-w-5xl mx-auto text-black">
      {/* Judul */}
      <h1 className=" text-2xl sm:text-3xl font-bold text-center mb-6 judul-sejarah">
        Nilai-Nilai Sedulur Sikep
      </h1>

      {/* Foto utama */}
      <div className="flex justify-center mb-6">
        <Image
          src="/pitutur1.jpg"
          alt="Samin Surosentiko"
          width={400}
          height={350}
          className="rounded-lg shadow-md w-full sm:w-[400px] h-auto"
        />
      </div>

      {/* Paragraf pembuka */}
      <p className="text-justify mb-6 leading-relaxed">
        Sedulur Sikep punya ajaran hidup sederhana namun penuh makna. Nilai-nilai ini bisa jadi panduan karakter buat Generasi Z 
        agar tetap kuat di tengah derasnya arus digital:
      </p>

      {/* List nilai */}
      <ul className="space-y-4 mb-10">
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <b>A. Laku jujur, sabar, trokal, lan nrimo</b> <br />
          Artinya berperilaku baik, jujur, sabar, berani, dan ikhlas menerima keadaan. <br />
          <i>Relevansi Gen Z:</i> Dalam dunia digital, kejujuran itu penting. Jangan sampai terbawa arus hoaks, FOMO, atau pamer berlebihan.
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <b>B. Ojo mbedo mbedakno sapodo padaning urip, kabeh iku sedulure dewe</b> <br />
          Jangan membeda-bedakan manusia, semua adalah saudara. <br />
          <i>Relevansi Gen Z:</i> Di dunia nyata maupun digital, jangan diskriminasi. Semua orang punya nilai, latar belakang, dan perjuangan masing-masing.
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <b>C. Ojo waton omong, omong sing nganggo waton</b> <br />
          Jangan asal bicara, gunakan kata-kata dengan bijak. <br />
          <i>Relevansi Gen Z:</i> Ingat, sekali posting di medsos bisa berpengaruh besar. Gunakan kata-kata yang membangun, bukan merusak.
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <b>D. Biso Roso Rumongso</b> <br />
          Jadilah manusia yang punya empati dan bisa merasakan perasaan orang lain. <br />
          <i>Relevansi Gen Z:</i> Di balik layar, ada manusia nyata. Jangan gampang nge-judge, tapi coba pahami. Empati bikin hubungan lebih bermakna.
        </li>
      </ul>

      {/* Subjudul */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
       Angger-Angger (Aturan Hidup Sedulur Sikep)
      </h2>

      <p className="text-justify mb-6 leading-relaxed">
       Selain pitutur luhur, Sedulur Sikep juga punya tiga prinsip utama:
      </p>

      {/* Foto + list aturan hidup */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
        <Image
          src="/pitutur2.jpg"
          alt="Samin Surosentiko"
          width={300}
          height={350}
          className="rounded-lg shadow-md w-full sm:w-[300px] h-auto"
        />

        <ul className="space-y-3 flex-1">
          <li className="bg-gray-100 p-3 rounded-md shadow-sm">
            <b>A. Partikel (pikiran):</b> berpikir sebelum bertindak, jangan gegabah.
          </li>
          <li className="bg-gray-100 p-3 rounded-md shadow-sm">
            <b>B. Pangucap (ucapan):</b> berbicara dengan sopan, menjaga kata-kata.
          </li>
          <li className="bg-gray-100 p-3 rounded-md shadow-sm">
            <b>C. Lakonono (perilaku):</b> bertindak sesuai nilai kebaikan.
          </li>
        </ul>
      </div>

      <p className="text-justify leading-relaxed">
        <i>Relevansi Gen Z:</i> Pikir dulu sebelum posting, gunakan kata yang sehat di ruang digital, dan wujudkan kebaikan dalam aksi nyata.
      </p>
    </main>
  );
}
