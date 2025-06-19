'use client';


import Image from "next/image";
import { useState, useEffect, useRef, Link } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";

import BgImg2 from '@/../public/source/0-startPage/0-2-bg.png';
import IntroImg from '@/../public/source/0-startPage/0-2-intro.png';
import StartBtnImg from '@/../public/source/0-startPage/0-2-start-btn.png';


export default function StartPage02({onNext}) {

  const onPlayAgain = () => {
    setTimeout(() => {
      setGameState(2); // 回到 GamePage
    }, 1500); // ✅ 可改為 1500ms
  }


    return (
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
              src={BgImg2.src}
              alt="遊戲背景"
              className="w-full h-full object-cover"
            />
          </div>

           {/* 遊戲介紹 */}
           <div style={{ 
              position: 'absolute',
              top: '81px',
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
                  src={IntroImg.src}
                  alt="遊戲介紹"
                  
                  width={320}
                  height={550}
                  objectFit="contain"
                  priority
                />
              </div>
                
              
            </div>
    
            {/* 開始按鈕 */}
            
            <button
                onClick={onNext}
                className="absolute bottom-[62px] left-1/2 translate-x-[5%] z-20 
                cursor-pointer active:translate-y-[4px] transition-transform duration-150"
                style={{ 
                position: 'absolute',
                bottom: '62px',
                left: '50%',
                transform: 'translateX(-50%)',
                border: 'none',
                background: 'none',
                padding: 0,
                cursor: 'pointer',
                zIndex: 2,
                transition: 'transform 0.3s ease'
              }}
            >
              <Image
                src={StartBtnImg.src}
                alt="開始遊戲"
                width={160}
                height={72}
                style={{ objectFit: 'contain' }}
              />
            </button>

        </div>
      </>
    );
  }