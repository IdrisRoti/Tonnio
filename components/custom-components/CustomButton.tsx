import { cn } from "@/lib/utils";
import { FiLoader } from "react-icons/fi";

type TCustomButton = {
    children: React.ReactNode;
    variant?: "outline" | "fill";
    size?: "small" | "large";
    className?: string;
    type?: "submit" | "reset" | "button";
    loading?: boolean;
}

export default function CustomButton(
    {
        children, 
        className, 
        variant="outline", 
        size="small", 
        type="submit",
        loading
    }:TCustomButton) {

            return (
                <button
                    disabled={loading}
                    type={type}
                    className={cn("border-2 rounded-md transition disabled:pointer-events-none",
                        variant === "outline" && "border-color hover:border-white/60",
                        variant === "fill" && "border-primary bg-primary-foreground hover:bg-primary",
                        size ===  "small" && "text-xs py-1 px-2",
                        size ===  "large" && "text-sm py-1.5 px-4",
                        className,
                    )}
                >
                    {loading ? <FiLoader className="animate-spin" /> : children}
                </button>
            )
}
