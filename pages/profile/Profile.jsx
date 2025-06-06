export default function Profile() {

    return (

        <div className="h-screen w-screen mx-auto px-20 py-12">

            {/* container div */}

            <div className="grid grid-cols-4 w-full h-full">

                {/* personal data */}

                <div className="col-span-1 border-r border-white">

                    {/* icon container */}

                    <div className="h-2/5 w-full flex items-center justify-center px-16 py-6 mt-10">

                        <div className="w-full h-full border border-white rounded-full">

                            <div className="mx-auto w-1/3 h-1/3 border border-white rounded-full mt-8"> </div>
                            <div className="mx-auto w-7/12 h-1/5 border border-white rounded-t-full mt-3"> </div>

                        </div>

                    </div>

                    {/* inputs account */}

                    <div className="h-auto w-full px-12">
                        <input type="text" className="outline-0 text-xl text-white border-b border-white w-full h-12 mt-3 placeholder:text-white" placeholder="  first name" />
                        <input type="text" className="outline-0 text-xl text-white border-b border-white w-full h-12 mt-6 placeholder:text-white" placeholder="  last name (optional)" />

                        <h4 className="text-xl text-white mt-18 select-none duration-400 hover:text-amber-500"> already had account? </h4>
                    </div>

                </div>


                {/* email and account data */}

                <div className="col-span-3 py-10">


                    {/* input container */}

                    <div className="block h-auto w-2/5 ml-10">

                        <input type="text" className="outline-0 text-xl text-white border-b border-white w-full h-12 placeholder:text-white" placeholder="  E-mail address" id="E-mail" />

                        <input type="password" className="outline-0 text-xl text-white border-b border-white w-full h-12 mt-16 placeholder:text-white" placeholder="  E-mail password" id="password" />
                        <input type="password" className="outline-0 text-xl text-white border-b border-white w-full h-12 mt-10 placeholder:text-white" placeholder="  Re-enter password" id="re-password" />

                        <input type="text" className="outline-0 text-xl text-white border-b border-white w-full h-12 mt-16 placeholder:text-white" placeholder="  +98   +++ +++ ++++" id="E-mail" />

                        <h4 className="text-xl text-white mt-8 select-none"> send code to </h4>

                        <div className="flex w-1/2 mt-6">
                            <h4 className="text-lg text-white w-1/2 duration-300 select-none hover:text-amber-500"> E-mail </h4>
                            <h4 className="text-lg text-white w-1/2 duration-300 select-none hover:text-amber-500"> message </h4>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}