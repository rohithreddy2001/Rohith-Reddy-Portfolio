import certification1 from "../assets/images/certificate-1.png";
import certification2 from "../assets/images/certificate-2.png";
import certification3 from "../assets/images/certificate-3.png";
import certification4 from "../assets/images/certificate-4.png";
import certification5 from "../assets/images/certificate-5.png";
import certification6 from "../assets/images/certificate-6.png";
import certification7 from "../assets/images/certificate-7.png";
import certification8 from "../assets/images/certificate-8.png";
import certification9 from "../assets/images/certificate-9.png";
import certification10 from "../assets/images/certificate-10.png";
import certification11 from "../assets/images/certificate-11.png";
import certification12 from "../assets/images/certificate-12.png";

export interface CertificationData {
  id: number;
  title: string;
  image: string;
  link: string;
  issuer?: string;
  category?: string;
}

const certificationsData: CertificationData[] = [
  {
    id: 1,
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    image: certification1,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D7D0B8B9E15B808730FA043C58B43DB3F8CEFF5C8E54E03EFCF00F4320D7241B",
    issuer: "Oracle",
    category: "Programming"
  },
  {
    id: 2,
    title: "Codebasics Project Challenge 10",
    image: certification6,
    link: "https://codebasics.io/certificate/CB-CH-1-13-295552",
    issuer: "Codebasics",
    category: "Data Analytics"
  },
  {
    id: 3,
    title: "Certified for Python programming from Coursera",
    image: certification2,
    link: "https://www.coursera.org/account/accomplishments/verify/S3AT9LKKJ282",
    issuer: "Coursera",
    category: "Programming"
  },
  {
    id: 4,
    title: "Data Analysis with Python",
    image: certification3,
    link: "https://www.freecodecamp.org/certification/ROHITHREDDYRUDRAIAHGARI/data-analysis-with-python-v7",
    issuer: "FreeCodeCamp",
    category: "Data Analytics"
  },
  {
    id: 5,
    title: "SQL (Advanced)",
    image: certification11,
    link: "https://www.hackerrank.com/certificates/472bca640f34",
    issuer: "HackerRank",
    category: "Database"
  },
  {
    id: 6,
    title: "Codebasics Project Challenge 12",
    image: certification10,
    link: "https://codebasics.io/certificate/CB-CH-1-15-295552",
    issuer: "Codebasics",
    category: "Data Analytics"
  },
  {
    id: 7,
    title: "Data Analysis Projects",
    image: certification4,
    link: "https://verify.mygreatlearning.com/verify/UHCSVEUS",
    issuer: "Great Learning",
    category: "Data Analytics"
  },
  {
    id: 8,
    title: "Accenture North America Data Analytics and Visualization",
    image: certification5,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_aFvc3qwnrNb4vqaAa_1714917441782_completion_certificate.pdf",
    issuer: "Accenture",
    category: "Data Analytics"
  },
  {
    id: 9,
    title: "Power BI Job Simulation",
    image: certification7,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_aFvc3qwnrNb4vqaAa_1718520832033_completion_certificate.pdf",
    issuer: "PwC Switzerland",
    category: "Business Intelligence"
  },
  {
    id: 10,
    title: "SQL using MySQL & Database Design",
    image: certification8,
    link: "https://moonshot.scaler.com/s/sl/6_ekCFeKdi",
    issuer: "Scaler",
    category: "Database"
  },
  {
    id: 11,
    title: "Python Certified By HackerRank",
    image: certification9,
    link: "https://www.hackerrank.com/certificates/9d0bc5a16afc",
    issuer: "HackerRank",
    category: "Programming"
  },
  {
    id: 12,
    title: "Data Visualisation: Empowering Business with Effective Insights",
    image: certification12,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_aFvc3qwnrNb4vqaAa_1738513979117_completion_certificate.pdf",
    issuer: "Tata",
    category: "Data Visualization"
  }
];

export default certificationsData;
