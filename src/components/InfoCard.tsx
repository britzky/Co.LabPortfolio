

interface InfoCardProps {
    title: string;
    description: string
}
export const InfoCard: React.FC<InfoCardProps> = ({title, description}) => {
  return (
    <section>
        <h1 className="text-xl font-bold">{title}</h1>
        <p>{description}</p>
    </section>
  )
}
