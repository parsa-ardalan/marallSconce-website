import Image from "next/image";

// icon images

import telegram from "../../public/images/icons/telegram.png"
import instagram from "../../public/images/icons/instagram.jpg"
import whatsapp from "../../public/images/icons/whatsapp.png"
import facebook from "../../public/images/icons/facebook.png"
import eitaa from "../../public/images/icons/eitaa.png"
export default function ContactUS() {

    const hovering = () => {

        let element = document.getElementById("input-holder")

        console.log(element);

    }

    const numberSubmition = () => {

        let numberPhone = document.querySelector("#number-phone");
        let numberPhoneValue = numberPhone.value;

        if (numberPhoneValue.length === 4 || numberPhoneValue.length === 8) {
            numberPhoneValue = numberPhone.value += "-"

        }
    }

    const capitalizingName = () => {

        console.log("under construction");

    }


    return (

        <div className="h-screen">

            {/* main container */}

            <div className="grid grid-cols-6 mx-auto mt-28 w-3/4 h-4/6 backdrop-brightness-50">


                {/* form division */}

                <div className="col-span-4 p-8 border border-white rounded-l-md border-r-0" dir="rtl">

                    <form action="" method="POST" className="w-full h-full mx-auto">

                        <div className="flex px-10 gap-x-14 w-full h-auto mt-6" id="input-holder">

                            {/* first name */}
                            <input type="text" className="w-1/2 h-16 placeholder:text-white border-b-2 border-b-white outline-none text-white text-xl" id="name" placeholder="  نام" onChange={capitalizingName} />

                            {/* last name */}
                            <input type="text" className="w-1/2 h-16 placeholder:text-white border-b-2 border-b-white outline-none text-white text-xl" placeholder=" نام خانوادگی" />

                        </div>

                        {/* phone number */}
                        <input type="text" className="w-1/2 h-16 placeholder:text-white border-b-2 border-b-white outline-none text-white text-xl mt-10 mr-8" placeholder="  شماره موبایل" id="number-phone" onChange={numberSubmition} />

                        <div className="mt-20 w-full h-auto" dir="ltr">
                            <input type="submit" value="تایید" className="w-16 h-10 ml-16 text-md text-white rounded-md outline-none duration-400 border border-white hover:border-amber-500 hover:text-amber-500" />
                        </div>
                    </form>

                </div>


                {/* intro division */}

                <div className="col-span-2 border border-white rounded-r-md">

                    <h1 className="text-white text-4xl mr-12 mt-7" dir="rtl"> ارتباط با ما </h1>

                    <h2 className="text-white text-right mr-12 text-xl select-none duration-300 hover:mr-14 mt-12" dir="ltr"> 0930 779 8584 </h2>
                    <h2 className="text-white text-right mr-12 text-xl select-none duration-300 hover:mr-14 mt-5" dir="ltr"> 0904 312 4658 </h2>

                    <hr className="mt-16 text-white w-8/10 mx-auto" />


                    {/* icon holder */}

                    <div className="grid grid-cols-10 px-10 gap-4">

                        <Image className="col-span-2 rounded-lg mt-10 duration-300 hover:mt-8" src={telegram} alt="telegram" />
                        <Image className="col-span-2 rounded-lg mt-10 duration-300 hover:mt-8" src={instagram} alt="instagram" />
                        <Image className="col-span-2 rounded-lg mt-10 duration-300 hover:mt-8" src={facebook} alt="facebook" />
                        <Image className="col-span-2 rounded-lg mt-10 duration-300 hover:mt-8" src={eitaa} alt="eitaa" />
                        <Image className="col-span-2 rounded-lg mt-10 duration-300 hover:mt-8" src={whatsapp} alt="whatsapp" />

                    </div>
                </div>

            </div>

        </div>

    )
}