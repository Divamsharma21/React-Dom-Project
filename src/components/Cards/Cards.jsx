import React from 'react';
// import Image from 'next/image'
import styles from './Cards.module.css'

const Cards = ({ title, imageUrl, body, path }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className="text-white font-bold">{title}</h3>
        </div>
        {/* <div className={styles.imageContent}>
          <Image
            src={imageUrl}
            width={200}
            height={100}
            className="w-full h-auto md:w-40 md:h-40"
          />
        </div> */}
        <div className={styles.cardContent}>
          <p className="font-semibold text-black mt-2 ">
            {body}
          </p>
        </div>
        <div className={styles.button}>
          <a href={path} target="_blank" rel="noopener noreferrer">
            <button className="font-bold font-serif  ">
              Visit the website
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;






// "use client"
// import React from 'react';
// import Image from 'next/image'
// // import './Cards.css'

// const Cards = ({ title, imageUrl, body, path }) => {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <div className="card  bg-slate-900 overflow-hidden rounded-md  mx-2 my-2 block items-center w-fit">
//       <div className="card-header text-white font-extrabold mx-2">
//         <h3
//           className={`cursor-pointer ${isHovered ? 'text-gray-300' : 'text-white'} hover:text-gray-300 transition-colors duration-300`}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {title}
//         </h3>
//       </div>
//       <div className="image-content mx-2 my-2 h-fit w-full md:shrink-0">
//         <Image
//           src={imageUrl}
//           width={200}
//           height={100}
//         />
//       </div>
//       <div className="card-content font-semibold text-balance my-2 mx-2 text-white mt-2 text-slate-500">
//         {body}
//       </div>

//       <div className="button text-white rounded-md bg-green-600 h-fit w-fit hover:animate-bounce font-bold font-serif shadow-yellow-400">
//         <a href={path} target="_blank" rel="noopener noreferrer">
//           <button>
//             Visit the website
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Cards;


























// import React from 'react';
// import Image from 'next/image'

// const Cards = ({ title,imageUrl, body,path }) => {
//   return (
//     <div className="card  bg-slate-900 overflow-hidden rounded-md  mx-2 my-2 block items-center w-fit">
//       <div className="card-header text-white font-extrabold mx-2">
//         <h3>{title}</h3>

//       </div>
//       <div className="image-content mx-2 my-2 h-fit w-full md:shrink-0">
        
//         <Image 
//         src={imageUrl}
//           width={200}
//            height={100}
// />
//       </div>
//       <div className="card-content font-semibold text-balance my-2 mx-2 text-white mt-2 text-slate-500">
//         {body}
         
//       </div>

//       <div className="button text-white rounded-md bg-green-600 h-fit w-fit hover:animate-bounce font-bold font-serif shadow-yellow-400">

//       <a href={path} target="_blank" rel="noopener noreferrer">
//         <button>
//           Visit the website 
//         </button>
//       </a>
//       {/* <button href={path}  type="button" >Go To Website</button> */}
  
//       </div>
//     </div>

  
//   );
// }
//  export default Cards