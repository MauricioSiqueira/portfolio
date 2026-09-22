export function Contact(){
    return (
        <>
            <section id="contact" className="items-center justify-center">
                <h1 className="text-4xl font-bold text-center">
                    Contact me
                </h1>
                <p className="text-lg">
                    You can contact me through these channels
                </p>
                <ul className="list-disc list-inside">
                        <li>Email: <a href="mailto:Mauricegdev@gmail.com" className="text-blue-500 hover:underline">Mauricegdev@gmail.com</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/mauricescb/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://www.linkedin.com/in/mauricescb/</a></li>
                        <li>GitHub: <a href="https://github.com/mauriciosiqueira" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/mauriciosiqueira</a></li>
                </ul>
            </section>
        </>
    );
}