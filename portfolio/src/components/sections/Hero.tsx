import me from "../../assets/images/me.jpeg";

export function Hero(){
    return (
        <>
            <section id="home" className="flex min-h-screen items-center justify-center">
                <div className="flex items-center gap-10">

                    {/*Aqui vou colocar minha foto */}
                    <img src={me} alt="Hero Image" className="w-64 h-64 rounded-full object-cover" />

                    {/*Minhas informações */}
                    <div>
                        <p className="w-full text-2xl text-center text-gray-600">
                            Hi there 👋​, I'm
                        </p>
                        <h1 className="text-5xl font-bold">
                            Mauricio Siqueira
                        </h1>   
                        <p className="text-center text-gray-600">
                            Software Developer
                        </p>

                        {/*Botões */}
                        <div className="mt-6 flex gap-4 justify-center">
                             <a href="#contact" className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
                                Contact Me
                            </a>
                            <a href="#projects" className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}