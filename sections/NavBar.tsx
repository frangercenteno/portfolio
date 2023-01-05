import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";
import clsx from "clsx";

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

  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="h-12 sm:h-20 flex items-center relative">
      <div className="w-full md:flex md:justify-between md:items-center">
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
          className="md:justify-end md:items-center py-2 absolute left-0 right-0 sm:relative bg-secondary-default"
        >
          {routes.map(({ name, slug, id }) => (
            <li
              className={clsx(
                "md:ml-1 text-primary-default rounded hover:text-secondary-lighter hover:bg-primary-dark cursor-pointer pl-1",
                pathname !== "/" &&
                  pathname === slug &&
                  "md:text-secondary-lighter md:bg-primary-dark"
              )}
              key={id}
            >
              <Link
                href={slug}
                className="font-bold h-full w-full block py-2 md:px-4"
              >
                {name}
              </Link>
            </li>
          ))}
        </ListMenu>
      </div>
    </nav>
  );
};

export default NavBar;
