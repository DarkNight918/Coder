import React, {  } from 'react';
import SkillBar from 'react-skillbars';
import './Skills.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const SKILLS = [
    {
      "type": "Html, CSS",
      "level": 90,
      "color": {
        "bar": "#3498db",
        "title": {
          "background": "#2980b9",
          "text": "black"
        }
      }
    },
    {
      "type": "React",
      "level": 85,
      "color": {
        "bar": "brown"
      }
    },
    {
      "type": "Javascript",
      "level": 85,
      "color": {
        "bar": "yellow"
      }
    },
    {
      "type": "Angular",
      "level": 80,
      "color": {
        "bar": "blue"
      }
    },
    {
      "type": "Vue.js",
      "level": 85,
      "color": {
        "bar": "orange"
      }
    },
    {
      "type": "Next.js",
      "level": 80,
      "color": {
        "bar": "brown"
      }
    },
    {
      "type": "Nuxt.js",
      "level": 75,
      "color": {
        "bar": "#3498db",
        "title": {
          "background": "#2980b9",
          "text": "black"
        }
      }
    },
    {
      "type": "Python",
      "level": 85,
      "color": {
        "bar": "blue"
      }
    },
    {
      "type": "MySQL",
      "level": 85,
      "color": {
        "bar": "black"
      }
    },
    {
      "type": "MongoDB",
      "level": 80,
      "color": {
        "bar": "pink"
      }
    },
    {
      "type": "Solidity",
      "level": 80,
      "color": {
        "bar": "black"
      }
    },
    {
      "type": "Rust",
      "level": 75,
      "color": {
        "bar": "blue"
      }
    }
  ]

const Skills = () => {
    return (
        
      
      <div className="container mt-5">
        
        <h1 id="skills" className="service-font1 text-center">Skills</h1>
        <div className="row">
        
          <div className="col-lg-12">     
            <div className="skilAlign"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
              <SkillBar skills={SKILLS} height={25}></SkillBar>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Skills;