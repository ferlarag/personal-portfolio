import Grid2x2 from "./Grid2x2"
import Header2 from "./Header2"
import ProjectCard from "./ProjectCard"
import image1 from "../assets/dummy-project-1.jpg"
import image2 from "../assets/dummy-project-2.jpg"

const Projects = () => {
    return(
        <>
            <Header2 title="Projects"/>
            <Grid2x2>
                <ProjectCard image={image1}/>
                <ProjectCard image={image2}/>
                <ProjectCard image={image2}/>
                <ProjectCard image={image1}/>
            </Grid2x2>
        </>
    )
}

export default Projects