import { scroller } from "react-scroll"

import pringles from "../assets/Pringles.png"
import metaball from "../assets/Metaball.png"
import tube from "../assets/Tube.png"
import Button from "./Button"

const Banner = () => {

    const handleScroll = () => {
        scroller.scrollTo('contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return(
        <div 
            id="home"
            className="
                mt-[100px] relative
                md:mt-[270px]
            "
        >
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
                    onClick={handleScroll}
                />
            </div>
            <img
                className="
                    absolute hidden top-[-275px] left-[-350px] z-[-2]
                    md:block
                " 
                src={tube} 
                alt="Tube" 
            />
            <img
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