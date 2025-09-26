import Image from "next/image";

export default function NilaiPage() {
    return (
      <main className="sejarah-container">
        
        <h1 className="judul-sejarah">Nilai-Nilai Sedulur Sikep</h1>

          <div className="gambar-tengah">
        <Image
          src="/pitutur1.jpg"    
          alt="Samin Surosentiko"
          width={400}
          height={350}
          className="foto-besar"
        />
      </div>
  
      
        <p className="hytam">
        Sedulur Sikep punya ajaran hidup sederhana namun penuh makna. Nilai-nilai ini bisa jadi panduan karakter buat Generasi Z 
        agar tetap kuat di tengah derasnya arus digital:
        </p>
  
      
  
        

      <ul className="list">
        <li className="list-li">“Laku jujur, sabar, trokal, lan nrimo”
    Artinya berperilaku baik, jujur, sabar, berani, dan ikhlas menerima keadaan.
   Relevansi Gen Z: Dalam dunia digital, kejujuran itu penting. Jangan sampai terbawa arus hoaks, FOMO, atau pamer berlebihan.
</li>
        <li className="list-li">“Laku jujur, sabar, trokal, lan nrimo”
    Artinya berperilaku baik, jujur, sabar, berani, dan ikhlas menerima keadaan.
   Relevansi Gen Z: Dalam dunia digital, kejujuran itu penting. Jangan sampai terbawa arus hoaks, FOMO, atau pamer berlebihan.
</li>
        <li className="list-li">“Ojo mbedo mbedakno sapodo padaning urip, kabeh iku sedulure dewe”
   Jangan membeda-bedakan manusia, semua adalah saudara. Relevansi Gen Z: Di dunia nyata maupun digital, jangan diskriminasi. 
   Semua orang punya nilai, latar belakang, dan perjuangan masing-masing.
</li>
         <li className="list-li">“Ojo waton omong, omong sing nganggo waton”
   Jangan asal bicara, gunakan kata-kata dengan bijak.
  Relevansi Gen Z: Ingat, sekali posting di medsos bisa berpengaruh besar. Gunakan kata-kata yang membangun, bukan merusak.
</li>
          <li className="list-li">“Biso Roso Rumongso”
   Jadilah manusia yang punya empati dan bisa merasakan perasaan orang lain.
  Relevansi Gen Z: Di balik layar, ada manusia nyata. Jangan gampang nge-judge, tapi coba pahami. Empati bikin hubungan lebih bermakna.
 (KMB) tahun 1949.</li>
      </ul>

  <h2 className="subjud">Angger-Angger (Aturan Hidup Sedulur Sikep)</h2>
   <p className="hytam">
        Selain pitutur luhur, Sedulur Sikep juga punya tiga prinsip utama:
        </p>
     <ul className="list">
      <div className="gambar-kanan">
          <Image
            src="/pitutur2.jpg"    
            alt="Samin Surosentiko"
            width={300}
            height={350}
            className="foto-tokoh"
          />
        </div>
        <li className="list-li"> Partikel (pikiran): berpikir sebelum bertindak, jangan gegabah.</li>
        <li className="list-li">Pangucap (ucapan): berbicara dengan sopan, menjaga kata-kata.</li>
        <li className="list-li">Lakonono (perilaku): bertindak sesuai nilai kebaikan.</li>
        {/* <div className="gambar-kanan">
          <Image
            src="/pitutur2.jpg"    
            alt="Samin Surosentiko"
            width={100}
            height={150}
            className="foto-tokoh"
          />
        </div> */}
      </ul>

  

<p className="hytam">Relevansi Gen Z: Pikir dulu sebelum posting, gunakan kata yang sehat di ruang digital, dan wujudkan kebaikan dalam aksi nyata.</p>
       
      </main>
    );
  }
  
