import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { routes } from "../constants";

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
      <div className="container py-2">
        <div className="max-w-3xl w-full m-auto md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center ">
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
                    className="text-primary-default font-bold hover:text-secondary-dark"
                  >
                    {name}
                  </a>
                </Link>
              </li>
            ))}
          </ListMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
