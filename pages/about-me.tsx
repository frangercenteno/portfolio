import Image from "next/image";

import Layout from "@/components/Layout";
import { SKILLS } from "../constants";

const AboutMe = () => {
  return (
    <Layout pageTitle="Sobre mí">
      <div className="pt-20">
        <h1 className="text-primary-default text-3xl md:text-4xl font-bold leading-none">
          Sobre mí
        </h1>
      </div>
      <p className="text-secondary-lighter text-1xl mt-2">
        Soy un desarrollador web que conoce par de cosas acerca de Javascript y
        llevo unos años creando con él. Trabajo profesionalmente en el Front End
        porque me gusta crear productos que otros puedan ver, pero siempre me
        gusta hacer y experimentar cosas en el Back End, pienso que con ambos
        caminos se crean grandes cosas.
      </p>
      <p className="text-secondary-lighter text-1xl  mt-5">
        Me apasiona el mundo digital en general, no me quedo solo con saber
        Javascript, CSS y HTML o los frameworks y librerías que los acompañan,
        por eso estoy en constante aprendizaje sobre otras tecnologías o
        herramientas como Blockchain, Rust o hasta conocer Product Management.
      </p>
      <p className="text-secondary-lighter text-1xl  mt-5">
        En la siguiente lista encontraras todas las herramientas que he usado o
        uso actualmente:
      </p>

      <div className="py-16">
        {SKILLS.map((skill) => (
          <div className="my-4" key={skill.id}>
            <h2 className="text-2xl font-bold">{skill.title}</h2>
            <div className="flex items-center flex-wrap mt-5">
              {skill.skills.map((item, i) => (
                <div
                  key={i.toString()}
                  className="bg-secondary-lighter p-4 flex justify-center items-center relative rounded mr-8 mb-8"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="intrinsic"
                    width={64}
                    height={64}
                    loader={({ src }) => `${src}?auto=format&q=80`}
                    blurDataURL={`${item.imageUrl}?base64`}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutMe;
