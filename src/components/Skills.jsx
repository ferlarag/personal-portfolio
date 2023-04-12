import Grid2x2 from "./Grid2x2";
import SkillCard from "./SkillCard";
import Header2 from "./Header2";
import clap from "../assets/Clap.png"
import coding from "../assets/Coding.png"
import mouse from "../assets/Mouse.png"
import note from "../assets/Note.png"

const Skills = () => {
    return(
        <div id="services">
            <Header2 title="Skills and Services"/>
            <Grid2x2>
                <SkillCard 
                    title="Design"
                    text="With a keen eye for aesthetics and user-centered design principles, I craft designs that are not only beautiful but also functional and intuitive."
                    button={false}
                    image={note}
                />
                <SkillCard
                    title="Development"
                    text="I create flawless websites and web apps with clean code and intuitive interfaces to meet your needs and delight your users."
                    button={false}
                    image={coding}
                />
                <SkillCard 
                    title="My Tech Stack"
                    text="For those who are curious, here is a list of the technologies and frameworks that I use and love."
                    button={true}
                    btnLabel="learn more"
                    image={mouse}
                />
                <SkillCard 
                    title="How it works?"
                    text="Working with me is easy and straightforward. From ideation to launch, I guide you through the entire process to ensure that your vision becomes a reality. "
                    button={true}
                    btnLabel="see how"
                    image={clap}
                />
            </Grid2x2>
        </div>
    )
}

export default Skills