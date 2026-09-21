import logo from "../../assets/images/Logo.jpeg";

export function Header(){
    return (
        <header>
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#home">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </a>

                <ul className="flex items-center gap-8 text-xl">                        
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#knowledge">
                            Knowledge
                        </a>
                    </li>

                    <li>
                        <a href="#projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}