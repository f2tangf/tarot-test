'use client';


import Image from "next/image";
import { useState, useEffect, useRef, Link } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";

import BgImg3 from '@/../public/source/1-gamePage/1-1-bg.png';
import IntroImg2 from '@/../public/source/1-gamePage/1-1-text.png';
import PickBtnImg from '@/../public/source/1-gamePage/1-1-pick-btn.png';
import CardBackImg from '@/../public/source/1-gamePage/1-1-tarot-card-back.png';


export default function GamePage({onPick}) {


  const [isRotating, setIsRotating] = useState(true);
  const [cardDrop, setCardDrop] = useState(false);
  const centerCardRef = useRef(null);

  useEffect(() => {
    // 進入頁面即旋轉
    setIsRotating(true);
    setCardDrop(false);
  }, []);

  const handlePick = () => {
    setIsRotating(false);        // 停止旋轉
    setCardDrop(true);           // 啟動畫落
    
    setTimeout(() => {
      onPick();                  // 跳轉到 ResultPage01
      setCardDrop(false);       // 重置動畫狀態
    }, 1500); // 動畫結束後切頁
  };

  const totalCards = 22;
  const radius = 150;


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
              src={BgImg3.src}
              alt="遊戲背景"
              className="w-full h-full object-cover"
            />
          </div>

           {/* 遊戲指示 */}
           <div style={{ 
              position: 'absolute',
              top: '82px',
              left:  '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
             
            }}>
                
                <Image
                  src={IntroImg2.src}
                  alt="遊戲指示"
                  
                  width={184}
                  height={25}
                  objectFit="contain"
                  priority
                />
              
            </div>



            {/* 旋轉容器置中 */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] flex items-center justify-center">
              <div className={`${isRotating ? 'animate-spin-slow' : ''} relative w-full h-full`}>
                {Array.from({ length: totalCards }).map((_, i) => {
                  const angle = (360 / totalCards) * i * -1;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);
                  return (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        top: '40%',
                        left: '50%',
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      <Image
                        src={CardBackImg}
                        alt="card"
                        width={120}
                        height={195}
                        className="rounded shadow-md"
                      />
                    </div>
                  );
                })}
              </div>
            </div>




    
            {/* 拿取按鈕 */}
            
            <button
                onClick={onPick}
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
                src={PickBtnImg.src}
                alt="拿取卡牌"
                width={160}
                height={72}
                style={{ objectFit: 'contain' }}
              />
            </button>

        </div>
      </>
    );
  }