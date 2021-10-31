import { FC } from "react";
import styled from "styled-components";

import { GitHubData } from "@/interfaces/GitHub";
import LinkViewMore from "@/components/LinkViewMore";

const ItemsProjectWrapper = styled.div`
  @media (min-width: 758px) {
    width: 49%;
  }
`;

interface ItemsProjectProps {
  data: GitHubData;
}

const ItemsProject: FC<ItemsProjectProps> = ({
  data: { name, pushed_at, description, topics, language, html_url },
}) => {
  const fullYear = new Date(pushed_at).getFullYear();
  return (
    <ItemsProjectWrapper className="my-2 sm:my-1 w-full lg:my-4 p-2 md:p-4 rounded border-2 border-solid border-primary-default">
      <div className="flex-auto">
        <h3 className="text-base text-secondary-lighter font-bold mb-2">
          {name}{" "}
          {language ? <span className="font-thin">[{language}]</span> : null}
        </h3>
        <h4 className="text-sm text-secondary-lighter font-normal mb-2">
          {fullYear}
        </h4>
        <p className="text-xs text-secondary-lighter font-thin leading-1 mb-4">
          {description}
        </p>
        <div className="flex items-center flex-wrap">
          {topics?.map((topic, i) => (
            <div
              className="p-1 text-primary-dark bg-secondary-dark mr-2 mb-1"
              key={i.toString()}
            >
              {topic}
            </div>
          ))}
        </div>
        <div className="flex justify-start">
          <LinkViewMore url={html_url} name="Ver codigo" />
        </div>
      </div>
    </ItemsProjectWrapper>
  );
};

export default ItemsProject;
