"use client";
import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });
import { Dropdown, Navbar } from "flowbite-react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Logo from "../../../../public/logosinFondo.png";
import Image from "next/image";
function Header() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className={[opensans, " bg-orange-100 px-7 text-xl "]}
    >
      <Navbar.Brand href="https://github.com/BryanTevillo/cake-code.git">
        <Image src={Logo} className="size-28" alt="cake-code Logo" />
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="mr-10 text-2xl text-black font-bold">
          Inicio
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className="mr-10 text-2xl text-black font-bold"
        >
          Nosotros
        </Navbar.Link>

        <Navbar.Link
          href="/contact"
          className="mr-10 text-2xl text-black font-bold"
        >
          Contacto
        </Navbar.Link>

        <div
          className="text-2xl font-bold text-black"
          style={{ marginRight: 40 }}
        >
          <Dropdown
            arrowIcon={true}
            inline
            label={"Categorias"}
            className="bg-orange-100 hover:"
          >
            <Dropdown.Header>
              <Navbar.Link
                style={{ fontSize: 18 }}
                href="/Categorias/CreaTuPastel"
                className="block text-sm"
              >
                Crea tu pastel
              </Navbar.Link>
            </Dropdown.Header>

            <Navbar.Link href="/Categorias/Pastel">
              <Dropdown.Item style={{ fontSize: 18 }}>Pasteles</Dropdown.Item>
            </Navbar.Link>
            <Navbar.Link href="/Categorias/Galletas">
              <Dropdown.Item style={{ fontSize: 18 }}>Galletas</Dropdown.Item>
            </Navbar.Link>
            <Navbar.Link href="/Categorias/cupcakes">
              <Dropdown.Item style={{ fontSize: 18 }}>Cupcakes</Dropdown.Item>
            </Navbar.Link>
            <Dropdown.Divider />
          </Dropdown>
        </div>

        <Navbar.Link href="/navbars">
          <ShoppingCartOutlinedIcon
            className="text-black"
            style={{ fontSize: 36 }}
          />
        </Navbar.Link>
        <Navbar.Link href="/Login">
          <PersonOutlineOutlinedIcon
            className="text-black"
            style={{ fontSize: 36 }}
          />
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          <SearchOutlinedIcon
            className=" mr-20 text-black"
            style={{ fontSize: 36 }}
          />
        </Navbar.Link>

        <Navbar.Toggle />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
