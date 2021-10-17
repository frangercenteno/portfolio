import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import data from "../db/routes_navigation.json";

const { routes } = data;

const ListMenu = styled.ul<{ toggleList: boolean }>`
  display: ${({ toggleList }) => (toggleList ? "block" : "none")};
  transition: all ease 0.2s;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [toggleList, setToggleList] = useState<boolean>(false);

  return (
    <nav className="bg-secondary-default">
      <div className="container md:flex md:justify-between md:items-center py-2">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="w-1/4 md:w-1/2 cursor-pointer">
              <Image
                src="/preferente-logo-bl-wh_1.svg"
                width={280}
                height={180}
                layout="intrinsic"
                alt="Franger Dev"
              />
            </a>
          </Link>

          <button
            className="w-6 md:hidden"
            type="button"
            onClick={() => setToggleList(!toggleList)}
          >
            <span className="bg-primary-default h-px w-full block my-1"></span>
            <span className="bg-primary-default h-px w-full block my-1"></span>
            <span className="bg-primary-default h-px w-full block my-1"></span>
          </button>
        </div>
        <ListMenu
          toggleList={toggleList}
          className="md:justify-between md:items-center py-2"
        >
          {routes.map(({ name, slug, id }) => (
            <li className="my-2 md:mx-4" key={id}>
              <Link href={slug}>
                <a
                  href={slug}
                  className="text-primary-default hover:text-secondary-dark"
                >
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ListMenu>
      </div>
    </nav>
  );
};

export default NavBar;
