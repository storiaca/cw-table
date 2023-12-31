"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AppBar, Box, CssBaseline, Typography, Toolbar } from "@mui/material";
const links = [
  { href: "/", label: "Home" },
  { href: "/roles", label: "Roles" },
  { href: "/users", label: "Users" },
];
const Navigation = () => {
  const pathname = usePathname();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CW Table
          </Typography>
          <Box>
            <ul className="nav-wrap">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${pathname === link.href ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
