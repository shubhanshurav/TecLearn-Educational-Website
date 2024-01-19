import React from 'react';
import { TeamMembersData } from '../data/team-members-data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/Common/Footer';

const TeamMembers = ({ name, role, image, github, linkedin }) => {
  return (
    <div className="w-fit object-cover p-4">
      <div className="flex flex-col md:flex-row bg-richblack-900 rounded-lg overflow-hidden shadow-md">
        <div className=''>
           <img src={image} alt={name} className="w-full object-cover" />
        </div>
        <div className='flex flex-col w-full items-center py-0 md:py-8 text-richblack-5'>
            <div className="text-center p-4">
                <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text ">{name}</h3>
                <p className="text-lg font-thin">{role}</p>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white hover:text-pure-greys-100 transition duration-300" size={35} />
                    </a>
                )}
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white hover:text-blue-200 transition duration-300" size={35} />
                    </a>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-16 bg-richblack-800 ">
      <div className="container mx-auto pb-10 border-b border-richblack-500">
        <h2 className="text-4xl font-bold text-center mb-8 text-yellow-50">Meet Our Team</h2>
        <p className="text-center mb-8 text-richblack-5 font-light text-lg px-6 md:px-0">
          Meet the talented individuals behind our success. Our team is a diverse group of professionals, each bringing unique skills and experiences to the table. Collaborating seamlessly, we are committed to delivering excellence in every project. Whether it's innovation, creativity, or dedication, our team embodies these values, ensuring the success of our endeavors.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1">
          {TeamMembersData.map((member, index) => (
            <TeamMembers key={index} {...member} />
          ))}
        </div>
      </div>

      <Footer/>
    </section>
  );
};

export default TeamSection;
