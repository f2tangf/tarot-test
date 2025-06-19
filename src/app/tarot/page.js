'use client';


import Image from "next/image";
import { useState, useEffect, useRef, Link } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";


import StartPage01 from '@/component/page/StartPage01';
import StartPage02 from '@/component/page/StartPage02';
import GamePage from '@/component/page/GamePage';
import ResultPage01 from '@/component/page/ResultPage01';
import ResultPage02 from '@/component/page/ResultPage02';

import BgImg from '@/../public/source/0-startPage/0-1-bg.png';
import TitleImg from '@/../public/source/0-startPage/0-1-title.png';
import NextBtnImg from '@/../public/source/0-startPage/0-1-next-btn.png';





export default function tarot() {

  return <RedirectToTarot />;

  function RedirectToTarot() {
    const router = useRouter();
    useEffect(() => {
      router.push('/tarot');
    }, []);
    return null;
  }


  const [gameState, setGameState] = useState(0); // 0~4 各個畫面
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [shouldResample, setShouldResample] = useState(true);

  const delaySwitch = (callback, delay = 1500) => setTimeout(callback, delay);

  const onNext    = () => setGameState((s) => s + 1);
  const onPick    = () => setGameState(3);   
  const onFlip1    = () => setGameState(4); 
  const goBackToResultPage01 = () => setGameState(3);
  const playAgain = () => {
    setShouldResample(true);    // ✅ 回到GamePage時要重新抽
    setGameState(2);            // ✅ 切回GamePage畫面
  };


  const pages =[
    <StartPage01 onNext={() => setGameState(1)}/>,
    <StartPage02 onNext={() => setGameState(2)}/>,
    <GamePage    onPick={() => setGameState(3)}/>,
    <ResultPage01 onFlip1={() => setGameState(4)}/>,
    <ResultPage02 selectedIndex={() => setGameState(3)} onPlayAgain={() => setGameState(2)} />,
  ]


    return (
      <>
        <div style={{ 
          width: '100vw', 
          height: '100vh', 
          position: 'relative',
          overflow: 'hidden'
         }}>

          {gameState === 0 && <StartPage01 onNext={onNext} />}
          {gameState === 1 && <StartPage02 onNext={onNext} />}
        
          {gameState === 2 && <GamePage onPick={onPick} />}

          {gameState === 3 && (<ResultPage01
            onFlip1={(index) => {
              setSelectedIndex(index);
              setGameState(4);
            }}
            playAgain={playAgain}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            shouldResample={shouldResample}
            setShouldResample={setShouldResample}
          />
          )}

          {gameState === 4 && <ResultPage02
            selectedIndex={selectedIndex}
            onFlipBack={() => setGameState(3)}      // 回翻面前
            playAgain={playAgain}                  // 再玩一次
          />}
              
        </div>

      </>
    );
  }