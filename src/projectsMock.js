const projects = [
    {
        name: "Tintas penetrantes",
        technologies: "HTML5, CSS3, JavaScript",
        enlace: "https://chempo.com.ar/tintaspenetrantes/",
        shortdescription: "Landing Page para importante empresa...",
        description: "Landing page para importante empresa del rubro de los abrasivos y quimicos para superficies. Su idea era darle un protagonismo extra a uno de sus productos mas vendidos, en esete caso las Tintas Penetrantes",
        image: "https://raw.githubusercontent.com/Lucascelse1/images/main/Captura-de-pantalla-2023-07-25-181523.png",
    },
    {
        name: "Chempo Company",
        technologies: "HTML5, CSS3, JavaScript",
        enlace: "https://chempo.com.ar/",
        shortdescription: "ghjghjghjghjghjghjghjghjg",
        description: "pito",
        image: "https://i.postimg.cc/8C6db47s/Captura-de-pantalla-2024-04-23-161514.png",
    },
    {
        name: "La Pirinola",
        technologies: "React JS, Tailwind",
        enlace: "",
        shortdescription: "opopopoppopopopopoopo",
        description: "",
        image: "",
    },

]

export default projects


export const getProjects = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(projects)
        }, 500)
    })
}