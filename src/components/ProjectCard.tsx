
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
        <div className="py-3 flex gap-12">
            {reverse && 
                <div className="flex flex-col gap-2">
                    <img src={image} alt="Project image" className="rounded-xl max-w-lg" />
                    <div className="flex justify-around">
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
            }
            <div className="max-w-md">
                <h1 className="text-xl underline py-3">{title}:</h1>
                <p>{description}</p>
            </div>           
            {!reverse &&
                <div className="flex flex-col gap-2">
                    <img src={image} alt="Project image" className="rounded-xl max-w-lg" />
                    <div className="flex justify-around">
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
            }
            
        </div>
    </section>
  )
}
