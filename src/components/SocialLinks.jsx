import { Link } from "react-router-dom"
import gitgub from "../assets/GH-logo.png"
import linkedin from "../assets/LI-logo.png"
import gmail from "../assets/GM-logo.png"

const SocialLinks = ({ className, size }) => {
    return(
        <ul className={className}>
            <li><Link to="https://www.linkedin.com/in/fernando-lara-develop/"><img width={size} src={linkedin} alt="LinkedIn logo" /></Link></li>
            <li><Link to="https://github.com/ferlarag"><img width={size} src={gitgub} alt="GitHub logo" /></Link></li>
            <li><Link to="mailto:ferlarag10@gmail.com"><img width={size} src={gmail} alt="GitHub logo" /></Link></li>
        </ul>
    )
}

export default SocialLinks