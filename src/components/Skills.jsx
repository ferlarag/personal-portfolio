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
                    text="Let me show you how easy and straight forward working with me is. I’ll run your through the whole process from idea to live website"
                    button={false}
                    image={note}
                />
                <SkillCard 
                    title="Development"
                    text="Let me show you how easy and straight forward working with me is. I’ll run your through the whole process from idea to live website"
                    button={false}
                    image={coding}
                />
                <SkillCard 
                    title="Tech Stack"
                    text="Let me show you how easy and straight forward working with me is. I’ll run your through the whole process from idea to live website"
                    button={true}
                    btnLabel="learn more"
                    image={mouse}
                />
                <SkillCard 
                    title="How it works?"
                    text="Let me show you how easy and straight forward working with me is. I’ll run your through the whole process from idea to live website"
                    button={true}
                    btnLabel="see how"
                    image={clap}
                />
            </Grid2x2>
        </div>
    )
}

export default Skills