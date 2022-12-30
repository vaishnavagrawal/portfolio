import Link from 'next/link'
import React from 'react'

import { introdata } from 'constants/_constants'
import Typewriter from 'typewriter-effect'

// function Home() {
//   return (
//     <div>
//       <section
//         id='home'
//         className='home'
//         style={
//           {
//             // background:
//             // 'linear-gradient(90deg, rgba(52,55,68,1) 30%, rgba(90,81,89,1) 100%)'
//           }
//         }
//       >
//         {/* <div
//           className='md:block hidden
//          text-xl font-bold  border-2 border-black '
//         >
//           <h1 className=''>
//             VKA
//             <span className='rounded-full h-2 w-2 bg-black inline-block ml-1'></span>
//           </h1>
//         </div> */}
//         <div className='intro_sec block lg:flex items-center '>
//           <div
//             className='h_bg-image order-1 lg:order-2 h-full '
//             style={{
//               backgroundImage: `url(${introdata.your_img_url})`,
//               boxShadow: 'inset 300px 0px 100px -100px rgba(0,0,0,0.7'
//             }}
//           >
//             {/* <img
//               src={introdata.your_img_url}
//               alt=''
//               className='md:h-full w-full'
//               style={{
//                 // display: 'contents'
//                 objectFit: 'cover'
//               }}
//             /> */}
//           </div>
//           <div className='text order-2 lg:order-1 h-100 lg:flex justify-center'>
//             <div className='self-center '>
//               <div className='intro mx-auto'>
//                 <h2 className='mb-px'>{introdata.title}</h2>
//                 <h1 className='mb-px'>
//                   <Typewriter
//                     options={{
//                       strings: [
//                         introdata.animated.first,
//                         introdata.animated.second,
//                         introdata.animated.third
//                       ],
//                       autoStart: true,
//                       loop: true,
//                       deleteSpeed: 10
//                     }}
//                   />
//                 </h1>
//                 <p className='mb-px'>{introdata.description}</p>
//                 <div className='mt-5'>
//                   <Link href={'/articles-727ba0281b414bed82d885f77a09c4b8'}>
//                     <button className='bg-black text-white px-5 py-1 border-2 border-black box-border'>
//                       Articles
//                     </button>
//                   </Link>
//                   <Link href='/about'>
//                     <button className='bg-white px-5 py-1 border-2 border-black box-border ml-3'>
//                       About Me
//                     </button>
//                   </Link>
//                 </div>
//                 {/* <div className='intro_btn-action pb-2'>
//                   <Link href='/portfolio' className='text_2'>
//                     <div id='button_p' className='ac_btn btn '>
//                       My Portfolio
//                       <div className='ring one'></div>
//                       <div className='ring two'></div>
//                       <div className='ring three'></div>
//                     </div>
//                   </Link>
//                   <Link href='/contact'>
//                     <div id='button_h' className='ac_btn btn'>
//                       Contact Me
//                       <div className='ring one'></div>
//                       <div className='ring two'></div>
//                       <div className='ring three'></div>
//                     </div>
//                   </Link>x
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

function Home() {
  return (
    <section>
      <div
        //  className='notion-header'
        style={{
          position: 'fixed',
          width: 'auto',
          //  top: 0;
          //  left: 0;
          //  z-index: 200;

          //  width: 100%;
          //  max-width: 100vw;
          //  overflow: hidden;
          height: 'var(--notion-header-height)'

          //  min-height: var(--notion-header-height);

          //  background: var(--bg-color);
        }}
      >
        <div
          className='text-3xl font-bold flex'
          style={{
            // marginTop: '10px',
            marginLeft: '20px',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Link href='/'>
            <span>

            VKA
            <span className='rounded-full h-2 w-2 bg-black inline-block ml-1'></span>
            </span>
          </Link>
        </div>
      </div>
      {/* <div className='text-3xl font-bold fixed ml-5 mt-2'>
        <Link href='/'>
          VKA
          <span className='rounded-full h-2 w-2 bg-black inline-block ml-1 mt-8'></span>
        </Link>
      </div> */}

      {/* <div
        className='md:block hidden ml-10
          text-xl font-bold fixed '
      >
        <Link href={'/'}>
          <h1
            className=''
            style={
              {
                // borderBottom: '2px solid black'
              }
            }
          >
            VKA
            <span className='rounded-full h-2 w-2 bg-black inline-block ml-1 mt-8'></span>
          </h1>
        </Link>
      </div> */}
      <div className='md:flex md:flex-row-reverse'>
        <div
          className='md:w-[50%] w-full'
          style={{
            height: '100vh',
            backgroundImage: `url(${introdata.your_img_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '700px',
            position: 'relative'
          }}
        ></div>
        <div className='md:w-[50%] w-full flex justify-center items-center'>
          <div
            // className='m-10 p-2'
            style={
              {
                // border: '2px solid black'
              }
            }
          >
            <div
              className='p-10 m-10'
              style={{
                border: '10px solid black'
              }}
            >
              <h1 className='mb-2 text-4xl'>{introdata.title}</h1>
              <div className='mb-2 text-2xl font-medium'>
                <Typewriter
                  options={{
                    strings: [
                      introdata.animated.first,
                      introdata.animated.second,
                      introdata.animated.third
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10
                  }}
                />
              </div>
              <p className='m-0 mb-px '>{introdata.description}</p>
              <div className='mt-5'>
                <Link href={'/articles-ecc8bf89186840f29533c20aaf6f9a66'}>
                  <button className='bg-black text-white px-5 py-1 border-2 border-black box-border text-base '>
                    Articles
                  </button>
                </Link>
                <Link href='/about'>
                  <button className='bg-white px-5 py-1 border-2 border-black box-border ml-3 text-base'>
                    About Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
