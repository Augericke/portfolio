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
    <div className="flex w-8/12 items-start justify-between rounded-[20px] bg-primaryDark p-6 dark:bg-primary">
      <div className="flex w-2/12 flex-col items-start">
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
      <ShowOnScroll customClass="flex w-9/12 flex-col items-start text-white">
        <>
          <div className="flex flex-col items-start">
            <span className="font-extrabold lg:text-2xl">
              {selectedJob.jobTitle}{' '}
              <span className="font-semibold text-primary dark:font-bold dark:text-primaryDark">
                @ {selectedJob.company}
              </span>
            </span>
            <span className="text-base font-thin">{selectedJob.duration}</span>
          </div>

          <ul className="mt-5 flex w-10/12 list-disc  flex-col gap-4  pl-6  marker:text-3xl marker:text-primary dark:marker:text-primaryDark">
            {selectedJob.bullets.map((item, index) => (
              <li key={index}>{item}</li>
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
        className={`relative flex cursor-pointer justify-start p-4 text-white ${
          isSelected ? '' : 'font-weight opacity-50'
        }`}
        onClick={onClick}
      >
        <span className="text-left font-bold lg:text-lg">{section}</span>
        {isSelected && (
          <motion.div
            className="absolute -left-3 top-0 h-full w-1 rounded-lg bg-primary dark:bg-primaryDark"
            layoutId={layoutId}
          />
        )}
      </button>
    </>
  );
};
