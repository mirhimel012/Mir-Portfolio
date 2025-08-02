import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const navList = (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center text-base font-semibold text-gray-700">
      {navItems.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            className="hover:text-blue-600 transition-colors duration-200 hover:underline underline-offset-4"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-md">
      <Navbar className="px-4 lg:px-12 py-4 rounded-none">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Typography
            as="a"
            href="#"
            className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight"
          >
            <span className="text-blue-500">H</span>IMEL{" "}
            <span className="text-blue-500">M</span>IR
            <span className="inline text-sm font-semibold text-red-500 ml-3">
              ❤️ for <a target="_blank" href="https://gazamartyrs.org/">PALESTINE</a> 🍉
            </span>
          </Typography>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navList}
            <a href="#contact">
              <Button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800 text-sm">
                Hire Me
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>

        {/* Mobile Nav */}
        <MobileNav open={openNav} className="mt-4">
          <div className="flex flex-col gap-4">{navList}</div>
          <a href="#contact" className="mt-4">
            <Button fullWidth className="bg-blue-600 text-white hover:bg-blue-800 text-sm">
              Hire Me
            </Button>
          </a>
        </MobileNav>
      </Navbar>
    </div>
  );
}
