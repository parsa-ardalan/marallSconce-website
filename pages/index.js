import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header/Header";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (

    <div className="w-screen h-screen">

      <Header />

      <div className="container mx-auto mt-10 h-3/4" dir="rtl">

        <h1 className="text-white text-shadow-black text-shadow-md text-xl mr-10 mt-20 font-bold md:text-5xl md:mr-52 md:mt-32"> شرکت دکوراسیون داخلی مارال </h1>

        <p className="text-gray-300 text-shadow-black text-shadow-sm mt-3 text-lg mr-10 md:text-2xl md:mr-56 md:mt-6">
          اجرای طرح لمسه در مکان هایی مانند اماکن تجاری، هتل ها، دفاتر و منزل...
        </p>

        <div className="w-full h-10 flex mt-16 text-white text-sm md:text-lg md:h-12">

          <Link href={"/order/Order"}> <button className="border border-white hover:border-amber-500 duration-400 w-24 h-full mr-14 text-shadow-black text-shadow-md rounded-md md:mr-72 md:w-44 "> ثبت سفارش </button> </Link>

          <Link href={"/templates/Templates"}><button className=" border border-white hover:border-amber-500 duration-400 w-24 h-full text-shadow-black text-shadow-md rounded-md mr-4 md:w-44"> نمونه کارها </button> </Link>

        </div>

      </div>

    </div>

  );
}
