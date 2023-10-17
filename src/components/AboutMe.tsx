import React from "react";
import SecondaryTitle from "./typography/SecondaryTitle";

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="bio" ref={ref} className="pb-10 border-b-2">
      <SecondaryTitle style={'text-center'}>About Me</SecondaryTitle>
      <p className="py-10">
        Hi, I&apos;m Chris, Software/ Data Engineer, and board game enthusiast.
        I began my switch into tech in August 2023, completing the Northcoders
        Software Engineering bootcamp. After finishing the course, I moved into
        a role with Northcoders and worked with a client as a frontend software
        engineer. After finishing work with the client, I moved into learning
        the fundamentals of data engineering, and cloud infrastructure (AWS,
        Microsoft Azure).
        <br /><br />
        Outside of work, you'll usually find me playing board games, bouldering, or running table top role-playing games.
      </p>
    </div>
  );
});


AboutMe.displayName = 'AboutMe'
export default AboutMe;
