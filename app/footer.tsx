import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-gray-600 text-white px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-black"
    >
      <a className="logo text-2xl font-bold">SEDULURGEN</a>

      <div className="flex gap-6 items-center">
        <a href="https://www.instagram.com/arrknhrdano/">
          <div className="flex items-center gap-2">
            <Image src="/igger.svg" width={30} height={30} alt="instagram logo" />
            <span>@arrknhrdano</span>
          </div>
        </a>

        <a href="https://www.instagram.com/caantikadifa">
          <div className="flex items-center gap-2">
            <Image src="/igger.svg" width={30} height={30} alt="instagram logo" />
            <span>@caantikadifa</span>
          </div>
        </a>
      </div>
    </footer>
  );
}
