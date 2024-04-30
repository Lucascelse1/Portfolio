import { Modal } from "../Modal/Modal"
import projects from "../../projectsMock"
import { useState } from "react"
import './Project.css'

const Project = ({ name, image, technologies, description, shortdescription, enlace }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleLeerMasClick = () => {
        setIsModalOpen(true)

    }

    return (
        <article className="w-9/12 flex justify-around items-center border rounded-lg p-4">
            {!isModalOpen && (
                <article className="w-full h-full flex justify-around items-center fade-in">
                    <div className="w-[40%] h-full">
                        <h1>Nombre: {name}</h1>
                        <h2 className="mt-8">Tecnologias: {technologies}</h2>
                        <h2 className="mt-8"><a href={enlace} target="_blank">Enlace: {enlace}</a></h2>
                        <p className="mt-8">Descripcion: {shortdescription} <button className="hover:text-black hover:bg-white border p-1" onClick={handleLeerMasClick}>Leer mas...</button></p>
                    </div>

                    <img className="w-[45%] rounded-lg" src={image} alt="" />
                </article>
            )}
            {isModalOpen && (
                <Modal key={projects} description={description} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
            )}
        </article>
    )
}

export default Project



