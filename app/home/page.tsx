"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { HeroSection } from "@/app/components/HeroSection";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Skills } from "@/app/components/Skills";
import { Achievements } from "@/app/components/Achievements";
import { Contact } from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// import { Education } from "../components/Education";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ashutosh Shrivastava | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Ashutosh Shrivastava, Software Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bg-gray-950">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <SectionWrapper>
            <Experience />
          </SectionWrapper>
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
          <SectionWrapper>
            <Skills />
          </SectionWrapper>
          <SectionWrapper>
            <Achievements />
          </SectionWrapper>
          {/* <SectionWrapper>
            <Education />
          </SectionWrapper> */}
          <SectionWrapper>
            <Contact />
          </SectionWrapper>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

const SectionWrapper = ({ children }: { children: ReactNode }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
