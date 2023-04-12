import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { scroller, animateScroll } from 'react-scroll';
import { Routes, Route, Link } from "react-router-dom";

import Button from "./Button"
import Logo from "./Logo"
import SocialLinks from "./SocialLinks"

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
  
    
    const scrollToHome = () => {
        handleClick()
        animateScroll.scrollToTop({
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    const scrollToProjects = () => {
        handleClick()
        scroller.scrollTo('projects', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    const scrollToServices = () => {
        handleClick()
        scroller.scrollTo('services', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    const scrollToContact = () => {
        handleClick()
        scroller.scrollTo('contact', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return(
        <nav 
            className="
                flex flex-col p-0 fixed top-0 z-[999] w-full border-b h-14 bg-white justify-center mx-autos
                sm:py-2 sm:h-auto sm:flex-row sm:px-6 sm:justify-between
            "
        >
            {viewporWidth > 640 && <SocialLinks size="30" className="flex flex-row gap-8 items-center"/> }
            <div className="
                bg-white w-full flex justify-between items-center
                sm:hidden sm:bg-transparent
            ">
                {viewporWidth < 640 && <Logo className="ml-2"/> }
                <button className="p-2 m-2 border rounded-lg" onClick={handleClick}>
                    <HamburgerMenuIcon />
                </button>
            </div>
            {viewporWidth > 640 && <Logo /> }
            <motion.div 
                className="
                    max-w-[1160px] w-full h-screen flex flex-col items-center flex-grow bg-white absolute top-14 z-[-1] left-[100vw] border-l
                    sm:h-auto sm:bg-transparent sm:w-auto sm:relative sm:top-0 sm:pt-0 sm:border-l-0 sm:flex-grow-0
                "
                animate={{ x: !isOpen && viewporWidth < 639 ? 0 : -viewporWidth}}
                // animate only in the mobile version
                transition={{duration: viewporWidth > 640 ? 0 : 0.5}}
            >
                <ul className="
                    flex flex-col items-center gap-4 mt-20
                    sm:flex-row sm:mt-0
                ">
                    <li><Link onClick={scrollToHome}>home</Link></li>
                    <li><Link onClick={scrollToProjects}>projects</Link></li>
                    <li><Link onClick={scrollToServices}>services</Link></li>
                    <li><Button label="contact" type="main" onClick={scrollToContact}/></li>
                </ul>

                {viewporWidth < 640 && 
                    <div className="flex flex-col items-center gap-4 mt-[200px]">
                        <p className="">You can also find me here 👇🏽</p>
                        <SocialLinks size="60" className="flex gap-5 border rounded-lg p-2"/>
                    </div>
                }

                
            </motion.div>
        </nav>
    )
}

export default Nav