interface InfoCardProps {
  title: string;
}

export default function InfoCard({ title }: InfoCardProps) {
  return (
    <div className="card card-shadow w-fit px-[12px] text-body py-[8px] flex items-center">
      {title}
    </div>
  );
}
