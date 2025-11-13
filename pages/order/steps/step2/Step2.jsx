export default function Step2(props) {

    return (

        <div className="w-full md:w-1/2 mx-auto mt-24">

            <h1 className="text-white text-2xl md:text-5xl text-right -mt-8 mr-5 md:-mr-16 select-none"> مرحله دوم </h1>

            <p className="text-white text-sm md:text-2xl mt-4 text-right mr-5 md:-mr-16">
                در فیلد های زیر، روز، ماه و سال مد نظر را وارد کنید. دقت داشته باشید که این تاریخ، پیشنهاد شماست. پس با دقت آن را انتخاب کنید
            </p>

            <div className="grid grid-cols-3 h-16 md:h-32 px-10 md:px-28 py-3 md:py-5 gap-x-5 md:gap-x-20 mt-10 ">

                <input type="text" className="col-span-1 border border-white rounded-lg outline-0 text-center text-lg md:text-2xl text-white" placeholder="1404" onChange={props?.year} id="year" />
                <input type="text" className="col-span-1 border border-white rounded-lg outline-0 text-center text-lg md:text-2xl text-white" placeholder="04" onChange={props?.month} id="month" />
                <input type="text" className="col-span-1 border border-white rounded-lg outline-0 text-center text-lg md:text-2xl text-white" placeholder="24" onChange={props?.day} id="day" />

            </div>

            <input type="button" value="مرحله بعدی" className="w-20 mt-14 ml-10 md:w-24 h-9 md:h-10 mr-16 text-sm md:text-lg text-white rounded-md outline-none duration-400 border border-white hover:border-amber-500 hover:text-amber-500" onClick={props?.nextStep} />

        </div>
    )
}