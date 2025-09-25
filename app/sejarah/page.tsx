import Image from "next/image";

export default function Sejarah() {
  return (
    <main className="sejarah-container">
      
      <h1 className="judul-sejarah">Sejarah Sedulur Sikep</h1>

    
      <p className="hytam">
       Gerakan Sedulur Sikep lahir pada akhir abad ke-19 di Randublatung, Blora, Jawa Tengah, dipimpin oleh Samin Surosentiko (1859–1914), yang 
       lahir dengan nama kecil Raden Kohar. Ia adalah seorang petani sekaligus pemimpin rakyat kecil yang berani menentang penjajahan Belanda.
      </p>

      <div className="gambar-tengah">
        <Image
          src="/SaminHome.jpg"    
          alt="Samin Surosentiko"
          width={600}
          height={400}
          className="foto-besar"
        />
      </div>

      <p className="hytam">
      Bentuk perlawanannya berbeda dengan gerakan bersenjata. Samin memilih jalan damai tanpa kekerasan,
       tetap berpegang pada kejujuran dan kesederhanaan. Bersama pengikutnya, ia menolak membayar pajak, 
       enggan tunduk pada aturan kolonial, bahkan menjalankan perintah Belanda dengan cara apa adanya sebagai 
       bentuk protes pasif. Istilah “Samin” berasal dari kata sami-sami Jawa (sama-sama orang Jawa), menegaskan 
       persatuan rakyat tanpa membedakan status. Sementara “Sikep” berarti sikap atau perilaku, merujuk pada tata 
       laku pengikutnya dalam melawan ketidakadilan.

      </p>

   
      <div className="nagger">
       <div className="aga">
          <p className="hytam">
          Karena dianggap berbahaya, pada tahun 1907 Samin Surosentiko ditangkap dan 
          diasingkan ke Padang hingga wafat pada 1914. Meski demikian, ajarannya tetap menyebar ke berbagai 
          daerah seperti Blora, Bojonegoro, Pati, Kudus, hingga Ngawi, dan melahirkan komunitas yang dikenal hingga 
          kini sebagai Sedulur Sikep  simbol perlawanan damai rakyat Jawa terhadap kolonialisme.
          </p>
        </div>
        {/* <Image
          src=""
          alt=""
          width={500}
          height={350}
          className="foto-tokoh"
        /> */}
      </div>
    </main>
  );
}
