import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/introduction');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-10 animate-float">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="%238b5a2b" />
          </svg>
        </div>
        <div className="absolute top-20 right-20 w-40 h-40 opacity-10 animate-float animation-delay-2">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="%238b5a2b" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-36 h-36 opacity-10 animate-float animation-delay-4">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" rx="10" fill="%238b5a2b" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 w-28 h-28 opacity-10 animate-float animation-delay-6">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="%238b5a2b" />
          </svg>
        </div>
      </div>
      
      {/* 主要内容区域 */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl px-4 relative z-10 fade-in">
        {/* 欢迎标识 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 title-gradient">
            欢迎来到古代建筑科普教育平台
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto description-shadow">
            探索中国古代建筑的魅力，了解中华民族传统文化的重要组成部分
          </p>
        </div>

        {/* 古代建筑装饰元素 */}
        <div className="flex items-center justify-center my-8 w-full">
          <div className="w-16 h-16 mx-4">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary opacity-70">
              <path d="M50 10 L10 30 L10 70 L50 90 L90 70 L90 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 10 L10 30 L50 50 L90 30 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M10 30 L10 70 L50 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M90 30 L90 70 L50 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div className="arch-decoration flex-1 mx-4"></div>
          <div className="w-16 h-16 mx-4">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary opacity-70">
              <rect x="20" y="40" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="30" y="20" width="40" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="40" y="0" width="20" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* 开始学习按钮 */}
        <button 
          className="btn-enhanced text-xl px-10 py-4 hover:scale-105 transition-all duration-300"
          onClick={handleStartLearning}
        >
          开始学习
        </button>
      </div>

      {/* 页脚 */}
      <footer className="py-6 w-full relative z-10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="arch-decoration mb-4 w-full opacity-50"></div>
          <p className="text-gray-600 text-sm md:text-base">© 2026 古代建筑科普教育平台 | 软件开发与应用类 - Web开发与应用</p>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;