import './Hero.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {
    return (
        <main className="w-full h-[100vh] flex justify-center items-center  gap-x-10">
            <section className="w-3/12 flex flex-col justify-center items-center gap-y-16">
                <article className='w-full flex flex-col items-center justify-start text-center gap-y-4'>
                    <h1 className='text-7xl'>Lucas Celse</h1>
                    <h3 className='text-2xl'>Front-end Developer</h3>
                </article>
                <article className='w-full flex flex-col justify-center gap-y-10 text-lg'>
                    <p>+2 años de experiencia especializada en el diseño y desarrollo web, estoy entusiasmado por dar el siguiente paso en mi carrera como programador. Busco activamente mi primera oportunidad profesional para aplicar y expandir mis habilidades en un entorno laboral dinámico y desafiante.</p>
                    <div className='flex gap-x-10 justify-center items-center'>
                        <a href=""><FaGithub className='text-5xl' /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/lucas-celse-609620212/"><FaLinkedin className='text-5xl' /></a>
                        <a href=""><AiFillInstagram className='text-5xl' /></a>
                        <a href=""><IoIosMail className='text-6xl' /></a>
                        
                    </div>
                </article>
            </section>
            <section>
                <img className='rounded-full' src="src\components\Hero\assets\photo-hero.png" alt="" />
            </section>
        </main>
    )
}

export default Hero