import Link from "next/link";

const DarkLogo = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={395.465}
    height={139.636}
    viewBox="0 0 296.599 104.727"
    className={`w-[150px] h-auto ${props.className}`}
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h296.599v104.727H0Z" />
      </clipPath>
    </defs>
    <g data-name="Layer 1">
      <g clipPath="url(#a)" data-name="Layer 2">
        <path
          className="fill-dark dark:fill-light"
          d="M54.5 23.889h-5.792v-9.525H54.5a4.763 4.763 0 1 1 0 9.525m10.32 6.859a15.93 15.93 0 0 0 6.387-12.77c0-8.811-7.144-15.955-15.956-15.955H36.329v46.845h12.305v-14.38h4.373l8.153 14.38h14.158ZM275.78 23.889h-5.791v-9.525h5.792a4.763 4.763 0 1 1 0 9.525m10.32 6.859a15.93 15.93 0 0 0 6.387-12.77c0-8.811-7.144-15.955-15.956-15.955H257.61v46.845h12.305v-14.38h4.373l8.153 14.38h14.158ZM75.307 30.174l46.846 19.074v-12.24l-28.429-11.55 28.43-11.576V1.642L75.306 20.715Z"
        />
        <path
          fill="#71cbd1"
          d="m75.307 69.252 28.43 11.576-28.43 11.55v12.24l46.846-19.074v-9.459L75.307 57.011Z"
        />
        <path
          className="fill-dark dark:fill-light"
          d="M137.828 31.88V2.023h-12.23v46.882h12.23v-.037h1.31l18.11-25.128v25.128h12.23V2.023h-10.154ZM221.784 48.868l32.417.037V36.563h-20.532v-5.82h17.419V20.33h-17.42v-5.966h20.533V2.022h-32.417Z"
        />
        <path
          fill="#71cbd1"
          d="M12.938 92.28h-.773V70.13h.773c6.117 0 11.075 4.958 11.075 11.074 0 6.117-4.958 11.075-11.075 11.075m-.114-34.497H.174v46.945h12.65c12.964 0 23.472-10.509 23.472-23.472 0-12.964-10.508-23.473-23.472-23.473M74.132 79.867h.099v-.198h-.099ZM39.446 104.628l32.376.023V92.323H51.33v-5.82h17.419V76.09H51.33v-5.966h20.532V57.782H39.446Z"
        />
        <path
          className="fill-dark dark:fill-light"
          d="M12.288 32.56h12.23V20.324H12.315V14.4H32.92V2.021H.027v18.303h12.287v12.222H0v16.321h12.288ZM198.262 30.667h7.824v5.028a13.018 13.018 0 0 1-7.93 2.68c-7.223 0-13.078-5.854-13.078-13.076s5.855-13.076 13.077-13.076c4.01 0 7.598 1.808 9.997 4.652l.053-.07 7.23-10.04C210.914 2.573 204.871 0 198.222 0c-13.987 0-25.326 11.338-25.326 25.325s11.34 25.325 25.326 25.325c8.265 0 15.603-3.961 20.226-10.086V20.329l-20.187.035Z"
        />
        <path
          fill="#71cbd1"
          d="m125.624 104.62-.026.015h12.23V92.399h-12.204Z"
        />
      </g>
    </g>
  </svg>
);

const Logo = ({ className = "", isLink }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      {isLink ? (
        <Link href="/">
          <DarkLogo className={className} />
        </Link>
      ) : (
        <DarkLogo className={className} />
      )}
    </div>
  );
};

export default Logo;
