import type { ReactNode } from "react";

type JobProps = {
  title: string;
  bgColor: string;
  icon: ReactNode;
};

const Job: React.FC<JobProps> = ({ title, icon, bgColor }: JobProps) => {
  return (
    <div
      className={`${bgColor} flex flex-col items-center justify-center p-4 rounded-lg `}
    >
      {icon}
      <p className="pt-4 ">{title}</p>
    </div>
  );
};
export default Job;
