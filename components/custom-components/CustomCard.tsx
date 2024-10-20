import { cn } from "@/lib/utils";

type TCustomCard = {
    children: React.ReactNode;
    className?: String;
}

export default function CustomCard({children, className}: TCustomCard) {
  return (
    <div className={cn("border-2 border-color bg-[#202020] shadow", className)}>
        {children}
    </div>
  )
}
