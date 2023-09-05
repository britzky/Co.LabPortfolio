
interface ProjectCardProps {
    title: string;
    image: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, image, description}) => {
  return (
    <section>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div>
            <img src={image} alt="Project image" />
        </div>
    </section>
  )
}
