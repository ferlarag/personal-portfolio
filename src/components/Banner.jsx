import pringles from "../assets/Pringles.png"
import metaball from "../assets/Metaball.png"
import tube from "../assets/Tube.png"
import line from "../assets/pointing-line-1.png"
import Button from "./Button"

const Banner = () => {
    return(
        <div className="
            mt-[100px] relative
            md:mt-[270px]
        ">
            <h3 className="
                text-xl font-Tilt
                sm:text-2xl
            ">I’m Fernando,</h3>
            <h1 className="
                font-Tilt text-6xl leading-[50px]
                sm:text-7xl sm:leading-[60px]
                md:text-8xl md:leading-[80px]
                xl:text-9xl xl:leading-[110px]
            ">Your Front End Web Developer</h1>
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
            <div className="`
                hidden absolute right-10 z-[-1]
                sm:block sm:top-[-140px]
                md:top-[-180px]
            ">
                <img src={line} alt="pointing line" />
                <h3 className="text-2xl font-Tilt absolute left-[-50px] top-20">Say hi! 👋🏽</h3>
            </div>
            <img 
                // className="
                //     absolute top-[-200px] left-[-150px] z-[-1]
                //     sm:top-[-275px] sm:left-[-350px]
                // " 
                className="
                    absolute hidden top-[-275px] left-[-350px] z-[-2]
                    md:block
                " 
                src={tube} 
                alt="Tube" 
            />
            <img 
                // className="
                //     absolute top-[-210px] left-[150px] z-[-1]
                //     sm:top-[-625px] sm:left-[175px]
                // " 
                className="
                    absolute hidden top-[-625px] left-[175px] z-[-2]
                    md:block
                " 
                src={pringles} 
                alt="Pringles" 
            />
            <img
                className="
                    absolute hidden bottom-[-200px] right-[-300px] z-[-2]
                    md:block
                " 
                src={metaball} 
                alt="Metaball" 
            />
        </div>
    )
}

export default Banner