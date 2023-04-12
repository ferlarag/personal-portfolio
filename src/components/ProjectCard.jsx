const ProjectCard = ({ image }) => {
    return(
        <div>
            <img className="w-full" src={image} alt="Project Image" />
        </div>
    )
}

export default ProjectCard