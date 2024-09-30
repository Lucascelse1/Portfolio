import { AiOutlineClose } from "react-icons/ai"
import '../Project/Project.css'

export const Modal = ( { isOpen, closeModal, description} ) => {

    if (!isOpen) return null

    return (
        <section className="w-full fade-in ">
            <div className="w-full flex justify-end">
                <AiOutlineClose size={ 20 } onClick={ closeModal } cursor={ "pointer" } />
            </div>
            <article className="w-9/12 p-4 m-auto">
                <p> { description } </p>
            </article>
        </section>
    )
}
