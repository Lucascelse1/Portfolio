const projects = [
    {
        name: "Tintas penetrantes",
        technologies: "HTML5, CSS3, JavaScript",
        enlace: "",
        shortdescription: "blablablabalblablablablalbalb",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum atque aliquid libero? Nam aliquam, suscipit voluptatem culpa dolorem aut non assumenda a consequuntur provident temporibus accusantium blanditiis eveniet nisi natusNumquam vero perferendis temporibus laboriosam non maxime repudiandae architecto consectetur accusantium, exercitationem sapiente quo ad mollitia cumque molestiae aperiam voluptate possimus asperiores aliquid doloribus quia cum. Sunt facere cum enimVoluptate molestias aliquam quisquam magnam? Veniam consequatur odio nesciunt optio ullam inventore commodi repellendus, quisquam mollitia labore quod excepturi obcaecati accusamus beatae dolore molestias consequuntur officia nam? Ratione, voluptate laudantiumUllam voluptates dignissimos suscipit quo. Nihil eligendi temporibus aspernatur similique aperiam incidunt assumenda omnis, dolor officiis, nemo consectetur laudantium ex sapiente illo quo voluptatum maxime magni sit eaque quos voluptateLaborum aliquid recusandae veniam magnam cum eveniet? Voluptatem a, minima ipsa quibusdam ea expedita distinctio illum, optio rem mollitia officiis accusamus aut. Exercitationem itaque soluta sapiente voluptatibus atque repellat magni",
        image: "https://i.postimg.cc/YCsTjyyj/Captura-de-pantalla-2024-04-16-174824.png",
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