import Button from "./Button"

const SkillCard = ({title, image, text, button, btnLabel}) => {
    
    const btn = () => {
        return(button ? (<Button label={btnLabel} type="main"/>) : null)
    }
    
    return(
        <div className="
            rounded-3xl border border-neutral-400 flex p-7 flex-col-reverse gap-10
            sm:gap-0 sm:flex-row
        ">
            <div className="flex flex-col flex-1 items-start gap-5">
                <h2 className="font-Roboto font-bold text-4xl">{title}</h2>
                <p className="font-Roboto">{text}</p>
                {btn()}
            </div>
            <div className="flex-1 flex-shrink-0 self-center">
                <img className="ml-auto" src={image} alt="icon" />
            </div>
        </div>
    )
}

export default SkillCard