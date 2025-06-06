export default function Step1(props) {

    

    return (
        <div className="mx-auto w-1/2 mt-24" dir="rtl">

            <form action="" method="POST" className="w-full h-full mx-auto">

                <div className="flex px-10 gap-x-24 w-full h-auto mt-6">

                    {/* first name */}
                    <input type="text" className="w-1/2 h-16 placeholder:text-white border-b-2 border-b-white outline-none text-white text-xl" placeholder="نام" id="first-name"/>

                    {/* last name */}
                    <input type="text" className="w-1/2 h-16 placeholder:text-white border-b-2 border-b-white outline-none text-white text-xl" placeholder=" نام خانوادگی" id="last-name" />

                </div>

                {/* phone number */}
                <input type="text" className="w-1/2 h-16 placeholder:text-white border-b-2 border-b-white outline-none text-white text-xl mt-16 mr-8" placeholder="  شماره موبایل" id="phone-number"/>


                <div className="grid grid-cols-2 mt-20 w-full h-auto">

                    <div className="col-span-1">
                        <span className="text-white text-lg select-none mr-10 duration-400 hover:text-amber-500"> حساب کاربری دارید؟ </span>
                    </div>

                    <div className="col-span-1" dir="ltr">
                        <input type="button" value="مرحله بعدی" className="w-24 h-10 mr-16 text-md text-white rounded-md outline-none duration-400 border border-white hover:border-amber-500 hover:text-amber-500" onClick={props?.nextStep} />
                    </div>

                </div>

            </form>

        </div>
    )
}