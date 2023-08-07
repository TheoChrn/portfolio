import React from "react";

// Code Logos
import HtmlLogo from "../../Page/Home/Components/Logos/SkillsLogo/Html";
import CssLogo from "../../Page/Home/Components/Logos/SkillsLogo/Css";
import JavaScriptLogo from "../../Page/Home/Components/Logos/SkillsLogo/Javascript";
import SassLogo from "../../Page/Home/Components/Logos/SkillsLogo/Sass";
import ReactLogo from "../../Page/Home/Components/Logos/SkillsLogo/React";
import ReduxLogo from "../../Page/Home/Components/Logos/SkillsLogo/Redux";
import FigmaLogo from "../../Page/Home/Components/Logos/SkillsLogo/Figma";
import GitHubLogo from "../../Page/Home/Components/Logos/SkillsLogo/GitHub";
import WordPressLogo from "../../Page/Home/Components/Logos/SkillsLogo/Wordpress";
import JestLogo from "../../Page/Home/Components/Logos/SkillsLogo/Jest";
import Twitter from "../../Page/Home/Components/Logos/SocialMedia/Twitter";
import LinkedIn from "../../Page/Home/Components/Logos/SocialMedia/LinkedIn";
import Email from "../../Page/Home/Components/Logos/SocialMedia/Email";
import Github from "../../Page/Home/Components/Logos/SocialMedia/Github";
import StoryBookLogo from "../../Page/Home/Components/Logos/SkillsLogo/StoryBook";
import CurriculumVitae from "../../Page/Home/Components/Logos/SocialMedia/CV";
import CVPDF from "../../../public/CV/CV_CHERON_THEO.pdf";

//Project logos
import ArgentBankLogo from "../../assets/project-image/ArgentBank.png";
import BilledLogo from "../../assets/project-image/billed.svg";
import FishEyeLogo from "../../assets/project-image/fisheye.svg";
import GameOnLogo from "../../assets/project-image/gameon.svg";
import KasaLogo from "../../assets/project-image/kasa.svg";
import LeanAtHomeLogo from "../../assets/project-image/learnathome.svg";
import LesPetitsPlatsLogo from "../../assets/project-image/lespetitsplats.svg";
import OhMyFoodLogo from "../../assets/project-image/ohmyfood.svg";
import ReserviaLogo from "../../assets/project-image/reservia.svg";
import SportSeeLogo from "../../assets/project-image/sportsee.svg";
import WealthHealthLogo from "../../assets/project-image/wealthhealth.jpg";
import TypeScriptLogo from "../../Page/Home/Components/Logos/SkillsLogo/TypeScript";

