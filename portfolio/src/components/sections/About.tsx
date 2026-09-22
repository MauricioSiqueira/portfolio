export function About(){
    return (
        <>
            <section id="about" className="items-center justify-center mt-20">
                <h1 className="text-4xl font-bold text-center">
                    About me
                </h1>
                <p className="mx-auto max-w-5xl leading-relaxed">
                    {`
                    Hello everyone, my name is Mauricio Siqueira Cavalcante Bernardo, I'm ${new Date().getFullYear() - 2004}, I've lived in Maceió, Alagoas since I was born.
                    I have been a programmer for more or less three years, I started as a backend development intern using the .NET framework and over the years in this internship I developed new skills and looked for new technologies to solve different types of problems that could happen, 
                    since then I have ventured a lot into Java using the Spring boot framework to develop robust Rest APIs, Flutter and React Native to develop some mobile apps, apps that are mentioned in my projects section, some projects in C, C++ and Python, although they are not I'm a big fan of Python, much of my career as a programmer was due to the curiosity of learning about new areas and new technologies,
                    understanding the reason for the hate towards React or why they don't like Flutter, in fact curiosity marked my story since I was a teenager when I decided to learn to program for the dream of one day becoming a game developer, and despite loving games and having participated in some game jams, I preferred to pursue a career as a backend developer and venture into the frontend with the aim of being a developer that delivers in both areas.
                    I currently work as a junior .NET software developer | React | Flutter by the company Somesoft and I have the best girlfriend in the world, if you're reading this, kisses my dear. Thank you for reading this far, may Jesus Christ bless you and accompany you on your journey, "I must trust in a sword like this, because I am not yet a master. A true warrior does not need a sword" ~ Vinland.`}
                </p>
            </section>
        </>
    );
}