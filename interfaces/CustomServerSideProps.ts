import { GetServerSideProps } from "next";
export declare type TAppProps<TProps = {}> = TProps;
export declare type CustomServerSideProps<TProps> = GetServerSideProps<
  TProps & {}
>;
