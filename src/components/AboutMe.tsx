import React from "react";

const AboutMe = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="bio" ref={ref} className="pb-10">
      <p>
        Hi, I&apos;m Chris, Software/ Data Engineer, and board game enthusiast.
        I began my switch into tech in August 2023, completing the Northcoders
        Software Engineering bootcamp. After finishing the course, I moved into
        a role with Northcoders and worked with a client as a frontend software
        engineer. After finishing work with the client, I moved into learning
        the fundamentals of data engineering, and cloud infrastructure (AWS,
        Microsoft Azure).
        <br /><br />
        Lorem ipsum
        <br /><br />
        Lorem ipsum
        <br /><br /><br /><br />
        Lorem ipsum
      </p>
    </div>
  );
});


AboutMe.displayName = 'AboutMe'
export default AboutMe;
