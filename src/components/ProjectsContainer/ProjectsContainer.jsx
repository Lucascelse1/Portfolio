import { useState } from "react"
import { getProjects } from "../../projectsMock"
import { useEffect } from "react"
import ProjectList from "../ProjectList/ProjectList"
import { GoCode } from "react-icons/go"


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
        <section className="flex flex-col items-center gap-y-10 font-['Anta']">
            <div className="w-9/12 flex justify-start">
                <h1 className="flex items-center text-4xl gap-x-4"> <GoCode/> PROYECTOS  </h1>
            </div>
            <div className="flex flex-col items-center gap-y-12">
                <ProjectList projects={ projects } />
            </div>
        </section>
    )
}

export default ProjectsContainer