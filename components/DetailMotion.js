import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const DetailMotion = ({ children, ref }) => {
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {children}
      </motion.div>
    </li>
  );
};

export default DetailMotion;
