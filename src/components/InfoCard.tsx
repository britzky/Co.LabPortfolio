

interface InfoCardProps {
    title: string;
    description: string
}
export const InfoCard: React.FC<InfoCardProps> = ({title, description}) => {
  return (
    <section className="border rounded-lg p-7 bg-gray-50 dark:bg-gray-700">
        <h1 className="text-xl font-bold mb-3">{title}</h1>
        <p>{description}</p>
    </section>
  )
}
