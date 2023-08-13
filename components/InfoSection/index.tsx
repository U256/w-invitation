export interface InfoSectionProps {
  data: string[];
}

export default function InfoSection({ data }: InfoSectionProps) {
  return (
    <div>
      {data.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </div>
  );
}
