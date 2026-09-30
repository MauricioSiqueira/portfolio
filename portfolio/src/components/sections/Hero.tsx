import me from "../../assets/images/me.jpeg";

export function Hero(){
    return (
        <>
            <section id="home" className="flex items-center justify-center mt-12 px-5 md:mt-25 md:px-0">
                <div className="flex min-w-0 flex-col items-center gap-8 md:flex-row md:gap-10">

                    {/*Aqui vou colocar minha foto */}
                    <img src={me} alt="Hero Image" className="w-52 h-52 shrink-0 rounded-full object-cover md:w-64 md:h-64" />

                    {/*Minhas informações */}
                    <div className="min-w-0">
                        <p className="w-full text-2xl text-center text-gray-600">
                            Hi there 👋, I'm
                        </p>
                        <h1 className="text-4xl text-center font-bold md:text-5xl md:text-left">
                            Mauricio Siqueira
                        </h1>   
                        <p className="text-center text-gray-600">
                            Software Developer
                        </p>

                        {/*Botões */}
                        <div className="mt-6 flex flex-wrap gap-4 justify-center">
                             <a href="#contact" className="inline-flex min-h-11 items-center rounded bg-black px-4 py-2 text-white hover:bg-gray-800 md:min-h-0">
                                Contact Me
                            </a>
                            <a href="#projects" className="inline-flex min-h-11 items-center rounded bg-black px-4 py-2 text-white hover:bg-gray-800 md:min-h-0">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
