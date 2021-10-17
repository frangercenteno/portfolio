import { FC } from "react";
import styled from "styled-components";

const ItemsExperienceWrapper = styled.div`
  @media (min-width: 758px) {
    width: 49%;
  }
`;

interface ItemsExperienceProps {
  company: string;
  titleJob: string;
  summary: string;
}

const ItemsExperience: FC<ItemsExperienceProps> = ({
  company,
  titleJob,
  summary,
}) => {
  return (
    <ItemsExperienceWrapper className="my-1 w-full lg:my-4 bg-primary-lighter">
      <div className="flex-auto">
        <h3 className="text-base text-secondary-default font-bold p-2 md:p-4">
          {company}
        </h3>
        <h4 className="text-sm text-secondary-default font-normal px-2 md:px-4">
          {titleJob}
        </h4>
        <p className="text-xs text-secondary-default font-thin leading-1 p-2 md:p-4">
          {summary}
        </p>
      </div>
    </ItemsExperienceWrapper>
  );
};

export default ItemsExperience;
