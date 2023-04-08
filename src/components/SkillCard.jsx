import Button from "./Button"

const SkillCard = ({title, image, text, button, btnLabel}) => {
    
    const btn = () => {
        return(button ? (<Button label={btnLabel} type="main"/>) : null)
    }
    
    return(
        <div className="rounded-3xl border border-neutral-400 flex gap-11 p-7">
            <div className="flex flex-col items-start gap-5">
                <h2 className="font-Roboto font-bold text-4xl">{title}</h2>
                <p className="font-Roboto">{text}</p>
                {btn()}
            </div>
            <div className="ml-auto self-center">
                <img src={image} alt="icon" />
            </div>
        </div>
    )
}

export default SkillCard