import { ReactNode } from "react";

export const Container = ({
  className,
  children,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`max-w-[1440px] mx-auto px-6 lg:px-20 3xl:px-0 ${className}`}
    >
     {children}
    </section>
  );
};
