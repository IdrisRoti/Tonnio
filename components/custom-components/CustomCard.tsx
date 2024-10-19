import { cn } from "@/lib/utils";

type TCustomCard = {
    children: React.ReactNode;
    className?: String;
}

export default function CustomCard({children, className}: TCustomCard) {
  return (
    <div className={cn("border bg-background shadow", className)}>
        {children}
    </div>
  )
}
