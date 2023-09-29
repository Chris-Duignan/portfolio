import AboutMe from '@/components/AboutMe';
import './globals.css'
import Banner from "@/components/Banner";
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <TechStack></TechStack>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </main>
  )
}
