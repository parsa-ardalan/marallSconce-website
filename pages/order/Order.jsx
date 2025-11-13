import { useState } from "react"
import Steps from "./steps/ShowSteps/ShowSteps"

import Step1 from "./steps/step1/Step1";
import Step2 from "./steps/step2/Step2";
import Step3 from "./steps/step3/Step3";


export default function Order() {


    const finalaize = () => {


        // getting data from step one

        steps(def => steps(

        ))


    }

    // date checking

    // day checking

    const checkingDay = () => {

        let day = document.getElementById("day");
        let month = document.getElementById("month")

        if (day.value > 30 || day.value == 0 || day.value.length != 2) {

            day.style.borderColor = "red";

        } else {

            day.style.borderColor = "gold"
        }

        if (day.value.length == 2) {

            month.focus()

        } else {

            day.focus()
        }
    }


    // month checking

    const checkingMonth = () => {

        let month = document.getElementById("month")
        let year = document.getElementById("year")

        if (month.value > 12 || month.value == 0 || month.value.length != 2) {

            month.style.borderColor = "red";

        } else {

            month.style.borderColor = "gold"
        }

        if (month.value.length == 2) {

            year.focus()

        } else {

            month.focus()
        }
    }


    // year checking 

    const checkingYear = () => {

        let year = document.getElementById("year")

        if (year.value != 1404) {

            year.style.borderColor = "red";

        } else {

            year.style.borderColor = "gold"
        }
    }


    // defining steps

    const step3 = () => {

        let step = document.getElementById("step3")

        step.style.borderColor = "orange"
        step.style.color = "orange"

        steps(def => steps(

            <Step3 final={finalaize} />
        ))
    }

    const step2 = () => {


        let step = document.getElementById("step2")

        step.style.borderColor = "orange"
        step.style.color = "orange"

        steps(def => steps(

            <Step2 nextStep={step3} year={checkingYear} month={checkingMonth} day={checkingDay} />

        ))
    }

    const step1 = () => {

        let step = document.getElementById("step1")

        step.style.borderColor = "orange"
        step.style.color = "orange"

        // elements


        steps(def => steps(

            <Step1 nextStep={step2} />
        ))

    }


    // default content

    const [def, steps] = useState(

        <div className="mx-auto w-2/3" dir="rtl">

            <h1 className="text-white text-2xl md:text-5xl text-right mt-16 select-none"> ثبت سفارش </h1>

            <p className="text-white text-sm w-full md:text-2xl text-right mt-8 md:w-4/5 select-none" dir="rtl">

                جهت ثبت سفارش، لطفا سه مرحله پیش رو را با دقت انجام دهید.

                <br />

                در مرحله اول، مشخصات خودتان اعم نام و نام خانوادگی، شماره تلفن خود را وارد کنید. در صورتی که از قبل  حساب کاربری داشته باشید، احتیاجی نیست.

                <br />

                در مرحله دوم، تاریخ و زمان برگزاری جلسه مد نظرتان را تعیین کنید. توجه کنید که روز و زمان جلسه تان را با دقت مشخص کنید. از شما خواهشمندیم وقت با ارزشات را گرامی داشته، و در زمان ثبت شده در مکان مشخص حاضر باشید.

                <br />

                در مرحله سوم، پس از تکمیل اطلاعات جلسه، در صورت داشتن طرح مد نظر، آن را بارگذاری کنید. متراژ و متریال پیشنهادی تان را نیز ثبت کنید. در قسمت مشخص شده، توضیحاتتان را وارد کنید.

                <br />
            </p>

            <div className="w-4/5" dir="ltr">
                <button className="border rounded-md mt-10 text-white w-28 h-9 duration-300 hover:text-amber-500" onClick={step1}> شروع مراحل </button>
            </div>

        </div>
    )

    return (

        <div>

            <Steps />

            {def}

        </div>

    )
}