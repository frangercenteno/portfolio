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
    <nav className="bg-secondary-default h-12 sm:h-20 flex items-center relative">
      <div className="container">
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
            className="md:justify-end md:items-center py-2 absolute left-0 right-0 sm:relative container bg-secondary-default"
          >
            {routes.map(({ name, slug, id }) => (
              <li
                className="py-2 md:px-4 text-primary-default rounded hover:text-secondary-lighter hover:bg-primary-dark cursor-pointer"
                key={id}
              >
                <Link href={slug}>
                  <a href={slug} className="font-bold">
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
