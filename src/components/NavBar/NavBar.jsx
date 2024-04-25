import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <header className={classes.header}>
            <nav className="w-full flex justify-center gap-x-12 p-4">
                <a href="">INICIO</a>
                <a href="">SOBRE MI</a>
                <a href="">HABILIDADES</a>
                <a href="">PROJECTOS</a>
            </nav>
        </header>
    )
}

export default NavBar