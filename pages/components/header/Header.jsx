import Image from "next/image";

import logo from "../../../images/main/logo.png"
import Link from "next/link";


export default function Header() {

    const openBurger = () => {

        let burger = document.querySelector(".burger");
        let iconBox = document.querySelector(".icon-box");


        burger.style.marginRight = "10%";
        burger.style.opacity = "0%";

        iconBox.style.marginRight = "0px";
        iconBox.style.opacity = "100%";
    }

    const closeBurger = () => {

        let burger = document.querySelector(".burger");
        let iconBox = document.querySelector(".icon-box");

        burger.style.marginRight = "10%";
        burger.style.opacity = "100%";

        iconBox.style.marginRight = "-270px";
        iconBox.style.opacity = "0%";

    }

    return (

        <div className="container grid grid-cols-2 mx-auto h-1/8 mt-3">

            <div className="col-span-1">
                <Image src={logo} alt="logo" className="w-36 -mt-3 -ml-3 hover:mt-0 duration-700" dir="ltr" />
            </div>

            <div className="flex col-span-1" dir="rtl">

                <div className="icon-box flex h-auto w-auto -mr-56 opacity-0 duration-1000">

                    {/* close the bar item */}

                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="size-8 mt-5 mr-6 text-white duration-500 hover:ml-2"
                        onClick={closeBurger}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>


                    {/* Home page icon */}

                    <Link href={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="size-8 mt-5 mr-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>


                    {/* user profile icon */}

                    <Link href={"../../profile/Profile"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="size-8 mt-5 mr-6 text-white duration-400 hover:text-amber-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                    </Link>

                    {/* phone call icon */}

                    <Link href={"../../contact-us/ContactUs"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="size-8 mt-5 mr-6 text-white duration-400 hover:text-emerald-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </Link>

                </div>

                {/* burger icon */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor"
                    className="burger size-10 mt-4 mr-6 text-white hover:text-amber-500 duration-1000 hover:rotate-180"
                    onClick={openBurger}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
        </div>
    )
}