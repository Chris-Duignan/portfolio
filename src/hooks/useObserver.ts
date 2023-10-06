import { useState, useEffect, MutableRefObject } from "react";

interface SectionRefs {
  bio: MutableRefObject<null>;
  tech: MutableRefObject<null>;
  projects: MutableRefObject<null>;
}

const useObserver = (sectionRefs: SectionRefs) => {
  const [activeLink, setActiveLink] = useState("bio");
  const [hasSetActiveLink, setHasSetActiveLink] = useState(false);

  useEffect(() => {
    const scrollRoot = document.querySelector("#scrollArea");

    const observerOptions = {
      root: scrollRoot,
      rootMargin: "-178px 0px -50% 0px",
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasSetActiveLink) {
          setActiveLink(entry.target.id);
          setHasSetActiveLink(true); // Set the state to true once the active link is set
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
  }, [hasSetActiveLink, sectionRefs]);

  return activeLink;
};

export default useObserver;
