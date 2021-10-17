import { FC } from 'react';

type ItemsExperienceProps = {
  company: string;
  titleJob: string;
  summary: string;
};

const ItemsExperience: FC<ItemsExperienceProps> = ({
  company,
  titleJob,
  summary,
}) => {
  return (
    <div className='flex mb-16'>
      <div className='flex-1'>
        <div className='bg-primary-default w-8 h-8 rounded-full'></div>
      </div>
      <div className='flex-auto pl-2'>
        <h3 className='text-base text-secondary-primary font-bold leading-1 border-b border-secondary-dark'>
          {company}
        </h3>
        <h4 className='text-sm text-secondary-primary font-normal'>
          {titleJob}
        </h4>
        <p className='text-xs text-secondary-primary font-thin leading-1 hidden md:block'>
          {summary}
        </p>
      </div>
    </div>
  );
};

export default ItemsExperience;
