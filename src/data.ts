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
      responsibilities: ["Infrastructure maintenance", "Web Security", "Digital Forensics"]
    }
  ],
  education: [
    {
      degree: "BSc in CSE",
      institution: "Daffodil International University",
      period: "2014 – 2018",
      location: "Dhaka"
    }
  ],
  skills: ["Digital Forensics", "Cybersecurity", "Network Admin", "Linux", "Python"],
  languages: ["Bengali (Native)", "English (Professional)"]
};