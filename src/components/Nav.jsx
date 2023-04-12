import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import Button from "./Button"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [viewporWidth, setViewportWidth] = useState(window.innerWidth)

    // const [scrollUp, setScrollUp] = useState(false)
    // const scrollY = useTransform(useScroll().scrollY, [0, 100], [0, -100])

    // //this useEffect will be listening to the screen scroll
    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollUp( scrollY.get() > scrollY.getPrevious() ? true : false)
    //     }

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [scrollY])

    //this useEffect will be listening to the screen size
    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth)

            // this makes sure the menu is closed automatically when going from big to small
            // and that the menu is open automatically when going from small to big
            if(!isOpen && window.innerWidth > 640){
                setIsOpen(true)
            } else if(window.innerWidth < 640){
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return(
        <nav 
            className="
                flex flex-col p-0 fixed top-0 z-[999] w-full border-b
                sm:py-2 sm:bg-white
            "
        >
             {/* bg-white bg-opacity-25 backdrop-blur 👆🏽 */}
            <div className="
                bg-white w-full flex justify-end
                sm:hidden sm:bg-transparent
            ">
                <button className="p-4" onClick={handleClick}>
                    <HamburgerMenuIcon />
                </button>
            </div>
            <motion.div 
                className="
                    max-w-[1160px] w-full mx-auto h-screen flex-grow bg-white pt-10 absolute top-8 z-[-1] left-[100vw]
                    sm:px-6 sm:h-auto sm:bg-transparent sm:w-full sm:relative sm:top-0 sm:pt-0
                "
                animate={{ x: !isOpen && viewporWidth < 639 ? 0 : -viewporWidth}}
                transition={{duration: 0.5}}
            >
                <ul className="
                    flex flex-col items-center gap-4 justify-end
                    sm:flex-row
                ">
                    <li>home</li>
                    <li>project</li>
                    <li>services</li>
                    <li><Button label="contact" type="main"/></li>
                </ul>
            </motion.div>
        </nav>
    )
}

export default Nav