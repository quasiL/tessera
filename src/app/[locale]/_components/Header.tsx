import NavBar from "./NavBar";

export default function Header() {
  const flexBetween = "flex items-center justify-between";

  return (
    <header className="container mx-auto pt-6 pb-4">
      <NavBar />
    </header>
  );
}
