import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "WE THE BEST DEVELOPER",
  description: "67",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body>
    <div className="wrapper">
      <a className="logo" href="/">SEDULURGEN</a>
        <div className="nig">
            <a className="shit" href="/sejarah">Sejarah</a>
            <a className="shit" href="/nilai">Nilai</a>
            <a className="shit" href="/quiz">Quiz</a>  
            <a className="shit" href="/about">About Us</a>
        </div>
    </div>

    <div className="comunity_button">
      <a href="https://chat.whatsapp.com/JQqLhR7Wx8e5cABlcMW8He">
        <ul className="com_ul">
          <Image 
            src="/waigger.svg"
            width={40}
            height={40}
            alt="whatsapp logo"
            className="px-2 py-2"
          />
          <h3 className="font-bold">JOIN KOMUNITAS</h3>
        </ul>
      </a>
    </div>
    <div className="h-[70px]"></div>
        {children}
    <footer style={{
      marginTop: "-10.5px",
      backgroundColor: "lightblue",
      padding: "1rem",
      position:"relative",
      display: "flex",
    }}>
      <a className="logo text-3xl">SEDULURGEN</a>
      {/* ig */}
       <a href="https://www.instagram.com/arrknhrdano/?utm_source=ig_web_button_share_sheet">
        <ul className="com_ul">
          <Image
      src="/igger.svg"
      width={40}
      height={40}
      alt="instagram logo"
      className="px-2 py-2"
      />
          <h3 className="shit">@arrknhrdano</h3>
        </ul>
      </a>

      <a href="https://www.instagram.com/caantikadifa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <ul className="com_ul">
          <Image
      src="/igger.svg"
      width={40}
      height={40}
      alt="instagram logo"
      className="px-2 py-2"
      />
          <h3 className="shit">@caantikadifa</h3>
        </ul>
      </a>
     
    
     
    </footer>
</body>
  </html>
  );
}
