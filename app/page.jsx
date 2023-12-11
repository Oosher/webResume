
'use client'

import styles from "./global.css";
import he from './languages/he.json'
import en from './languages/en.json'
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";

export default function Home() {

const [lang,setLang] = useState("en");

const [translatedContent ,setTranslatedContent] =useState({});

  useEffect(()=>{



    switch (lang) {
      case "he":
        
        setTranslatedContent(he);
        break;

        case "en" : 
        setTranslatedContent(en);

        break ;
    
      default:
        break;
    }

  },[lang])

  console.log(translatedContent);

    return <div className="main">
      <div className="title">
        <div>
          <h1>{translatedContent.name?.Title}</h1>
          <h3>{translatedContent.name?.Description}</h3>
        </div>
      </div>
      <div className="verticalLine"></div>
      <AboutMe translation={translatedContent.aboutMe}/>
    </div>
  }