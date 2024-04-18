import Project from "../Project/Project"

const ProjectList = ( { projects } ) => {
    return (
        projects.map(project => {
            return <Project key={ project.name } { ...project }  />
        })
    )
}

export default ProjectList