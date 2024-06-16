import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

export const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center 
        gap-3 border rounded-full ${variant} ${full && "w-full"}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="text-[1rem] font-[700] whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};
