import AboutMe from '@/components/AboutMe';
import './globals.css'
import Banner from "@/components/Banner";
import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <TechStack></TechStack>
    </main>
  )
}
