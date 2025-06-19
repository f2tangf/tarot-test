'use client';


import Image from "next/image";
import { useState, useEffect, useRef, Link } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";


import BgImg3 from '@/../public/source/1-gamePage/1-bg.png';
import FlipBtnImg1 from '@/../public/source/1-gamePage/1-2-turnOver-btn.png';
import ResultCardImg1 from '@/../public/source/1-gamePage/2-01-resultCard.png';
import ResultCardImg2 from '@/../public/source/1-gamePage/2-02-resultCard.png';
import ResultCardImg3 from '@/../public/source/1-gamePage/2-03-resultCard.png';
import ResultCardImg4 from '@/../public/source/1-gamePage/2-04-resultCard.png';
import ResultCardImg5 from '@/../public/source/1-gamePage/2-05-resultCard.png';
import ResultCardImg6 from '@/../public/source/1-gamePage/2-06-resultCard.png';
import ResultCardImg7 from '@/../public/source/1-gamePage/2-07-resultCard.png';
import ResultCardImg8 from '@/../public/source/1-gamePage/2-08-resultCard.png';
import ResultCardImg9 from '@/../public/source/1-gamePage/2-09-resultCard.png';
import ResultCardImg10 from '@/../public/source/1-gamePage/2-10-resultCard.png';
import ResultCardImg11 from '@/../public/source/1-gamePage/2-11-resultCard.png';
import ResultCardImg12 from '@/../public/source/1-gamePage/2-12-resultCard.png';
import ResultCardImg13 from '@/../public/source/1-gamePage/2-13-resultCard.png';
import ResultCardImg14 from '@/../public/source/1-gamePage/2-14-resultCard.png';
import ResultCardImg15 from '@/../public/source/1-gamePage/2-15-resultCard.png';
import ResultCardImg16 from '@/../public/source/1-gamePage/2-16-resultCard.png';
import ResultCardImg17 from '@/../public/source/1-gamePage/2-17-resultCard.png';
import ResultCardImg18 from '@/../public/source/1-gamePage/2-18-resultCard.png';
import ResultCardImg19 from '@/../public/source/1-gamePage/2-19-resultCard.png';
import ResultCardImg20 from '@/../public/source/1-gamePage/2-20-resultCard.png';
import ResultCardImg21 from '@/../public/source/1-gamePage/2-21-resultCard.png';
import ResultCardImg22 from '@/../public/source/1-gamePage/2-22-resultCard.png';



export default function ResultPage01({ 
  playAgain,
  selectedIndex: selectedIndexProp,
  setSelectedIndex: setSelectedIndexProp,
  shouldResample,
  setShouldResample,
  onFlip1,
}) {


  const cardPairs = [
    ResultCardImg1, ResultCardImg2, ResultCardImg3, ResultCardImg4, ResultCardImg5,
    ResultCardImg6, ResultCardImg7, ResultCardImg8, ResultCardImg9, ResultCardImg10,
    ResultCardImg11, ResultCardImg12, ResultCardImg13, ResultCardImg14, ResultCardImg15,
    ResultCardImg16, ResultCardImg17, ResultCardImg18, ResultCardImg19, ResultCardImg20,
    ResultCardImg21, ResultCardImg22,
  ];



  // 若你需要修改值，可先賦值給新的變數
  const selectedIndex = selectedIndexProp;
  const setSelectedIndex = setSelectedIndexProp;

  useEffect(() => {
    if (shouldResample) {
      const randomIndex = Math.floor(Math.random() * cardPairs.length);
      setSelectedIndex(randomIndex);
      setShouldResample(false); // 抽完後就關掉重新抽的旗標
    }
  }, [shouldResample]);



  if (selectedIndex === null) return null;

  const selectedCard = cardPairs[selectedIndex];


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

           {/* 結果卡牌 */}
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
                  src={selectedCard.src}
                  alt="選中卡牌"
                  
                  width={320}
                  height={550}
                  objectFit="contain"
                  priority
                />
              </div>
                
              
            </div>
    
            {/* 翻面按鈕 */}
            
            <button
                onClick={() => onFlip1(selectedIndex)}
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
                src={FlipBtnImg1.src}
                alt="翻面按鈕"
                width={160}
                height={72}
                style={{ objectFit: 'contain' }}
              />
            </button>

        </div>
      </>
    );
  }