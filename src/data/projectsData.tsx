import project1Img from "../assets/images/proj_1.png";
import project2Img from "../assets/images/proj_2.png";
import project3Img from "../assets/images/proj_3.png";
import project4Img from "../assets/images/proj_4.png";
import project5Img from "../assets/images/proj_5.png";
import project6Img from "../assets/images/proj_6.png";
import project7Img from "../assets/images/proj_7.png";
import project8Img from "../assets/images/proj_8.png";
import project9Img from "../assets/images/Proj_9.png";
import project10Img from "../assets/images/Proj_10.png";
import project11Img from "../assets/images/Proj_11.png";
import project12Img from "../assets/images/Proj_12.png";
import project13Img from "../assets/images/Proj_13.png";
import project14Img from "../assets/images/Proj_14.png";
import project15Img from "../assets/images/Proj_15.png";
import project16Img from "../assets/images/Proj_16.png";
import project17Img from "../assets/images/Proj_17.png";
import project18Img from "../assets/images/Proj_18.png";





export interface ProjectData {
  title: string;
  domain: string;
  skills: string[];
  description: string[];
  links: {
    live_link?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
    power_bi?: string;
    excel?: string;
    powerpoint?: string;
  };
  image: string;
}

const projectsData: ProjectData[] = [
  {
    title: "Home Price Estimator",
    domain: "Real Estate",
    skills: ["Machine Learning", "Flask"],
    description: [
      "Full-stack machine learning web app that predicts real-estate prices across Hyderabad.",
      "Backend built with Python, Flask, and scikit-learn for model inference and locality/property-type APIs.",
      "React frontend with a clean Figma-inspired UI, instant dropdown caching, confidence ranges, feature contributions, and mini-charts.",
      "Deployed using Render (backend) and Vercel (frontend) for fast and scalable performance.",
      "Demonstrates practical skills in ML model deployment, REST API integration, and building production-ready real-estate analytics tools."
    ],
    links: {
      live_link: "https://hyderabad-home-price-prediction.vercel.app/",
      github: "https://github.com/rohithreddy2001/Hyderabad-Home-Price-Prediction.git"
    },
    image: project18Img
  },
  {
    title: "Cold Mail Generator",
    domain: "SaaS",
    skills: ["LangChain", "Python", "Streamlit"],
    description: [
      "Generative AI-based web app that automates outreach for job applications.",
      "Built with Python, Streamlit, and LangChain to scrape job postings and extract key details like role, skills, and experience.",
      "Generates personalized cold emails using LLMs and integrates project portfolio links for stronger relevance and engagement.",
      "Hosted on Streamlit Cloud, removing manual effort and speeding up job-application workflows.",
      "Demonstrates real-world application of AI in automating professional communication."
    ],
    links: {
      live_link: "https://cold-mail-generator-genai.streamlit.app/",
      github: "https://github.com/rohithreddy2001/Cold-Mail-Generator-GenAi.git"
    },
    image: project17Img
  },
  {
    title: "Grocery Store Management System",
    domain: "Retail",
    skills: ["React", "Flask", "MySQL"],
    description: [
      "Built a Grocery Store Management System for efficient product and order handling.",
      "Integrated automatic UOM selection to reduce entry errors, auto-assigning units like 'Kg' for items such as daal across 100+ products.",
      "Enabled creation of 50+ orders with dynamic total calculations averaging $150 per order.",
      "Optimized navigation across Dashboard, Product Management, and Order pages, reducing page transition time by 40%.",
      "Deployed using Vercel and Render, maintaining 99.9% uptime.",
      "Improved accuracy and efficiency, saving store managers 10+ hours weekly."
    ],
    links: {
      live_link: "https://grocery-store-management-system-livid.vercel.app/",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_webdevelopment-fullstack-react-activity-7326196978978095105-ouxB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd2oJMBHDEQJD_uc_xW4E0ts3YRCMEOulk",
      github: "https://github.com/rohithreddy2001/Grocery_Store_Management_System.git"
    },
    image: project15Img
  },
  {
    title: "Online Retail Performance Analysis",
    domain: "E-commerce",
    skills: ["Excel", "Power BI", "DAX"],
    description: [
      "Analyzed retail sales data revealing $10.67M revenue from 6M units, with $9.85M generated on weekdays.",
      "Identified seasonal performance shifts: 30.69% revenue increase in November and 57.68% drop in December.",
      "Highlighted top customers and regions, including Customer 14646 contributing $280K and highest revenue from the Netherlands ($285K) and Ireland ($283K).",
      "Delivered insights to strengthen strategy, refine marketing decisions, and improve sales performance."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiMWJkOGJhYWYtOGRjMS00NTYwLWE0ZTAtZDlkNWE3ODJiMjk2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiMWJkOGJhYWYtOGRjMS00NTYwLWE0ZTAtZDlkNWE3ODJiMjk2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_online-retail-performance-analysis-activity-7292792740805783553-90jS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd2oJMBHDEQJD_uc_xW4E0ts3YRCMEOulk",
      github: "https://github.com/rohithreddy2001/TATA_Online_Retail_Performance_Analysis.git"
    },
    image: project13Img
  },
  {
    title: "Stock Portfolio Analysis and Forecasting",
    domain: "FinTech",
    skills: ["Machine Learning", "Pandas"],
    description: [
      "Analyzed stock market data using Python and Pandas, forecasting portfolio values with machine learning.",
      "Processed JSON data and automated extraction to Excel for 350+ stocks.",
      "Applied statistical models including OLS, polynomial regression, and exponential smoothing, achieving 59.76% prediction accuracy.",
      "Visualized price trends with Plotly, using RSI and moving averages for deeper insights.",
      "Provided actionable insights to improve stock selection and strengthen portfolio performance."
    ],
    links: {
      live_link: "https://github.com/rohithreddy2001/Stock-Portfolio-Forecasting-with-Statistical-Modeling/blob/main/Stock%20Portfolio%20NoteBook.ipynb",
      github: "https://github.com/rohithreddy2001/Stock-Portfolio-Forecasting-with-Statistical-Modeling"
    },
    image: project16Img
  },
  {
    title: "GoodCabs Transportation Analysis",
    domain: "Transportation & Mobility",
    skills: ["MySQL", "Power BI", "DAX"],
    description: [
      "Analyzed city-level transportation performance, covering trip volume, pricing efficiency, and passenger satisfaction.",
      "Identified seasonal demand patterns and key differences between weekday and weekend activity.",
      "Explored repeat passenger behavior to evaluate loyalty trends and retention opportunities.",
      "Delivered insights that support improving monthly trip targets and boosting passenger ratings."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiYTllYzFmNGUtYTlhMS00MjVlLWFmNjUtZjJiMjdlZjMyMWMxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiYTllYzFmNGUtYTlhMS00MjVlLWFmNjUtZjJiMjdlZjMyMWMxIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_goodcabs-transportation-operations-activity-7272093927703240704-4eED?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/Transportation-Operations-Insights",
      youtube: "https://youtu.be/KXUZH-BEFIc?si=zG6Zm4H5igmStEw3"
    },
    image: project11Img
  },
  {
    title: "Supply Chain Analysis",
    domain: "FMCG",
    skills: ["Power BI", "DAX", "MySQL"],
    description: [
      "Analyzed key supply chain metrics including On-Time Delivery %, OTIF %, and Line Fill Rate for AtliQ Mart.",
      "Built an interactive Power BI dashboard with advanced bookmarks, slicers, and optimized DAX formulas.",
      "Increased dashboard navigation efficiency by 25% and improved report accuracy by 15%."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiNGZhZTBlZWItYjE1YS00YzIyLThjNGUtYTFkZjQ1MGI4OWY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiNGZhZTBlZWItYjE1YS00YzIyLThjNGUtYTFkZjQ1MGI4OWY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_codebasicsresumechallenge-supplychain-fmcg-activity-7241290959064367104-vMmm?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/Supply-Chain-Issue-Analysis"
    },
    image: project8Img
  },
  {
    title: "Electric Vehicles Analysis",
    domain: "Automotive",
    skills: ["MySQL", "Power BI", "DAX"],
    description: [
      "Analyzed market data for an automotive company planning to launch EVs in India.",
      "Identified key insights related to consumer demand, pricing trends, and regional adoption potential.",
      "Delivered a data-backed foundation for strategic launch and scaling decisions in a fast-growing EV market."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiNmJjNDQzYTYtZGQ0NC00YzFhLWI2ZjAtNDZhNzNiOGY3MmRlIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiNmJjNDQzYTYtZGQ0NC00YzFhLWI2ZjAtNDZhNzNiOGY3MmRlIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_electric-vehicles-insights-activity-7228758833618116611-Wlqd?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/Electric-Vehicle-Analysis.git",
      youtube: "https://youtu.be/lYpQ74G9p0M?si=tqZDZ1-9sioDyLzx"
    },
    image: project5Img
  },
  {
    title: "Insights On IPL 2024 For A Sports Magazine",
    domain: "Sports",
    skills: ["MySQL", "Power BI", "DAX"],
    description: [
      "Analyzed key cricket statistics including total runs, batting averages, bowler economy rates, and dot-ball percentages.",
      "Evaluated team performance trends across multiple years to understand competitive patterns and consistency.",
      "Provided actionable insights valuable for analysts, teams, and cricket enthusiasts."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiMmZjMDVmNDgtN2ZmMS00MTk2LTgyZWMtNWE1ZDI0OGVlOTY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCN9&pageName=ReportSection8f5075557b9747d605d6",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiMmZjMDVmNDgtN2ZmMS00MTk2LTgyZWMtNWE1ZDI0OGVlOTY2IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCN9&pageName=ReportSection8f5075557b9747d605d6",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_ipl-insights-for-2024-season-activity-7184071052161921024-WiB-?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/IPL-2024-Analysis.git",
      youtube: "https://youtu.be/b2T0TpZnl-Y?si=5PhGnEN-CEjYBjJ1"
    },
    image: project4Img
  },
  {
    title: "Telangana Tourism Analysis",
    domain: "Tourism",
    skills: ["Excel", "Power BI", "DAX"],
    description: [
      "Built a Telangana Tourism analytics dashboard highlighting tourism trends across the state with a focus on Hyderabad.",
      "Ranked districts by growth rate to identify high-performing and emerging tourism locations.",
      "Included forecasting features for predicting tourist volume and revenue potential."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiZWUzNmI2MjMtNTM1My00MmJkLThmMzgtNTYzMDM1ZWFhYTdiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=05aeff519c9307c8bc26",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiZWUzNmI2MjMtNTM1My00MmJkLThmMzgtNTYzMDM1ZWFhYTdiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=05aeff519c9307c8bc26",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_tstourism-activity-7203658256177594368-7wTQ?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/TS_Tourism.git"
    },
    image: project7Img
  },
  {
    title: "Cricket Data Analysis",
    domain: "Sports",
    skills: ["Pandas", "Power BI", "DAX"],
    description: [
      "Analyzed T20 World Cup 2022 data to identify top Batters, Bowlers, and All-Rounders.",
      "Evaluated multiple performance metrics to ensure fair and data-driven player ranking.",
      "Delivered clear insights into standout performers across different skill categories."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiMTNmMDE3M2YtMzM2OC00ZjkwLWIwNjMtNThhMmIwNWE5MjdiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiMTNmMDE3M2YtMzM2OC00ZjkwLWIwNjMtNThhMmIwNWE5MjdiIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_cricket-data-analysis-activity-7176843428771627008-oKda?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/2022-T20-WC-Analysis.git"
    },
    image: project2Img
  },
  {
    title: "Credit Card Financial Report",
    domain: "Banking",
    skills: ["MySQL", "Power BI", "DAX"],
    description: [
      "Designed a comprehensive weekly dashboard for monitoring credit card performance.",
      "Provided real-time visibility into key metrics and trends across credit card operations.",
      "Enabled stakeholders to track performance, identify issues early, and make data-driven decisions."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiZDJhYzJmZTctNmQ2MS00NThjLTg1NDMtMzQ5YWZhYjQ3NjlkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection36d300139988ed03a040",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiZDJhYzJmZTctNmQ2MS00NThjLTg1NDMtMzQ5YWZhYjQ3NjlkIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCN9&pageName=ReportSection36d300139988ed03a040",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_credit-card-financial-report-activity-7190610595958693888-DYLN?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/Credit-Card-Financial-Analysis.git"
    },
    image: project3Img
  },
  {
    title: "HR Data Analysis",
    domain: "Human Resources",
    skills: ["Pandas", "Matplotlib", "MySQL"],
    description: [
      "Analyzed employee attrition using Python and MySQL on a Kaggle HR dataset.",
      "Identified high attrition among non-trained employees (53.82%) and Executive Office roles (66.67%).",
      "Explored department-wise trends, hiring patterns, and work-life balance factors affecting retention.",
      "Delivered insights supporting data-driven HR strategies to reduce attrition and improve workforce stability."
    ],
    links: {
      live_link: "https://github.com/rohithreddy2001/HR-Data-Analytics/blob/main/HR_Data_Analytics.ipynb",
      github: "https://github.com/rohithreddy2001/HR-Data-Analytics",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_hr-data-analysis-activity-7298585619201413121-BvIX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADd2oJMBHDEQJD_uc_xW4E0ts3YRCMEOulk"
    },
    image: project14Img
  },
  {
    title: "Call Centre Report - 2023",
    domain: "Customer Service",
    skills: ["DAX", "Excel", "Pivot Tables"],
    description: [
      "Analyzed a 2023 Call Center dataset generating $96,623 from 1,000 calls over 1,498 minutes, with an average rating of 3.89.",
      "Identified 307 five-star ratings and highlighted Rep R03 as the top performer with $20.9K revenue.",
      "Found peak call activity in April and October, with Wednesdays as the busiest day.",
      "Revealed Cleveland as the location with the highest number of male callers.",
      "Showed strong rating distribution dominated by 4- and 5-star feedback, critical for improving performance and satisfaction."
    ],
    links: {
      live_link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Frohithreddy2001%2FCall-Centre-Report-2023%2Frefs%2Fheads%2Fmain%2Fcall-centre-excel-portfolio-project.xlsx&wdOrigin=BROWSELINK",
      excel: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Frohithreddy2001%2FCall-Centre-Report-2023%2Frefs%2Fheads%2Fmain%2Fcall-centre-excel-portfolio-project.xlsx&wdOrigin=BROWSELINK",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_dataanalysis-excelreporting-analytics-activity-7250373114725875712-KSam?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/Call-Centre-Report-2023"
    },
    image: project10Img
  },
  {
    title: "WPL 2024 Excel Dashboard",
    domain: "Sports",
    skills: ["Excel", "Pivot Tables"],
    description: [
      "Built an Excel dashboard for the Women's Premier League (WPL) 2024 highlighting top batting and bowling performances.",
      "Added interactive filters to view and compare stats for specific teams and players.",
      "Enabled quick analysis and performance comparison across the entire league."
    ],
    links: {
      live_link: "https://1drv.ms/x/s!AngFnxJUeDIVmieDhMoftqETjcbQ",
      excel: "https://1drv.ms/x/s!AngFnxJUeDIVmieDhMoftqETjcbQ",
      github: "https://github.com/rohithreddy2001/WPL-2024-DASHBOARD"
    },
    image: project9Img
  },
  {
    title: "Consumer Goods Ad-Hoc Insights",
    domain: "Consumer Goods",
    skills: ["MySQL", "Excel", "Power Point"],
    description: [
      "Produced ad-hoc insights for a consumer goods company operating across APAC regions.",
      "Reported 36.33% growth in unique products from 2020 to 2021 through detailed product analysis.",
      "Identified Notebooks and Accessories as top-performing categories, with Desktops showing the highest growth at 214.29%.",
      "Revealed Retailers as the dominant channel contributing 73.22% of sales, with Flipkart offering the highest discounts."
    ],
    links: {
      live_link: "https://1drv.ms/p/c/15327854129f0578/EdPZpwUuazdOnM-4qordI5MBr_K52mHvXR0XJWXDT3nWgg",
      powerpoint: "https://1drv.ms/p/c/15327854129f0578/EdPZpwUuazdOnM-4qordI5MBr_K52mHvXR0XJWXDT3nWgg",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_consumer-goods-ad-hoc-insights-activity-7288455998091018240-vjO0?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/Consumer_Goods_Insights"
    },
    image: project12Img
  },
  {
    title: "Hospitality Revenue Analytics",
    domain: "Hospitality",
    skills: ["Excel", "Power BI", "DAX"],
    description: [
      "Analyzed historical data to offer revenue insights to the AtliQ Grand hotel team, with the goal of improving revenue and market share relative to other hotels."
    ],
    links: {
      live_link: "https://app.powerbi.com/view?r=eyJrIjoiYzRlNjZlMTQtNzc3NS00Yzc2LTg3MzItOWM4ODViNmIwMTE0IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection",
      power_bi: "https://app.powerbi.com/view?r=eyJrIjoiYzRlNjZlMTQtNzc3NS00Yzc2LTg3MzItOWM4ODViNmIwMTE0IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9&pageName=ReportSection",
      linkedin: "https://www.linkedin.com/posts/rohithreddyrudraiahgari_hospitality-dashboard-activity-7180462633098121216-E6GX?utm_source=share&utm_medium=member_desktop",
      github: "https://github.com/rohithreddy2001/Hospitality-Analysis.git"
    },
    image: project1Img
  },
  {
    title: "COVID 19 Data Analysis",
    domain: "Health Care",
    skills: ["Pandas", "Matplotlib", "NumPy"],
    description: [
      "This project aims to provide people with insights into the COVID-19 situation in their country, allowing them to identify areas where the virus is spreading rapidly and enabling informed planning."
    ],
    links: {
      live_link: "https://github.com/rohithreddy2001/miniProject2.io/blob/main/MINI_PROJECT-2_B3/Mini_Project_B3.ipynb",
      github: "https://github.com/rohithreddy2001/miniProject2.io.git"
    },
    image: project6Img
  }
];

export default projectsData;
