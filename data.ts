import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Saddam Howlader",
  title: "IT Officer",
  profile_image: "https://pbs.twimg.com/profile_images/1176977716110741504/R-9FBsxM_400x400.jpg",
  contact: {
    email: "asifnowlader4@gmail.com",
    phone: "(+880) 1970321576",
    address: "Shahid Bacchu Sadak, Tormugoria, Master Colony, Madaripur. Dhaka-1230, Bangladesh",
    linkedin: "linkedin.com/in/saddamhowlader/",
    twitter: "x.com/saddamhowlader6"
  },
  experience: [
    {
      role: "IT Officer",
      company: "Bangladesh Government ICT Project",
      period: "2022 – Present",
      location: "Dhaka, Bangladesh",
      responsibilities: ["Infrastructure maintenance & specialized technical support", "Web App Dev & security testing", "Digital Forensics & Incident Response"]
    },
    {
      role: "Support Engineer",
      company: "CRYSTAL TECHNOLOGY BANGLADESH LTD.",
      period: "2021 – 2022",
      location: "Madaripur, Bangladesh",
      responsibilities: ["Network administration & cybersecurity monitoring", "End-user enterprise technical support"]
    },
    {
      role: "IT Executive",
      company: "Adorsho Online Network",
      period: "2019 – 2021",
      location: "Madaripur, Bangladesh",
      responsibilities: ["Deployment and monitoring of CCTV and physical security systems", "ISP-level router networking"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Daffodil International University",
      period: "2014 – 2018",
      location: "Dhaka"
    },
    {
      degree: "Diploma in Engineering",
      institution: "Barishal Polytechnic Institute",
      period: "2011 – 2014",
      location: "Barishal"
    }
  ],
  skills: [
    "Digital Forensics", "Cybersecurity", "Python", "Linux", "Networking", "Burp Suite", "Wireshark", "Metasploit", "Windows Server", "SQL"
  ],
  toolsets: [
    { category: "Security", items: ["Burp Suite", "Wireshark", "Metasploit", "Nmap"] },
    { category: "Forensics", items: ["Autopsy", "FTK Imager", "Volatility"] }
  ],
  training: [
    { title: "Certified Ethical Hacker", provider: "EC-Council" },
    { title: "Cisco Certified Network Associate", provider: "Cisco" }
  ],
  references: [
    { name: "Project Manager", role: "Govt ICT Project", contact: "Available on request" },
    { name: "Senior Engineer", role: "Crystal Tech", contact: "Available on request" }
  ],
  languages: ["Bengali (Native)", "English (Professional)"]
};