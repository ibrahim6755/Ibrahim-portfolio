import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";
import { SkillCardData } from "@/data";
import ProjectCard from "@/components/ProjectCard";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  const data = SkillCardData;
  return (
    <>
      <Navbar />
      {/* <MobileNav /> */}
      <Hero />

      {/* //About section */}
      <section id="about">
        <div className="container my-6">
          <h1 className="my-8 ms-8 md:ms-0 lg:ms-0 text-4xl  font-bold">
            About Me
          </h1>
          <p className="ms-6 text-white p-2 md:p-0 lg:p-0">
            I am Ibrahim Ghani, a proficient Full Stack Developer with a proven
            track record of excellence. I graduated with honors in HSSC with a
            specialization in ICS from Punjab College, demonstrating a strong
            foundation in both computer science and mathematics. Over the past
            year, I have honed my skills and expertise in developing dynamic,
            scalable web applications. My portfolio showcases a diverse range of
            projects, each characterized by innovative solutions, robust
            architecture, and user-friendly interfaces. I am well-versed in an
            array of technologies and frameworks, ensuring that I am always at
            the forefront of industry trends. My commitment to continuous
            learning and staying updated with the latest advancements in the
            field has been instrumental in consistently delivering high-quality
            results. I thrive in collaborative environments, leveraging my
            strong communication skills to effectively work with
            cross-functional teams, ensuring seamless project delivery. With a
            passion for creating exceptional user experiences and a dedication
            to crafting clean, efficient code, I am poised to take on new
            challenges and contribute to the success of innovative projects.
            Feel free to let me know if there's anything else you'd like to add
            or modify!
          </p>
        </div>
      </section>

      {/* //Skills section */}
      <section>
        <div className="container">
          <h1 className="my-8 text-4xl text-center  font-bold">My Skills</h1>
          <SkillCard data={data} />
        </div>
      </section>

      {/* //project Section */}

      <section id="projects">
        <div className="container">
          <h1 className="my-8 text-4xl text-center  font-bold">Projects</h1>
          <ProjectCard />
        </div>
      </section>

      {/* //contact section */}
      <section id="contact">
        <div className="container">
          <h1 className="my-8 text-4xl text-center  font-bold">Contact Me</h1>
          <ContactMe />
        </div>
      </section>
    </>
  );
}
