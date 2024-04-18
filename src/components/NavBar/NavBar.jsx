import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <header className={classes.header}>
            <nav className="w-full flex justify-center gap-x-12 p-4">
                <a href="">HOME</a>
                <a href="">ABOUT</a>
                <a href="">SKILLS</a>
                <a href="">PROJECTS</a>
            </nav>
        </header>
    )
}

export default NavBar