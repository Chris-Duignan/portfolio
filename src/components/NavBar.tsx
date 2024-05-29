interface Props {
  section: string;
}

const NavBar = ({ section }: Props) => {
  const style = "pb-6 lg:w-full";
  const newStyle = "pb-6 lg:font-bold lg:underline lg:w-full";
  return (
    <nav>
      <ul className="flex px-5 justify-between lg:items-left lg:flex-col lg:px-0">
        <li className={section === "bio" ? newStyle : style}>
          <a href="#bio" className="text-xl">
            About Me
          </a>
        </li>
        <li className={section === "tech" ? newStyle : style}>
          <a href="#tech" className="text-xl">
            Tech Stack
          </a>
        </li>
        <li className={section === "projects" ? newStyle : style}>
          <a href="#projects" className="text-xl">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
