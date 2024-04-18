import { useState } from "react"
import { getProjects } from "../../projectsMock"
import { useEffect } from "react"
import ProjectList from "../ProjectList/ProjectList"


const ProjectsContainer = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()
            .then(response => {
                setProjects(response)
            })
            .catch(error => {
                console.error(error)
            })
    }) 

    return (
        <section className="flex flex-col items-center gap-y-10">
            <h1>Projects</h1>
            <ProjectList projects={ projects } />
        </section>
    )
}

export default ProjectsContainer