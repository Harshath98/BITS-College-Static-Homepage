import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "./about/page"
import Programs from "./programs/page"
import Admissions from "./admissions/page"
import Campus from "./Campus/page"
import Footer from "../components/Footer"
import Placements from "./placements/page"
import TopBar from "../components/TopBar"
import VisionMission from "../components/VisionMission"
import ApplyPage from "./apply/page"
import Affiliations from "../components/affiliations"
export default function Home() {
  return (
    <>
    <TopBar/>
      <Navbar />
      <Hero />
      <About />
      <VisionMission/>
      <Programs />
      <Placements/>
      <Campus/>
      <Admissions/>
      <Affiliations/>
      <Footer/>

    </>
  )
}
