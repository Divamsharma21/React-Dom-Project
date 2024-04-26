import React from 'react'
import Cards from "../Cards/Cards.jsx"


 
const project = () => {
  
  return (

    <div className="h-fit">
       
       {/* for the image of the project title */}
        <div className="photo flex justify-center animate-pulse ">
          <img src="https://th.bing.com/th/id/R.b4d6a5cb6f864b77dd85ee87c2e6284d?rik=5aFCNhXc0GWxrQ&riu=http%3a%2f%2fwww.di.unito.it%2f~tutreeb%2fCCG-TUT%2fimages%2fCCGproject.jpg&ehk=NVjSFFTrnHqkqDGix2oII3UmFamdoJezK%2flOeY7Am5Q%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
   
 
   {/* for the another content in the project section */}

<div className="cards-contaner grid grid-rows-2 w-fit  ">






   <div className="project-cards flex justify-evenly">
   < Cards 
        title="Phone wala "
        imageUrl="https://cdn.browsercam.com/headers/za.co.digital22.bootstrap4-header.png"
        body="In this project i make our youtube channel website from Bootstrap ."
        path="https://divamsharma21.github.io/phone-wala/"
        />

< Cards 
        title="Login form"
        imageUrl="https://wallpapercave.com/wp/wp6599912.jpg"
        body="In java i make Login page with the help of Gui Programming."
        path=""
        />
   </div>


   <div className="project-cards flex justify-evenly ">
   < Cards 
        title="Portfolio website"
        imageUrl="https://static.observableusercontent.com/thumbnail/188bbdb879fea0a9e9e65feecce8128a11c8a107d8f3994d5fee0863beca138d.jpg"
        body="its my portfolio website from html,css and javascript."
        path="https://divamsharma21.github.io/portfolio/"
        />

< Cards 
        title="Currency-Converter"
        imageUrl="https://www.goadsindia.com/img/it-img/full-stack/mern.png"
        body=" its the react js project of convert the Currency."
        path="https://divamsharma21.github.io/Currency-Converter/" 
        
        />
   </div>


        </div>

</div>

  
  
  )
}

export default project

export const metadata = {
  title: " Project Portfolio",
  description: "its my portfolio website",
};
