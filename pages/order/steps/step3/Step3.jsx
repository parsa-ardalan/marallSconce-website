import Image from "next/image";

export default function Step3(props) {

    const getLink = (index) => {

        let link = document.getElementById("imageLink").value
        let img = document.getElementById("image");

        img.style.backgroundImage = `url(${link})`
    }

    return (

        <div className="grid grid-cols-2 mt-20 mx-auto w-2/3 h-auto">

            {/* the left part */}

            <div className="col-span-2 md:col-span-1 hidden md:block md:border-l border-l-white h-full md:h-96 px-5">

                {/* image selection division */}

                <div className="h-full md:h-3/4 w-full md:px-20 py-5">

                    {/* image */}

                    <div className="w-full h-full border border-amber-500 rounded-2xl bg-center bg-cover bg-no-repeat" id="image" alt="selected image"></div>

                    <div className="h-1/4 w-full flex justify-center mt-2 md:mt-0 items-center">
                        <input type="text" className="border border-white text-white outline-0 rounded-lg h-10 mt-5 px-3 w-3/4 duration-300" id="imageLink" onChange={getLink} />
                    </div>

                </div>

                <div className="h-1/4 w-full">

                    <input type="button" value="ثبت سفارش" className="mt-10 ml-3 w-28 h-10 text-md text-white rounded-md outline-none duration-300 border border-white hover:border-amber-500 hover:text-amber-500 hidden md:block" onClick={props?.final} />

                </div>

            </div>

            {/* the right part */}

            <div className="col-span-2 mt-6 md:mt-0 md:col-span-1 border-r border-r-white h-auto">

                <div className="w-full h-1/2 border-b border-white" dir="rtl">

                    <h1 className="text-xl md:text-4xl mr-8 text-white"> متراژ لمسه تان را وارد کنید </h1>

                    <input type="text" className="outline-0 mr-8 mt-4 md:mt-10 border border-white rounded-sm md:rounded-lg text-lg md:text-2xl text-white h-10 md:h-16 w-4/6 md:w-5/6 px-4 placeholder:text-sm md:placeholder:text-xl" placeholder=" بر حسب متر وارد کنید" id="size" />

                </div>

                <div className="w-full h-1/2" dir="rtl">

                    <h1 className="w-full text-xl md:text-2xl mr-8 text-white mt-5"> آدرسی که لمسه کاری را وارد کنید </h1>

                    <div className="grid grid-cols-10 w-full h-20 md:mt-10 mr-8">


                        {/* location icon */}

                        <div className="flex items-center justify-center col-span-1">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                        </div>

                        {/* address input */}

                        <div className="flex items-center justify-center col-span-9">

                            <input type="text" className="border-b text-white h-12   md:h-16 border-white outline-0 w-5/6 text-lg placeholder:text-sm placeholder:text-stone-300" placeholder=" شهر / خیابان / کوچه / پلاک" id="location-address" />

                        </div>
                    </div>

                </div>

            </div>

             <div className="h-1/4 w-full">

                    <input type="button" value="ثبت سفارش" className="mt-10 ml-3 w-24 md:w-28 h-10 text-sm md:text-lg text-white rounded-md outline-none duration-300 border border-white hover:border-amber-500 hover:text-amber-500 md:hidden" onClick={props?.final} />

                </div>

        </div>

    )
}