import pringles from "../assets/Pringles.png"
import metaball from "../assets/Metaball.png"
import tube from "../assets/Tube.png"
import Button from "./Button"

const Banner = () => {
    return(
        <div className="mt-48 relative">
            <h3 className="text-2xl font-Tilt">I’m Fernando,</h3>
            <h1 className="font-Tilt text-9xl leading-[110px]">Your Front End Web Developer</h1>
            <p className="max-w-[500px] pt-5">Creating immersive and interactive web applications through stunning web design and development</p>
            <div className="pt-5 flex gap-2">
                <Button 
                    label="about me"
                    type="secondary"
                />
                <Button 
                    label="contact"
                    type="main"
                />
            </div>
            <img className="absolute top-[-275px] left-[-350px]" src={tube} alt="Tube" />
            <img className="absolute top-[-625px] left-[175px]" src={pringles} alt="Pringles" />
            <img className="absolute bottom-[-200px] right-[-300px]" src={metaball} alt="Metaball" />
        </div>
    )
}

export default Banner