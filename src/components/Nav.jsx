import Button from "./Button"
import MainGrid from "./MainGrid"

const Nav = () => {
    return(
        <nav className="py-8 fixed top-0 z-10 w-full">
            <MainGrid>
                <ul className="flex items-center gap-4 justify-end">
                    <li>home</li>
                    <li>project</li>
                    <li>services</li>
                    <li><Button label="contact" type="main"/></li>
                </ul>
            </MainGrid>
        </nav>
    )
}

export default Nav