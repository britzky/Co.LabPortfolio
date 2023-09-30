
interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    live: string;
    github: string;
    reverse?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, image, description, live, github, reverse}) => {
  return (
    <section className="py-5">
        <div className={`py-3 flex flex-col md:flex-row gap-4 md:gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="order-first md:order-none">
                <img src={image} alt="Project image" className="rounded-xl sm:max-w-lg" />
            </div>
            <div className="max-w-md">
                <h1 className="text-xl underline py-3">{title}:</h1>
                <p>{description}</p>
                <div className="flex gap-2 justify-around mt-4">
                    <a 
                        href={live}
                        rel="noreferrer"
                        target="_blank"
                        className="bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded"
                    >
                        See Live
                    </a>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        className="bg-amber-400 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
                        href={github}
                    >
                        Source Code
                    </a>
                </div>
            </div>                    
        </div>
    </section>
  )
}
