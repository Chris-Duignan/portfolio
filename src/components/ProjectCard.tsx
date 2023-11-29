import type { Fields } from "@/interfaces/types";
import Image from "next/image";
import React from "react";
import githubIcon from "../../public/github-mark-white.svg";
import TertiaryTitle from "./typography/TertiaryTitle";

interface ProjectCardProps {
  record: Fields;
  isLast: boolean;
}

const ProjectCard = ({
  record,
  isLast,
}: ProjectCardProps) => {


  const style = `card py-10 w-full flex`;

  return (
    <div className="flex flex-col items-center">
      <div className={style}>
        {/* {record.images ? (
          <Image
            src={record.images[0].thumbnails.large.url}
            alt=""
            height={record.images[0].thumbnails.large.height}
            width={record.images[0].thumbnails.large.width}
            style={{
              width: "35%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/1x1-b92e297f.png"
          />
        ) : null} */}
        <div className="px-5 flex flex-col">
          <TertiaryTitle style="pb-5">{record.name}</TertiaryTitle>
          <p>{record.description}</p>
          <div className="flex justify-between items-end grow">
              <p className={`text-left ${!record.hosted ? 'invisible' : ''}`}>
                See it at:{" "}
                <a
                  className="underline"
                  href={record.hosted ?? ''}
                  target="_blank"
                >
                  {record.hosted ?? ''}
                </a>{" "}
              </p>
            {record.github ? (
              <a href={record.github} target="_blank">
                <Image
                  src={githubIcon}
                  alt=""
                  style={{
                    margin: "5px",
                    width: "30px",
                    height: "auto",
                  }}
                ></Image>
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {!isLast ? <hr className="w-full" /> : null}
    </div>
  );
};

export default ProjectCard;
