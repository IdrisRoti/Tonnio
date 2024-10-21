import { cn } from "@/lib/utils";

type TCustomCard = {
    children: React.ReactNode;
    className?: string;
}

export default function CustomCard({children, className}: TCustomCard) {
  return (
    <div className={cn("border-2 border-color bg-white dark:bg-[#202020]", className)}>
        {children}
    </div>
  )
}
