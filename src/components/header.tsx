import { Logo, ThemeToggler } from ".";

type HeaderProps = {
  logo?: { icon: string; text: string };
};

export function Header({ logo }: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      {logo && <Logo src={logo.icon}>{logo.text}</Logo>}
      <ThemeToggler className="ml-auto" />
    </header>
  );
}
