import React from "react";
import formatTitle from "../utils/formatTitle";
import Tag from "./Tag";
import SecondaryTitle from "./typography/SecondaryTitle";
import TertiaryTitle from "./typography/TertiaryTitle";

interface Tech {
  languages: string[];
  frameworks: string[];
  back_end: string[];
  data_engineering: string[];
  cloud: string[];
  [key: string]: string[];
}

const TechStack = React.forwardRef<HTMLDivElement>((props, ref) => {
  const tech: Tech = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Vue", "Next.js", "React Native", "Flutter"],
    back_end: ["Express.js", "PSQL"],
    data_engineering: ["Pandas", "scraPy", "spaCy"],
    cloud: ["AWS", "Azure", "Terraform"],
    CICD: ["Github Actions", "Husky", "ESLint", "Serverless", "Docker"],
  };

  const style =
    "flex flex-col lg:flex-row justify-center items-center w-full py-5";

  return (
    <div id="tech" className="px-5 border-b-2" ref={ref}>
      <SecondaryTitle style={"text-center pt-10"}>Tech Stack</SecondaryTitle>
      {Object.keys(tech).map((title) => {
        return (
          <div key={title} className="flex flex-col items-center">
            <div className={`${style}`}>
              <TertiaryTitle
                style={"inline-block w-full lg:w-3/12 text-center lg:text-left"}
              >
                {formatTitle(title)}
              </TertiaryTitle>
              <div className="flex items-center justify-center flex-wrap w-full lg:w-9/12 lg:justify-normal">
                {tech[title].map((item) => {
                  return <Tag key={item}>{item}</Tag>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

TechStack.displayName = "TechStack";
export default TechStack;
