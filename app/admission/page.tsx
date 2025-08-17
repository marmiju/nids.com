import React from "react";
import SingleCardWithTitle from "../components/singCardwithTitle&icon/SingleCartTitle";
import { FaComputer, FaInternetExplorer, FaPeopleRoof, FaRankingStar } from "react-icons/fa6";
import { IoLibrarySharp } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { BiCode } from "react-icons/bi";
import { GrMore } from "react-icons/gr";
import fees from '@/public/fees.png'
import Image from "next/image";


export default function AdmissionPage() {
  return (
    <div className="px-4 md:px-16 py-10 text-text max-w-[85%] mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Admission Open</h1>
        <p className="text-lg md:text-xl">Enroll now in our prestigious programs – BSc in CSE & BBA</p>
      </section>

      {/* BSc in CSE Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary/80">Bachelor of Science in Computer Science & Engineering (BSc in CSE)</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Industry-relevant curriculum</li>
          <li>Hands-on coding labs and projects</li>
          <li>Experienced faculty</li>
          <li>Internship & job placement support</li>
          <li>Research & innovation opportunities</li>
        </ul>
        <p className="font-medium text-primary/80">Career Opportunities:</p>
        <p className="mb-4">Software Engineer, Data Scientist, AI/ML Engineer, Web/Mobile Developer, Cybersecurity Analyst</p>
      </section>

      {/* BBA Section */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-text/80">Bachelor of Business Administration (BBA)</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Practical business training</li>
          <li>Interactive lectures & workshops</li>
          <li>Corporate mentorship</li>
          <li>Business clubs & competitions</li>
          <li>Internship opportunities</li>
        </ul>
        <p className="font-medium text-primary/60">Career Opportunities:</p>
        <p className="mb-4">Marketing Executive, Financial Analyst, HR Manager, Entrepreneur, Consultant</p>
      </section>

      {/* Admission Requirements */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 text-primary">Admission Requirements</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Minimum GPA in SSC & HSC or equivalent</li>
          <li>Science background for CSE | Any background for BBA</li>
        </ul>
      </section>

      <section id="coasting " className="grid justify-center max-w-[1280px] mx-auto my-10">
       <h3 className="text-center text-xl text-primary p-4">academic cost of 4 Years</h3>
       <Image alt="fees" src={fees}  />
       <a href=""></a>

      </section>

      {/* Call to Action */}
      <section className="text-center bg-secondary py-8 rounded-xl shadow">
        <p className="text-xl font-semibold mb-4">Apply Now!</p>
        <p className="mb-2">💻 Online Application: <a href="https://docs.google.com/forms/d/1XWM5bb79yuwwh_dNpoSPwSyPW1kDtq_eThepq-GgUY4/viewform?edit_requested=true" className="text-blue-600 underline">Apply Here</a></p>
        <p className="mb-2">📞 Helpline: +01876875853</p>
        <p className="mb-2">📍 Campus Address: Darshana Mor, RK road rangpur</p>
        <p className="text-red-600 font-bold mt-4">Seats are limited – Apply early!</p>
      </section>

      {/* Why Choose Us */}
      <section id="why choos Us" className="mt-16">
        <div className="grid grid-cols-4 p-4 space-y-4 items-center justify-center">
          <h3 className="col-span-4 text-center text-3xl font-bold mt-10 bg-primary text-background p-4">why choos Us</h3>
          {/* 
            card imported from components/CardwithTitle
            props: title + reactIccon(optional) 
          */}
          <SingleCardWithTitle title="Lab Facilities" icon={<FaComputer />} />
          <SingleCardWithTitle title="Library" icon={<IoLibrarySharp />} />
          <SingleCardWithTitle title="Internet Facilities" icon={<FaInternetExplorer />} />
          <SingleCardWithTitle title="Hostel Facilities" icon={<GiFamilyHouse /> } />
          <SingleCardWithTitle title="Tutorial" icon={<BiCode /> } />
          <SingleCardWithTitle title="programming contest" icon={<FaRankingStar /> } />
          <SingleCardWithTitle title="Student Colabration" icon={<FaPeopleRoof />} />
          <SingleCardWithTitle title="and more" icon={<GrMore />} />

        </div>
      </section>
    </div>
  );
}