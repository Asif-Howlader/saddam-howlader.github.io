import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Saddam Howlader",
  title: "IT Officer",
  profile_image: "https://pbs.twimg.com/media/DYYI_8xUMAElDgs?format=jpg&name=large",
  contact: {
    email: "asifnowlader4@gmail.com",
    phone: "(+880) 1970321576",
    address: "House 8/1, Block-3, Road-06, Fulbadia, Turag, Dhaka-1230. Home: Master Colony, Madaripur, Bangladesh",
    linkedin: "linkedin.com/in/saddamhowlader/",
    twitter: "x.com/saddamhowlader6"
  },
  experience: [
    {
      role: "IT Officer",
      company: "Bangladesh Government ICT Project",
      period: "08/05/2022 – Present",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Infrastructure maintenance & specialized technical support",
        "Web Application Development & security testing",
        "Digital Forensics & Incident Response (DFIR)",
        "Management of national ICT assets"
      ]
    },
    {
      role: "Support Engineer",
      company: "CRYSTAL TECHNOLOGY BANGLADESH LTD.",
      period: "02/10/2021 – 30/04/2022",
      location: "Madaripur, Bangladesh",
      responsibilities: [
        "Network administration & cybersecurity monitoring",
        "Enterprise-level technical support for government departments",
        "Hardware optimization and preventative maintenance"
      ]
    },
    {
      role: "IT Executive",
      company: "Adorsho Online Network",
      period: "01/01/2019 – 30/09/2021",
      location: "Madaripur, Bangladesh",
      responsibilities: [
        "ISP-level router networking and troubleshooting",
        "Deployment and monitoring of CCTV and physical security systems",
        "Hardware quality control and inventory management"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Daffodil International University",
      period: "2014 – 2018",
      location: "Dhaka, Bangladesh"
    },
    {
      degree: "Diploma in Engineering",
      institution: "Barishal Polytechnic Institute",
      period: "2011 – 2014",
      location: "Barishal, Bangladesh"
    },
    {
      degree: "SSC",
      institution: "Al Haj Amin Uddin High School",
      period: "2010",
      location: "Madaripur, Bangladesh"
    }
  ],
  skills: [
    "Digital Forensics", "Cybersecurity Management", "AI Engineering", 
    "Python", "Django", "SQL", "Bash Scripting", "Web Scraping", 
    "Networking", "Troubleshooting", "Data Analysis"
  ],
  languages: ["Bengali (Native)", "English (Professional)"],
  projects: [
    {
      name: "automated video search, play and download one by one from YouTube",
      url: "https://github.com/Asif-Howlader/youtube_d.git",
      description: "Python-based workflow for media automation and batch processing."
    },
    {
      name: "Network Traffic Analyzer & Intrusion Detection System",
      url: "#",
      description: "Real-time packet inspection tool built with Scapy for security monitoring."
    },
    {
      name: "Security Information and Event Management",
      url: "https://github.com/Asif-Howlader/SIEM.git",
      description: "Executing the agent script, the mother solution will collect different types of logs."
    }
  ]
};