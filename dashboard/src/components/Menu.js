import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem , Button , Link } from "@nextui-org/react";

import { AcmeLogo } from "./AcmeLogo.js";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Dashboard",
    "Orders",
    "Holdings",
    "Positions",
    "Funds",
    "Apps",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-lg">
      {/* Left side: Logo and menu toggle for small screens */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">KITE</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Middle: Links for larger screens */}
      <NavbarContent className=" sm:hidden lg:flex gap-4 text-white" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/" >
            Dashboard
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/orders" color="foreground">
            Orders
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/holdings">
            Holdings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/positions">
            Positions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/funds">
            Funds
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/watch">
            Watch
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/apps">
            Apps
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right side: User and login actions */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            User
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Navbar menu for smaller screens */}
      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
