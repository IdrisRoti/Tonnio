import ThemeToggler from "@/components/ThemeToggler";

export default function Home() {
  return (
    <div className="h-screen bg-background">
      Landing page
      <div className="">
        <ThemeToggler />
      </div>
    </div>
  );
}
