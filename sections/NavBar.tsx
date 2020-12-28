import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import data from '../db/routes_navigation.json';

console.log(data)

const { routes } = data;

const ListMenu = styled.ul<{ toggleList: boolean }>`
  display: ${({ toggleList }) => toggleList ? 'block' : 'none'};
  transition: all ease .2s;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavBar = () => {

  const [toggleList, setToggleList] = useState<boolean>(false);

  return (
    <nav className='bg-secondary'>
      <div className='container md:flex md:justify-between md:items-center py-2'>
        <div className="flex justify-between items-center">
        <Link href='/'>
          <img
            src='/preferente-logo-bl-wh_1.svg'
            alt='Franger Dev'
            className='w-1/4 md:w-1/2 cursor-pointer'
          />
          </Link>

          <button className="w-6 md:hidden" type="button" onClick={() => setToggleList(!toggleList)}>
            <span className="bg-primary h-px w-full block my-1"></span>
            <span className="bg-primary h-px w-full block my-1"></span>
            <span className="bg-primary h-px w-full block my-1"></span>
          </button>

        </div>
        <ListMenu toggleList={toggleList} className='md:justify-between md:items-center py-2'>
        {routes.map(({ name, slug, id }) => (
          <li className="my-2 md:mx-4" key={id}>
            <Link href={slug}>
              <a className='text-primary hover:text-secondary-dark'>{name}</a>
            </Link>
          </li>
          ))}
        </ListMenu>
      </div>
    </nav>
  );
};

export default NavBar;
