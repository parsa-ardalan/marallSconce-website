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

        <h1 className="text-white text-shadow-black text-shadow-md text-5xl mr-52 mt-32 font-bold"> شرکت دکوراسیون داخلی مارال </h1>

        <p className="text-gray-300 text-2xl mr-56 mt-6 text-shadow-black text-shadow-sm">
          اجرای طرح لمسه در مکان هایی مانند اماکن تجاری، هتل ها، دفاتر و منزل...
        </p>

     <Link href={"/order/Order"}> <button className="text-white text-xl border border-white hover:border-amber-500 hover:text-amber-500 duration-400 w-44 h-10 text-shadow-black text-shadow-md rounded-md mr-72 mt-16"> ثبت سفارش </button> </Link>

        <Link href={"/templates/Templates"}><button className="text-white text-xl border border-white hover:border-amber-500 hover:text-amber-500 duration-400 w-44 h-10 text-shadow-black text-shadow-md rounded-md mr-4 mt-16"> نمونه کارها </button> </Link>
      </div>
    </div>

  );
}
