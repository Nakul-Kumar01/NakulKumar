import React from "react";

function SkillDetail() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Tailwind CSS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Postman",
  ];

  const blockchainSkills = [
    "Solidity",
    "Rust",
    "Web3.js",
    "Ethers.js",
    "Anchor Framework",
    "Solana CLI",
    "Truffle",
    "Hardhat",
    "Ganache",
    "Metamask",
    "IPFS",
    "Ethereum",
    "Solana",
    "Smart Contracts",
    "DApp Development",
    "Token Standards (ERC-20, ERC-721)",
    "Smart Contract Deployment",
    "Smart Contract Security",
    "Blockchain Fundamentals",
    "Cryptography",
  ];

  const genAiSkills = [
    "Prompt Engineering",
    "LLMs (Large Language Models)",
    "Fine-tuning LLMs",
    "Text Generation",
    "Image Generation",
    "RAG (Retrieval Augmented Generation)",
    "Tokenization",
    "Embeddings",
    "Vector Databases",
    "Model Deployment",
  ];

  return (
    <div className="bg-black w-full min-h-screen  py-12 md:py-20 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center">
        <div
          className="text-4xl sm:text-5xl font-extralight text-pink-500 tracking-wider"
          style={{
            textShadow: "0 0 10px #F6339A, 0 0 20px #F6339A, 0 0 40px #00D3F3",
          }}
        >
          ⫘⫘⫘⫘⫘⫘
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/50 mt-4">
          I constantly try to improve
        </h2>
      </div>

      {/* Skills Sections */}
      <div className="w-full max-w-5xl mt-12 px-4 sm:px-6 md:px-8">
        {/* Web Development Skills */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="px-4 py-2 bg-gray-900/50 text-sm sm:text-base rounded-lg font-medium border border-gray-700/50 text-white hover:scale-105 hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Blockchain Skills */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8">
            Blockchain Development
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {blockchainSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="px-4 py-2 bg-gray-900/50 text-sm sm:text-base rounded-lg font-medium border border-gray-700/50 text-white hover:scale-105 hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Generative AI Skills */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-8">
            Generative AI
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {genAiSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="px-4 py-2 bg-gray-900/50 text-sm sm:text-base rounded-lg font-medium border border-gray-700/50 text-white hover:scale-105 hover:bg-gray-800 transition-all duration-300 shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SkillDetail);