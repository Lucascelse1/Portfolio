const projects = [
    {
        name: "Tintas penetrantes",
        tecnologies: "HTML5, CSS3, JavaScript",
        description: "",
        image: "https://i.postimg.cc/YCsTjyyj/Captura-de-pantalla-2024-04-16-174824.png",
    },
    {
        name: "Chempo Company",
        tecnologies: "HTML5, CSS3, JavaScript",
        description: "",
        image: "",
    },
    {
        name: "Spider Page",
        tecnologies: "HTML5, CSS3, JavaScript",
        description: "",
        image: "",
    },
    {
        name: "La Pirinola",
        tecnologies: "React JS, Tailwind",
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