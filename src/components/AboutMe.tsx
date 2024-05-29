import React from "react";
import SecondaryTitle from "./typography/SecondaryTitle";

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="bio" ref={ref} className="pb-10 px-5 border-b-2">
      <SecondaryTitle style={"text-center pt-10 lg:pt-0"}>
        About Me
      </SecondaryTitle>
      <p className="py-10 text-lg">
        Hi, I&apos;m Chris, Software/ Data Engineer, and board game enthusiast.
        I began my switch into tech in August 2023, completing the Northcoders
        Software Engineering bootcamp. After finishing the course, I moved into
        a role with Northcoders as a Fullstack Software Engineer. Currently, I
        am focused on building event driven architecture using AWS topics and
        queues, lambdas, and Terraform for deployment.
        <br />
        <br />
        <br />
        Outside of work, you&apos;ll usually find me playing board games (or
        teaching them to new players) and table-top roleplaying games.
      </p>
    </div>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
