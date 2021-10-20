import { FC } from "react";
import styled from "styled-components";
import { Project } from "../types";

const ItemsProjectWrapper = styled.div`
  @media (min-width: 758px) {
    width: 49%;
  }
`;

interface ItemsProjectProps extends Project {}

const ItemsProject: FC<ItemsProjectProps> = ({ name, age, description }) => {
  return (
    <ItemsProjectWrapper className="my-2 sm:my-1 w-full lg:my-4  rounded border-2 border-solid border-primary-default">
      <div className="flex-auto">
        <h3 className="text-base text-secondary-lighter font-bold p-2 md:p-4">
          {name}
        </h3>
        <h4 className="text-sm text-secondary-lighter font-normal px-2 md:px-4">
          {age}
        </h4>
        <p className="text-xs text-secondary-lighter font-thin leading-1 p-2 md:p-4">
          {description}
        </p>
      </div>
    </ItemsProjectWrapper>
  );
};

export default ItemsProject;
