import Image from "next/image";

export default function TemplateItem(props) {

    return (
        <div className="slide">
            <Image src={props.image} alt={props.alt} className="templateImage duration-500 hover:translate-z-3"/>
        </div>
    )
}