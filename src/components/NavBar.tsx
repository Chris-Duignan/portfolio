interface Props {
    section: string
}

const NavBar = ({ section }: Props) => {

    const style = "pb-6 lg:w-full"
    const newStyle = "pb-6 lg:font-bold lg:underline lg:w-full"
    return (
        <nav>
            <ul className="flex justify-between lg:items-left lg:flex-col">
                <li className={section==="bio" ? newStyle: style}><a href="#bio">About Me</a></li>
                <li className={section==="tech" ? newStyle: style}><a href="#tech">Tech Stack</a></li>
                <li className={section==="projects" ? newStyle: style}><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;