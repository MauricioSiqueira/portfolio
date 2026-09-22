import { Card } from "../ui/Card";  
import { cards } from "../../data/Cards";

export function Projects() {
    return (
        <>
            <section id="projects" className="min-h-screen mt-50">    
                <h1 className="text-center m-10 text-4xl font-bold">
                    My Projects
                </h1>
                <div className="flex flex-wrap gap-4 items-center justify-center">
                    {cards.map((card) => (
                        <Card title={card.title} description={card.description} imageUrl={card.imageUrl} onClick={() => window.open(card.urlRepo)}/>
                    ))}
                </div>
            </section>
        </>
    );
}