export const logos = [
  {
    socialMedia: [
      {
        logo: <Github mainColor="white" secondColor="white" size="30px" />,
        link: "https://github.com/TheoChrn",
      },
      {
        logo: <Twitter mainColor="white" size="30px" />,
        link: "https://twitter.com/vtchrn",
      },
      {
        logo: <LinkedIn mainColor="white" size="30px" />,
        link: "https://www.linkedin.com/in/th%C3%A9o-chrn/",
      },
      {
        logo: <Email mainColor="white" size="30px" />,
        mail: "theo.chrn@gmail.com",
      },
      {
        logo: <CurriculumVitae mainColor={"white"} size={"30px"} />,
        downloadcv: CVPDF,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        logo: <JavaScriptLogo mainColor="#F7DF1E" secondColor="#000000" />,
        type: "Front",
      },
      {
        name: "TypeScript",
        logo: <TypeScriptLogo mainColor="#007ACC" secondColor={"white"} />,
        type: "Front",
      },
      {
        name: "Sass",
        logo: <SassLogo mainColor="white" />,
        type: "Front",
      },
      {
        name: "ReactJs",
        logo: <ReactLogo mainColor="#53C1DE" />,
        type: "Front",
      },
      {
        name: "Redux",
        logo: <ReduxLogo mainColor="white" />,
        type: "Front",
      },
      {
        name: "Figma",
        logo: (
          <FigmaLogo
            mainColor="#1ABCFE"
            secondColor="#0ACF83"
            thirdColor="#FF7262"
            fourthColor="#F24E1E"
            fifthColor="#A259FF"
          />
        ),
        type: "Design",
      },
      {
        name: "Jest",
        logo: <JestLogo mainColor="#c63d14" />,
        type: "Autres",
      },
      {
        name: "StoryBook",
        logo: <StoryBookLogo mainColor="#FF4785" secondColor={"white"} />,
        type: "Autres",
      },
    ],
    projects: [
      {
        id: 4,
        title: "Fisheye",
        src: FishEyeLogo,
        alt: "Photo projet Fisheye",
        link: "https://nervous-mccarthy-79671f.netlify.app/",
        git: "https://github.com/TheoChrn/Projet-6",
        type: "Openclassrooms",
        logos: [
          <HtmlLogo
            mainColor="white"
            secondColor="silver"
            thirdColor="#7451eb"
          />,
          <CssLogo
            mainColor="white"
            secondColor="silver"
            thirdColor="#7451eb"
          />,
          <JavaScriptLogo mainColor="white" secondColor="#7451eb" />,
          <SassLogo mainColor="white" />,
        ],
      },
      {
        id: 5,
        title: "Les petits plats",
        src: LesPetitsPlatsLogo,
        alt: "Photo projet Les petits plats",
        link: "https://theochrn.github.io/Projet-7-Les-Petits-Plats/src/public/index.html",
        git: "https://github.com/TheoChrn/Projet-7-Les-Petits-Plats/tree/development_first-algorithm",
        type: "Openclassrooms",
        logos: [
          <HtmlLogo
            mainColor="white"
            secondColor="silver"
            thirdColor="#7451eb"
          />,
          <CssLogo
            mainColor="white"
            secondColor="silver"
            thirdColor="#7451eb"
          />,
          <JavaScriptLogo mainColor="white" secondColor="#7451eb" />,
          <SassLogo mainColor="white" />,
        ],
      },
      {
        id: 7,
        title: "Learn@home",
        src: LeanAtHomeLogo,
        alt: "Photo projet Learn at home",
        link: "https://www.figma.com/file/It48VWXfSkxdDy5i8khCQc/Learn%40Home?type=design&node-id=0%3A1&mode=design&t=mTOVgOWj7vy7piyl-1",
        type: "Openclassrooms",
        logos: [
          <FigmaLogo
            mainColor="silver"
            secondColor="white"
            thirdColor="white"
            fourthColor="white"
            fifthColor="white"
          />,
        ],
      },
      {
        id: 8,
        title: "Kasa",
        src: KasaLogo,
        alt: "Photo projet Kasa",
        link: "https://kasa-typescript.vercel.app/",
        git: "https://github.com/TheoChrn/projet-10-kaza",
        type: "Openclassrooms",
        logos: [
          <ReactLogo mainColor="white" />,
          <SassLogo mainColor="white" />,
          <TypeScriptLogo mainColor="white" secondColor="#7451eb" />,
        ],
      },
      {
        id: 9,
        title: "SportSee",
        src: SportSeeLogo,
        alt: "Photo projet SportSee",
        link: "https://projet-12-sportsee-front.vercel.app/",
        git: "https://github.com/TheoChrn/projet-12-sportsee-front",
        type: "Openclassrooms",
        logos: [
          <ReactLogo mainColor="white" />,
          <SassLogo mainColor="white" />,
        ],
      },
      {
        id: 10,
        title: "Argent Bank",
        src: ArgentBankLogo,
        alt: "Photo projet Argent Bank",
        link: "https://projet-13-bank-front.vercel.app/",
        git: "https://github.com/TheoChrn/Kasa-typescript",
        type: "Openclassrooms",
        logos: [
          <ReactLogo mainColor="white" />,
          <ReduxLogo mainColor="white" />,
          <SassLogo mainColor="white" />,
          <TypeScriptLogo mainColor="white" secondColor="#7451eb" />,
        ],
      },
    ],
  },
];
