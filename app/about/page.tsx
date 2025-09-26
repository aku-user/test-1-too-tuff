import Image from "next/image";

export default function About() {
  return (
    <main className="about-container">

      <h1 className="judul-sejarah">Our Social Media</h1>

        <div className="gambar-tengah">
              <Image
                src="/fotbar (2).jpg"    
                alt="Samin Surosentiko"
                width={500}
                height={350}
                className="foto-besar"
              />
            </div>

 <p className="hytam">
        Generasi Z yang lahir pada akhir 1990-an hingga awal 2010-an dikenal adaptif terhadap teknologi, namun rentan 
        terhadap demoralisasi akibat pengaruh negatif media sosial seperti perundungan, penipuan, hoaks, hingga radikalisme. 
        Kondisi ini berdampak pada menurunnya empati, gotong royong, serta kesadaran sosial, sekaligus memunculkan kecenderungan 
        individualistik. Fenomena tersebut menjadi tantangan serius dalam dunia pendidikan. Di sisi lain, nilai-nilai luhur dari 
        komunitas Sedulur Sikep atau Suku Samin seperti kejujuran, kesetaraan, kesabaran, anti kekerasan, dan hidup sederhana masih 
        relevan untuk dijadikan dasar penguatan karakter generasi muda, meski belum banyak dikenal oleh Gen-Z. Oleh karena itu, 
        dibutuhkan media inovatif yang mampu menjembatani nilai-nilai lokal dengan gaya hidup digital generasi Z. Salah satu solusi 
        yang ditawarkan adalah pengembangan website edukasi “SEDULURGEN (Sedulur Sikep for Z Generation)” sebagai sarana penguatan 
        karakter generasi Z berbasis nilai-nilai Sedulur Sikep. 
      </p>

 <div className="gambar-tengah">
        <Image
          src="/sikma.jpg"
          alt="samin"
          width={300}
          height={350}
          className="foto-tokoh mr-auto"
        />

             <Image
                src="/sikma2.jpg"
                alt="samin"
                width={300}
                height={350}
                className="foto-tokoh ml-auto"
              />
      </div>

      

    <section className="content">
    <a className="card" href="https://www.instagram.com/arrknhrdano/?utm_source=ig_web_button_share_sheet">
      <h2>
        <Image
              src="/igger.svg"
              width={40}
              height={40}
              alt="instagram logo"
              className="foto-tokoh ml-auto mr-auto "
              />
        INSTAGRAM</h2>
      <p className="hytam2">@arrknhrdano</p>
    </a>
    <a className="card" href="https://www.instagram.com/caantikadifa?utm_source=ig_web_button_share_sheet">
      <h2>
        <Image
              src="/igger.svg"
              width={40}
              height={40}
              alt="instagram logo"
              className="foto-tokoh ml-auto mr-auto "
              />
        INSTAGRAM
        </h2>
      <p className="hytam2">@caantikadifa</p>
    </a>
    {/* <div class="card">
      <h2>Layanan 3</h2>
      <p>Fusce aliquam magna sit amet augue interdum blandit.</p>
    </div> */}

  </section>


     <p className="hytam">
        Hubungi kami melalui sosial media atau bergabung dengan komunitas untuk 
        belajar dan berkembang bersama. 
      </p>
    </main>
  );
}
