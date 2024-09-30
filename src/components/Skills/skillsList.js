const frontEndSkills = [
    {
        name: 'HTML5',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/html-5-1.png',
    },
    {
        name: 'CSS3',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/CSS3-logo-removebg-preview.png',
    },
    {
        name: 'Javascript',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png',
    },
    {
        name: 'ReactJs',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/React.png',
    },
    {
        name: 'Tailwind',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/tailwindcss-logo-icon-167923.png',
    },
    {
        name: 'Bootstrap',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/pixelcut-export.png',
    },
    
]

export const getFront = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(frontEndSkills)
        }, 500)
    })
}

const backEndSkills = [
    {
        name: 'PHP',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/php-1.png',
    },
    {
        name: 'MySQL',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/Mysql-logo.png',
    },
    {
        name: 'Firebase',
        img: 'https://raw.githubusercontent.com/Lucascelse1/images/main/logo-firebase-removebg-preview.png',
    },
]


export const getBack = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(backEndSkills)
        }, 500)
    })
}
