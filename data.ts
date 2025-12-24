import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Saddam Howlader",
  title: "IT Officer",
  profile_image: "https://pbs.twimg.com/media/DYYI_8xUMAElDgs?format=jpg&name=large",
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
      period: "2021 – 2022",
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
      period: "2019 – 2021",
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
    "Digital Forensics", "Cybersecurity", "Network Admin", "Linux", "Windows Server", 
    "Python", "SQL", "Burp Suite", "Wireshark", "Metasploit", "Virtualization"
  ],
  toolsets: [
    { category: "Forensics", items: ["Autopsy", "FTK Imager", "Volatility"] },
    { category: "Security", items: ["Burp Suite", "Nmap", "Metasploit"] },
    { category: "Networks", items: ["Wireshark", "Cisco Packet Tracer", "MikroTik"] }
  ],
  training: [
    { title: "Digital Forensics Essentials", provider: "Government ICT Project" },
    { title: "Advanced Cybersecurity Protocols", provider: "Crystal Technology" }
  ],
  references: [
    { name: "IT Project Lead", role: "Government ICT Project", contact: "Available on request" }
  ],
  languages: ["Bengali (Native)", "English (Professional)"]
};