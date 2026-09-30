import logo from "../../assets/images/Logo.jpeg";

export function Header(){
    return (
        <header>
            <nav className="mx-auto flex max-w-6xl flex-col gap-4 items-center justify-between px-5 py-4 sm:flex-row sm:gap-0 sm:px-6">
                <a href="#home">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </a>

                <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-base sm:gap-8 sm:text-xl">
                    <li>
                        <a href="#about" className="inline-flex min-h-11 items-center sm:min-h-0">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#knowledge" className="inline-flex min-h-11 items-center sm:min-h-0">
                            Knowledge
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="inline-flex min-h-11 items-center sm:min-h-0">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="inline-flex min-h-11 items-center sm:min-h-0">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
