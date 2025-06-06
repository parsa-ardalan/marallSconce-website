import TemplateItem from "./templateItem/TemplateItem"

// images

import item1 from "../../images/items/item1.JPG"
import item2 from "../../images/items/item2.JPG"
import item3 from "../../images/items/item3.JPG"
import item4 from "../../images/items/item4.JPG"
import item5 from "../../images/items/item5.JPG"
import item6 from "../../images/items/item6.JPG"
import item7 from "../../images/items/item7.JPG"
import item8 from "../../images/items/item8.JPG"
import item9 from "../../images/items/item9.JPG"
import item10 from "../../images/items/item10.JPG"
import item11 from "../../images/items/item11.JPG"
import item12 from "../../images/items/item12.JPG"


export default function Templates() {

    const items = [

        {
            id: 1,
            imageLink: item1,
            alt: "item 1 "
        },
        {
            id: 2,
            imageLink: item2,
            alt: "item image"
        },
        {
            id: 3,
            imageLink: item3,
            alt: "item image"
        },
        {
            id: 4,
            imageLink: item4,
            alt: "item image"
        },
        {
            id: 5,
            imageLink: item5,
            alt: "item image"
        },
        {
            id: 6,
            imageLink: item6,
            alt: "item image"
        },
        {
            id: 7,
            imageLink: item7,
            alt: "item image"
        },
        {
            id: 8,
            imageLink: item8,
            alt: "item image"
        },
        {
            id: 9,
            imageLink: item9,
            alt: "item image"
        },
        {
            id: 10,
            imageLink: item10,
            alt: "item image"
        },
        {
            id: 11,
            imageLink: item11,
            alt: "item image"
        },
        {
            id: 12,
            imageLink: item12,
            alt: "item image"
        },
    ];

    const items2 = [

        {
            id: 1,
            imageLink: item1,
            alt: "item 1 "
        },
        {
            id: 2,
            imageLink: item2,
            alt: "item image"
        },
        {
            id: 3,
            imageLink: item3,
            alt: "item image"
        },
        {
            id: 4,
            imageLink: item4,
            alt: "item image"
        },
        {
            id: 5,
            imageLink: item5,
            alt: "item image"
        },
        {
            id: 6,
            imageLink: item6,
            alt: "item image"
        },
        {
            id: 7,
            imageLink: item7,
            alt: "item image"
        },
        {
            id: 8,
            imageLink: item8,
            alt: "item image"
        },
        {
            id: 9,
            imageLink: item9,
            alt: "item image"
        },
        {
            id: 10,
            imageLink: item10,
            alt: "item image"
        },
        {
            id: 11,
            imageLink: item11,
            alt: "item image"
        },
        {
            id: 12,
            imageLink: item12,
            alt: "item image"
        },
    ];

    return (

        <div className="templates-body">

            <h1 className="text-white text-5xl w-4/5 mt-28" dir="rtl"> نمونه کارها </h1>
            <p className="text-white text-2xl w-4/5 mt-6" dir="rtl"> روی عکس مورد نظر کلیک راست کنید و سپس لینک آن را کپی کنید.</p>

            <div className="slider mb-44 mt-14">

                <div className="slide-track">


                    {
                        items.map((item) => (
                            <TemplateItem key={item.id} image={item.imageLink} alt={item.alt} />
                        ))

                    }

                    {
                        items2.map((item) => (
                            <TemplateItem key={item.id} image={item.imageLink} alt={item.alt} />
                        ))
                    }

                </div>

            </div>

        </div>

    )


}