import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ShowOnScroll from '../showOnScroll';

type InfoBoxProps = {
  customClass?: string;
};

const InfoBox: React.FC<InfoBoxProps> = ({ customClass }) => {
  const infoSections = [
    {
      company: 'Gemini',
      companyUrl: 'https://www.gemini.com/',
      jobTitle: 'Analytics Engineer',
      duration: 'Mar 2020 - Jan 2022',
      bullets: [
        'Created LookML models, looks, and dashboards for product, partnership, and executive team initiatives.',
        'Designed ETL pipelines, data models, and operational reporting for Customer Service and Nifty Gateway teams.',
        'Lead data governance initiatives such as metadata tagging and masking of PII within a Snowflake data warehouse.',
      ],
    },
    {
      company: 'Citi Bike',
      companyUrl: 'https://citibikenyc.com/',
      jobTitle: 'Senior Data Analyst',
      duration: 'Aug 2018 - Mar 2020',
      bullets: [
        'Built out executive dashboards and monthly reports on rate card and compliance KPIs.',
        'Performed ad hoc analysis used to improve operational efficiency within Citi Bike’s service delivery and repair divisions in both Python and R.',
        'Programmatically identified and locked down bikes that were potentially unsafe for customers (either for a product recall or increased chance of failure) using Python and AWS Lambda.',
      ],
    },
    {
      company: 'Food On The Move',
      companyUrl: 'https://riphi.org/food-on-the-move/',
      jobTitle: 'Statistical Consultant',
      duration: 'Mar 2018 - May 2018',
      bullets: [
        'Built and implemented a shiny web application that was used by the operations team to predict, generate and download custom par inventory sheets.',
      ],
    },
  ];
  const [selected, setSelected] = useState(0);
  const selectedJob = infoSections[selected];

  return (
    <div className="s flex w-10/12 flex-col items-center justify-between rounded-[20px] bg-primaryDark p-8 dark:bg-primary lg:w-8/12 lg:flex-row lg:items-start lg:p-24">
      <div className="mb-5 flex w-full justify-center lg:mb-0 lg:w-3/12 lg:flex-col lg:items-start">
        {infoSections.map((item, index) => (
          <InfoItem
            key={index}
            section={item.company}
            isSelected={selected === index}
            onClick={() => setSelected(index)}
            layoutId="vertical"
          />
        ))}
      </div>
      <ShowOnScroll customClass="flex w-full md:w-8/12 flex-col items-center lg:items-start text-white ">
        <>
          <div className="flex flex-col items-start md:items-center lg:items-start">
            <span className="text-xl font-extrabold transition-all duration-500 md:text-2xl lg:text-3xl">
              {selectedJob.jobTitle}{' '}
              <a
                className="font-semibold text-primary dark:font-bold dark:text-primaryDark"
                href={selectedJob.companyUrl}
              >
                @ {selectedJob.company}
              </a>
            </span>
            <span className="text-xs font-thin md:text-base">
              {selectedJob.duration}
            </span>
          </div>

          <ul className="ml-0 mt-5 flex w-full list-disc flex-col gap-4 pl-0 text-xs marker:text-3xl marker:text-primary dark:marker:text-primaryDark md:w-10/12 lg:text-base">
            {selectedJob.bullets.map((item, index) => (
              <li className="ml-1" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </>
      </ShowOnScroll>
    </div>
  );
};

export default InfoBox;

type InfoItemProps = {
  section: string;
  isSelected: boolean;
  onClick: () => void;
  layoutId: string;
};

const InfoItem: React.FC<InfoItemProps> = (props: InfoItemProps) => {
  const { section, isSelected, onClick, layoutId } = props;

  return (
    <>
      <button
        className={`relative flex cursor-pointer items-center justify-start p-4 text-white ${
          isSelected ? '' : 'font-weight opacity-50'
        }`}
        onClick={onClick}
      >
        <span className="md:tex-base text-left text-xs font-bold lg:text-lg">
          {section}
        </span>
        {isSelected && (
          <motion.div
            className="absolute left-0 bottom-2 h-1 w-full rounded-lg bg-primary dark:bg-primaryDark lg:-left-3 lg:top-0 lg:h-full lg:w-1"
            layoutId={layoutId}
          />
        )}
      </button>
    </>
  );
};
