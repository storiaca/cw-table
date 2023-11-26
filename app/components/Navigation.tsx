import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/roles", label: "Roles" },
  { href: "/users", label: "Users" },
];
const Navigation = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", alignItems: "center" }}>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
