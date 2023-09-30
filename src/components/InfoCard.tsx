

interface InfoCardProps {
    title: string;
    description?: string;
    isList?: boolean;
    listItems?: string[];
}

export const InfoCard: React.FC<InfoCardProps> = ({title, description, isList, listItems}) => {
  return (
    <section className="border rounded-lg p-7 bg-gray-50">
        <h1 className="text-xl font-bold mb-3">{title}</h1>
        <p className="mb-5">{description}</p>
        {isList && listItems ? (
            <ul>
                {listItems.map((item, index) => (
                    <li key={index} className="p-2">{item}</li>
                ))}
            </ul>
        ) : null}
    </section>
  )
}
