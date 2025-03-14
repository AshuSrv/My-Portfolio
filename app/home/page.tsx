"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { HeroSection } from "@/app/components/HeroSection";
import { Experience } from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Achievements from "@/app/components/Achievements";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </motion.div>
      <Footer />
    </>
  );
}
