import { useState, useEffect } from "react";
import type { Fields } from "@/interfaces/types";

async function getProjects(): Promise<Fields[]> {
  if (!process.env.NEXT_PUBLIC_PROJECTS_URL)
    throw new Error("Failed to fetch projects");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PROJECTS_URL}/api/project`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  if (!Array.isArray(data)) throw new Error("Failed to fetch projects");

  return data.sort((a, b) => {
    return parseInt(b.date) - parseInt(a.date);
  });
}

const useProjects = () => {
  const [projects, setProjects] = useState<Fields[]>([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setErr(null);
    getProjects()
      .then((projects) => {
        setProjects(projects);
      })
      .catch((err) => {
        setErr(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { projects, err, loading };
};

export default useProjects;
