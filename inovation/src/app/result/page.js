// src/app/play.js
'use client';
import './result.css';

export default function Result() {
    const handleChangeShop = () => {
      window.location.href = 'http://localhost:3000/';
    };
  
    return (
      <main className="main">
        <h1 className="heading">ゴール！！</h1>
        <p className="paragraph">あなたは"店名"に到着しました！！</p>
        <div className="buttons">
          <button className="button" onClick={handleChangeShop}>ほかの店を探す</button>
        </div>
      </main>
    );
  }