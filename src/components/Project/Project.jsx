const Project = ({ name, image, tecnologies, description }) => {
    return (
        <article className="w-10/12 flex justify-around items-center mt-16 border rounded-lg p-4">
            <div className="w-[40%]">
                <h1>Nombre: { name }</h1>
                <h2>Tecnologias: { tecnologies }</h2>
                <p>Descripcion: { description }</p>
            </div>

            <img className="w-[45%] rounded-lg" src={image} alt="" />
            
        </article>
    )
}

export default Project
