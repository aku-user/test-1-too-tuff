import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main>
      {/* <body> */}
      <section className="secigger">
          <Image
          className="brightness-53 relative"
           src="/SaminHome.jpg"
           alt="Samin"
           fill={true}
           objectFit="cover"
          />
          <div className="judulContain"> 
            <h1 className="judulHome text-7xl">SEDULURGEN</h1>
            <h1 className="judulHome text-2xl kurunigger">(Sedulur Sikep For Z Generation)</h1>
            <h1 className="judulHome text-3xl mt-5">Website Edukasi Berbasis Nilai-Nilai Sedulur Sikep</h1>
            <h1 className="judulHome text-3xl kurunigger">sebagai Media Penguatan Karakter Generasi Z</h1>
            <a className="clickigger mt-5" href="/sejarah">➤ MULAI BELAJAR</a>
          </div>
      </section>
      {/* </body> */}
    </main>
  );
}
