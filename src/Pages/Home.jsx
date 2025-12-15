import Numbers from "../Components/Numbers";
import MissionSection from "../Components/MissionSection";
import AccordionSection from "../Components/AccordionItem";
import HeroSection from "../Components/HeroSection";
import ContactUs from "../Components/ContactUs";
import ParticlesBackground from "../Components/ParticlesBackground";
import Analyze from "../Components/Analyze";

const Home = () => {
  // const data = useLoaderData();

  return (
    // creates a stacking context so z-[-1] works reliably
    <div className="relative isolate min-h-screen">
      {/* Background: fixed to viewport, behind all content */}
      <ParticlesBackground color="#26A641" density={100} zIndex={-1} />

      {/* Page content sits above */}
      <div className="relative z-10">
        <HeroSection />
        {/* <Banner /> */}
        <Analyze></Analyze>

        {/* <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <DoctorsContainer doctorsDetails={data} />
        </Suspense> */}

        <MissionSection />
        <AccordionSection />
        <Numbers />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
