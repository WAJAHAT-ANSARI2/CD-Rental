// import React from "react";
// import Title from "./Title";
// import { assets } from "../assets/assets";

// const Testimonials = () => {
//   const cardsData = [
//     {
//       image: ,
//       name: "Briar Martin",
//       handle: "@neilstellar",
//       date: "April 20, 2025",
//       text: "Radiant made undercutting all of our competitors an absolute breeze."
//     },
//     {
//       image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
//       name: "Avery Johnson",
//       handle: "@averywrites",
//       date: "May 10, 2025",
//       text: "Amazing experience! Booking was smooth and everything was perfectly arranged."
//     },
//     {
//       image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
//       name: "Jordan Lee",
//       handle: "@jordantalks",
//       date: "June 5, 2025",
//       text: "Hands down the easiest way to find quality stays for business and leisure."
//     },
//     {
//       image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
//       name: "Taylor Brooks",
//       handle: "@taylortravels",
//       date: "July 15, 2025",
//       text: "Customer support was fantastic — quick replies and super friendly!"
//     }
//   ];

//   const CreateCard = ({ card }) => (
//     <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 min-w-[18rem] bg-white">
//       <div className="flex gap-2">
//         <img className="size-11 rounded-full" src={card.image} alt={`${card.name}'s profile`} />
//         <div className="flex flex-col">
//           <div className="flex items-center gap-1">
//             <p className="font-medium">{card.name}</p>
//             {/* Verified badge */}
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M4.555.72...z"
//                 fill="#2196F3"
//               />
//             </svg>
//           </div>
//           <span className="text-xs text-slate-500">{card.handle}</span>
//         </div>
//       </div>
//       <p className="text-sm py-4 text-gray-800">{card.text}</p>
//       <div className="flex items-center justify-between text-slate-500 text-xs">
//         <div className="flex items-center gap-1">
//           <span>Posted on</span>
//           <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
//             <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
//               <path d="m.027 0 4.247 5.516..." fill="currentColor" />
//             </svg>
//           </a>
//         </div>
//         <p>{card.date}</p>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <style>{`
//         @keyframes marqueeScroll {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .marquee-inner {
//           animation: marqueeScroll 25s linear infinite;
//         }
//         .marquee-inner:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="relative py-28 px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
//         <Title
//           title="What our customers say"
//           subTitle="Discover why discerning travelers choose Stayventure for their luxury accommodations around the world"
//         />

//         {/* Gradient edges */}
//         <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
//         <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

//         {/* Marquee track */}
//         <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
//           {[...cardsData, ...cardsData].map((card, index) => (
//             <CreateCard key={index} card={card} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonials;
