'use client';


import Image from "next/image";
import { useState, useEffect, useRef, Link } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";

import BgImg from '@/../public/source/0-startPage/0-1-bg.png';
import TitleImg from '@/../public/source/0-startPage/0-1-title.png';
import NextBtnImg from '@/../public/source/0-startPage/0-1-next-btn.png';


export default function StartPage01({onNext}) {


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
              src={BgImg.src}
              alt="遊戲背景"
              className="w-full h-full object-cover"
            />
          </div>

           {/* 遊戲名稱 */}
           <div style={{ 
              position: 'absolute',
              top: '317px',
              left:  '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
             
            }}>
              <div style={{ 
                width: '100%',     
                maxWidth: 332,      
                height: 'auto',
              }}>
                
                <Image
                  src={TitleImg.src}
                  alt="遊戲名稱"
                  
                  width={168}
                  height={90}
                  objectFit="contain"
                  priority
                />
              </div>
                
              
            </div>
    
            {/* 下一步按鈕 */}
            
            <button
                onClick={onNext}
                className="absolute bottom-[62px] left-1/2 translate-x-[5%] z-20 
                cursor-pointer active:translate-y-[4px] transition-transform duration-150"
                style={{ 
                position: 'absolute',
                bottom: '355px',
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
                src={NextBtnImg.src}
                alt="下一步"
                width={160}
                height={72}
                style={{ objectFit: 'contain' }}
              />
            </button>

        </div>
      </>
    );
  }