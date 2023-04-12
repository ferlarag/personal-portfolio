import keyboard from "../assets/keyboard.png"

const Footer = () => {
    return(
        <div className="mt-[140px] mb-10">
            <div className="flex justify-between items-center gap-10">
                <div className="flex-1">
                    <img src={keyboard} alt="keyboard" />
                </div>
                <div className="text-right flex-1">
                    <h2 className="
                        sm:text-[4rem] sm:leading-[60px]
                        text-[2rem] font-Tilt leading-8
                    ">Designed <br />and coded <br />with love.</h2>
                </div>
            </div>
            <p className="mt-10 text-center">© 2023 - Fernando Lara</p>
        </div>
    )
}

export default Footer