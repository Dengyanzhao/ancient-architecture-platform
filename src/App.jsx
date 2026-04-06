import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArchitectureIntroduction from './components/ArchitectureIntroduction';
import QuizGame from './components/QuizGame';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* 导航栏 */}
        <nav className="bg-primary text-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-2xl font-bold">古代建筑科普学习平台</h1>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-secondary transition-colors duration-300">
                建筑介绍
              </Link>
              <Link to="/quiz" className="hover:text-secondary transition-colors duration-300">
                闯关游戏
              </Link>
            </div>
          </div>
        </nav>

        {/* 装饰条 */}
        <div className="arch-decoration"></div>

        {/* 主要内容 */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ArchitectureIntroduction />} />
            <Route path="/quiz" element={<QuizGame />} />
          </Routes>
        </main>

        {/* 页脚 */}
        <footer className="bg-primary text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>© 2026 古代建筑科普学习平台 | 软件开发与应用类 - Web开发与应用</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;