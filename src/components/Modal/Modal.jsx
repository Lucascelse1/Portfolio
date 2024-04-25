import { AiOutlineClose } from "react-icons/ai"
import '../Project/Project.css'

export const Modal = ( { isOpen, closeModal, description} ) => {

    if (!isOpen) return null

    return (
        <section className="w-full">
            <div className="w-full flex justify-end">
                <AiOutlineClose size={ 20 } onClick={ closeModal } cursor={ "pointer" } />
            </div>
            <article className="w-full p-4">
                <p> { description } </p>
            </article>
        </section>
    )
}
