export default function Step2(props) {

    return (
        <div className="w-1/2 mx-auto mt-24">

            <h1 className="text-white text-5xl text-right -mt-8 -mr-16 select-none"> مرحله دوم </h1>

            <p className="text-white text-2xl mt-4 text-right -mr-16">
                در فیلد های زیر، روز، ماه و سال مد نظر را وارد کنید. دقت داشته باشید که این تاریخ، پیشنهاد شماست. پس با دقت آن را انتخاب کنید
            </p>

            <div className="grid grid-cols-3 h-32 px-28 py-5 gap-x-20 mt-10 ">

                <input type="text" className="col-span-1 border border-white rounded-lg outline-0 text-center text-2xl text-white" placeholder="1404" onChange={props?.year} id="year" />
                <input type="text" className="col-span-1 border border-white rounded-lg outline-0 text-center text-2xl text-white" placeholder="04" onChange={props?.month} id="month" />
                <input type="text" className="col-span-1 border border-white rounded-lg outline-0 text-center text-2xl text-white" placeholder="24" onChange={props?.day} id="day" />

            </div>

            <input type="button" value="مرحله بعدی" className="mt-16 w-24 h-10 text-md text-white rounded-md outline-none duration-400 border border-white hover:border-amber-500 hover:text-amber-500" onClick={props?.nextStep} />

        </div>
    )
}