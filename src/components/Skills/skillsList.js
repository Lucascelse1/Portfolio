const frontEndSkills = [
    {
        name: 'HTML5',
        img: 'https://i.postimg.cc/TwDxbv37/html-5-1.png',
    },
    {
        name: 'CSS3',
        img: 'https://i.postimg.cc/cCtv6bp0/CSS3-logo.png',
    },
    {
        name: 'Javascript',
        img: 'https://i.postimg.cc/B6pvbGYr/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png',
    },
    {
        name: 'ReactJs',
        img: 'https://i.postimg.cc/cJKj67D0/React.png',
    },
    {
        name: 'Tailwind',
        img: 'https://i.postimg.cc/1t3tssVT/tailwindcss-logo-icon-167923.png',
    },
    {
        name: 'Bootstrap',
        img: 'https://i.postimg.cc/jjK9WjX8/pixelcut-export.png',
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
        img: 'https://i.postimg.cc/9X4NXfqj/php-1.png',
    },
    {
        name: 'MySQL',
        img: 'https://i.postimg.cc/pr8ZfpDh/Mysql-logo.png',
    },
    {
        name: 'Firebase',
        img: 'https://i.postimg.cc/8cDHbTwZ/logo-firebase-removebg-preview.png',
    },
]


export const getBack = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(backEndSkills)
        }, 500)
    })
}
