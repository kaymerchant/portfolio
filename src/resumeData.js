import ProfilePic from "../src/assets/profilePic.jpg"
import solver from "../src/assets/problem solver.PNG"
import creative from "../src/assets/creative.PNG"
import technology from "../src/assets/tech.PNG"
import player from "../src/assets/team player.PNG"
import communicator from "../src/assets/communicator.PNG"
import logical from "../src/assets/logical.PNG"
import learner from "../src/assets/learner.PNG"
import cupCakeLogo from "../src/assets/cupCakeLogo.png"
import dataLogo from "../src/assets/dataLogo.png"
import gifLogo from "../src/assets/gifLogo.png"
import sandwichLogo from "../src/assets/sandwichLogo.png"
import readerLogo from "../src/assets/readerLogo.png"

let resumeData = {
  name : "<Kanwal Merchant/>",
  title : "{Full Stack Software Developer}",
   profileImage : ProfilePic, 
   aboutMe : "I am self-taught full stack developer. Taking up new challenges everyday and finding the most creative solutions. I am passionate towards learning new technologies and build dynamic webpages.",
    skills : {
      Java : 80,
      RecatJS : 60,
      HTML5 :  70,
      CSS : 70,
      Javascript : 65,
      MySQL : 60,
    },
    interpersonalSkills : {
      problemSolver : {
        name : "Problem Solver",
        img : solver
      },
      creative : {
        name : "Creative Genius",
        img : creative
      },
      communicator : {
        name : "Interpersonal Skills",
        img : communicator
      },
      learner : {
        name : "Passionate Learner",
        img : learner
      },
      logical : {
        name : "Logical Thinker",
        img : logical
      },
      teamPlayer : {
        name : "Team Player",
        img : player
      },
      tech : {
        name : "Technological Enthusiast",
        img : technology
      },
    },
  portfolio : {
    gifGenerator : {
      name : "Gif Generator",
      technologies : "(ReactJs)",
      link : "https://kaymerchant.github.io/gif-generator/",
      description: "Displaying the gifs/stickers by taking user inputs and calling an endpoint to display results.",
      image : gifLogo
    },
    imageReader : {
      name : "Image Reader",
      technologies : "(.NET, Azure and ReactJs)",
      link : "https://kaymerchant.github.io/image-reader/",
      description: "Used an AI service to analyze content in images, extract the text, and identify the language of the text contained in the image.",
      image: readerLogo
    },
    sandwichBuilder : {
      name : "Sandwich Builder",
      technologies : "(ReactJs)",
      link : "https://kaymerchant.github.io/sandwich-builder/",
      description : "Built an interactive UI to customize a Sandwich and display the ingredients and providing giving the user the ability to submit the order.",
      image : sandwichLogo
    },
    cupCakeFactory : {
      name : "Cup Cake Factory",
      technologies : "(HTML, CSS, JavaScript)",
      link : "https://kaymerchant.github.io/cupcake-factory/",
      description : "An interactive webpage to browse through the various categories and customize your order",
      image : cupCakeLogo
    },
    dataStructures : {
      name : "Data Structures and Alogrithms",
      technologies : "(Java)",
      link:"https://github.com/kaymerchant/DataStructures",
      description : "Implemented an interface to develop various data structures and algorithms to understand them better.",
      image : dataLogo
    }
  }
}
  
  export default resumeData