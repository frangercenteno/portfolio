import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import DetailMotion from "./DetailMotion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <DetailMotion ref={ref}>
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {position}&nbsp;
        <a
          href={companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary capitalize dark:text-primaryDark"
        >
          &nbsp;{company}
        </a>
      </h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {address}
      </span>
      <p className="font-medium w-full md:text-sm">{work}</p>
    </DetailMotion>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0  w-[4px] h-full origin-top bg-dark dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Front End Developer"}
            company={"Crehana"}
            companyLink={"https://crehana.com"}
            time={"2020-2022"}
            address={"Lima, PE"}
            work={
              "Collaborated with a multidisciplinary team in the Growth team making improvements to the main landings of the company, in the authentication, ecommerce and blog pages. Also, I developed A/B tests to test new functionalities within the platform. My non-product responsibilities included contributions to our design system."
            }
          />
          <Details
            position={"Web Developer"}
            company={"Nodos Digital"}
            companyLink={"https://nodos.pe"}
            time={"2019-2020"}
            address={"Lima, PE"}
            work={
              "Worked with a multidisciplinary team in projects for important clients such as Pinturas Vencedor, BBVA, Real Plaza, Brein (Breca Group), Clínica AVIVA, Monumental Music Callao making landing pages, forms, and CMS"
            }
          />
          <Details
            position={"Junior Full Stack Developer"}
            company={"Optima Marketing Systems"}
            companyLink={"https://www.optimasystems.es/"}
            time={"2017-2018"}
            address={"Lima, PE - Madrid, ES"}
            work={
              "Junior Full Stack Developer in the OPTIMA CMR project, the main project of the company in which he bases his income and in which user data is handled"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
