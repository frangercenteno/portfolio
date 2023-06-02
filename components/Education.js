import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import DetailMotion from "./DetailMotion";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <DetailMotion ref={ref}>
      <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
        {type}
      </h3>
      <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
        {time} | {place}
      </span>
      <p className="font-medium w-full md:text-sm">{info}</p>
    </DetailMotion>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0  w-[4px] h-full origin-top bg-dark dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={
              "Bachelor's Degree in Administration with a major in Computer Science"
            }
            time={"2018-2022"}
            place={"Simon Bolivar Experimental University"}
            info={
              "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering."
            }
          />
          <Details
            type={"Java 8 Fundamentals"}
            time={"2019"}
            place={"Cibertec"}
            info={
              "Solid foundational knowledge of Java 8 was obtained. Topics covered include: Object Oriented Programming, Collections, Generics, Lambda Expressions, Functional Interfaces, Streams, Exceptions, and more."
            }
          />
          <Details
            type={"Angular 8"}
            time={"2006-2011"}
            place={"U.E.D. Juan Pablo II"}
            info={
              "Solid foundational knowledge of Angular 8 was obtained. Topics covered include: Typescript, RXjs, Components, and more."
            }
          />
          <Details
            type={"Financial Administration Technician"}
            time={"2006-2011"}
            place={"U.E.D. Juan Pablo II"}
            info={
              "Relevant experience as a Financial Administration in companies specializing in import and export of products."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
