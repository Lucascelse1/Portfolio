

const Hero = () => {
    return (
        <main className="w-full h-[90vh] flex justify-center items-center font-['Anta']">
            <section className="w-9/12 2xl:w-6/12 flex justify-around">
                <article className='w-9/12 flex flex-col items-center justify-center text-center gap-y-4'>
                    <img className='2xl:w-64 w-52 rounded-full' src="https://i.postimg.cc/vH6TFB31/profile-photo.png" alt="" />
                    <h1 className='2xl:text-6xl text-5xl'>Lucas Celse</h1>
                    <h3 className='text-xl'>Front-end Developer</h3>

                </article>
                <article className='w-9/12 flex flex-col justify-center gap-y-10 text-lg'>
                    <p>+2 años de experiencia especializada en el diseño y desarrollo web, estoy entusiasmado por dar el siguiente paso en mi carrera como programador. Busco activamente mi primera oportunidad profesional para aplicar y expandir mis habilidades en un entorno laboral dinámico y desafiante.</p>                   
                    <div className='flex gap-x-10 items-center justify-center '>
                        <a href=""><img className="w-10" src="https://i.postimg.cc/sXCqS7Cy/kisspng-github-computer-icons-clip-art-gits-5b4d20ab1f4131-145288281531781291128.png" alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/lucas-celse-609620212/"><img className="rounded-lg w-10" alt="LinkedIn icon" src='https://i.postimg.cc/x8XfCBrq/linkedin-american-business-logo-social-media-icon-black-pictogram-illustration-isolated-on-white-bac.jpg' /></a>
                        <a href=""><img className="w-16" src="https://i.postimg.cc/Y2ZFz3Km/email-309491-1280-2.png" alt="" /></a>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Hero