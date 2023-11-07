interface Props {
    section: string
}

const NavBar = ({ section }: Props) => {

    const style = "pb-6 w-full"
    const newStyle = "pb-6 font-bold underline w-full"
    return (
        <nav>
            <ul className="flex justify-between items-left md:flex-col">
                <li className={section==="bio" ? newStyle: style}><a href="#bio">About Me</a></li>
                <li className={section==="tech" ? newStyle: style}><a href="#tech">Tech Stack</a></li>
                <li className={section==="projects" ? newStyle: style}><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;