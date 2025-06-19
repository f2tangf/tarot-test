'use client';


import Image from "next/image";
import { useState, useEffect, useRef, Link } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";



import BgImg4 from '@/../public/source/2-resultPage/2-bg.png';
import FlipBtnImg2 from '@/../public/source/2-resultPage/2-turnOver-btn.png';
import PlayAgainBtnImg from '@/../public/source/2-resultPage/2-playAgain-btn.png';
import resultImg1 from '@/../public/source/2-resultPage/2-01-text.png';
import resultImg2 from '@/../public/source/2-resultPage/2-02-text.png';
import resultImg3 from '@/../public/source/2-resultPage/2-03-text.png';
import resultImg4 from '@/../public/source/2-resultPage/2-04-text.png';
import resultImg5 from '@/../public/source/2-resultPage/2-05-text.png';
import resultImg6 from '@/../public/source/2-resultPage/2-06-text.png';
import resultImg7 from '@/../public/source/2-resultPage/2-07-text.png';
import resultImg8 from '@/../public/source/2-resultPage/2-08-text.png';
import resultImg9 from '@/../public/source/2-resultPage/2-09-text.png';
import resultImg10 from '@/../public/source/2-resultPage/2-10-text.png';
import resultImg11 from '@/../public/source/2-resultPage/2-11-text.png';
import resultImg12 from '@/../public/source/2-resultPage/2-12-text.png';
import resultImg13 from '@/../public/source/2-resultPage/2-13-text.png';
import resultImg14 from '@/../public/source/2-resultPage/2-14-text.png';
import resultImg15 from '@/../public/source/2-resultPage/2-15-text.png';
import resultImg16 from '@/../public/source/2-resultPage/2-16-text.png';
import resultImg17 from '@/../public/source/2-resultPage/2-17-text.png';
import resultImg18 from '@/../public/source/2-resultPage/2-18-text.png';
import resultImg19 from '@/../public/source/2-resultPage/2-19-text.png';
import resultImg20 from '@/../public/source/2-resultPage/2-20-text.png';
import resultImg21 from '@/../public/source/2-resultPage/2-21-text.png';
import resultImg22 from '@/../public/source/2-resultPage/2-22-text.png';





export default function ResultPage02({ selectedIndex, playAgain, onFlipBack }) {

  const resultImages = [
    resultImg1, resultImg2, resultImg3, resultImg4, resultImg5,
    resultImg6, resultImg7, resultImg8, resultImg9, resultImg10,
    resultImg11, resultImg12, resultImg13, resultImg14, resultImg15,
    resultImg16, resultImg17, resultImg18, resultImg19, resultImg20,
    resultImg21, resultImg22,
  ];
  

  if (selectedIndex == null || selectedIndex >= resultImages.length) return null;

  const resultImage = resultImages[selectedIndex];


    return (
      <>
         <>
        <div style={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'relative',
          overflow: 'hidden'
         }}>
          
          {/* 背景圖片 */}
          <div className="fixed inset-0 w-full h-full">
            <img
              src={BgImg4.src}
              alt="遊戲背景"
              className="w-full h-full object-cover"
            />
          </div>

           {/* 分析結果 */}
           <div style={{ 
              position: 'absolute',
              top: '115px',
              left:  '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
             
            }}>
              <div style={{
                width: '320px',
                height: 'auto'
              }}>
                
                <Image
                  src={resultImage.src}
                  alt="分析結果圖"    
                  
                  width={320}
                  height={418}
                  className="animate-fadeIn"
                  objectFit="contain"
                  priority
                />
              </div>
                
              
            </div>
    
            {/* 翻面按鈕（返回上頁） */}
            
            <button
                onClick={onFlipBack} 
                className="absolute bottom-[62px] left-1/2 translate-x-[5%] z-20 
                cursor-pointer active:translate-y-[4px] transition-transform duration-150"
                style={{ 
                position: 'absolute',
                bottom: '62px',
                left: '50%',
                transform: 'translateX(-105%)',
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
                zIndex: 2,
                transition: 'transform 0.3s ease'
              }}
            >
              <Image
                src={FlipBtnImg2.src}
                alt="翻回正面"
                width={160}
                height={72}
                style={{ objectFit: 'contain' }}
              />
            </button>


             {/* 再玩一次按鈕 */}
            
             <button
                onClick={playAgain}
                className="absolute bottom-[62px] left-1/2 translate-x-[5%] z-20 
                cursor-pointer active:translate-y-[4px] transition-transform duration-150"
                style={{ 
                position: 'absolute',
                bottom: '62px',
                left: '50%',
                transform: 'translateX(5%)',
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
                zIndex: 2,
                transition: 'transform 0.3s ease'
              }}
            >
              <Image
                src={PlayAgainBtnImg.src}
                alt="再玩一次"
                width={160}
                height={72}
                style={{ objectFit: 'contain' }}
              />
            </button>

        </div>
      </>
      </>
    );
  }