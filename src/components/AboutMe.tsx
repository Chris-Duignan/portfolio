import React from "react";
import SecondaryTitle from "./typography/SecondaryTitle";

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="bio" ref={ref} className="pb-10 px-5 border-b-2">
      <SecondaryTitle style={"text-center pt-10 lg:pt-0"}>
        About Me
      </SecondaryTitle>
      <p className="py-10 text-lg">
        Hi, I&apos;m Chris, Software Engineer, and board game enthusiast. I
        began my switch into tech in August 2023, completing the Northcoders
        Software Engineering bootcamp. After finishing the course, I moved into
        a role with Northcoders as a Fullstack Software Engineer contracting out
        to clients including Rolls Royce and DA Languages.
        <br />
        <br />
        <br />
        Throughout my career so far, I've had the chance to work on a variety of
        projects with all sorts of different tech. Some highlights include:
        <ul>
          <br />
          <li>
            - Building a React Native app for high priority, public service work
          </li>
          <li>
            - Developing microservices using AWS Lambdas, SNS, and SQS and
            Terraform
          </li>
          <li>
            - Implementing the ETL pattern, build a data pipeline to harvest
            tech bootcamp data and deploy to Azure using CI/CD to feed a PowerBI
            dashboard
          </li>
        </ul>
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
