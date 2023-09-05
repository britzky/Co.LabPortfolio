
interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
    live: string;
    github: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, image, description, live, github}) => {
  return (
    <section className="border rounded-md p-3">
        <div className="py-3">
            <h1 className="text-xl underline py-3">{title}:</h1>
            <p>{description}</p>
        </div>
        <div>
            <img src={image} alt="Project image" />
        </div>
        <div className="flex justify-around mt-5">
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
    </section>
  )
}
