import React, { useState, useEffect, useRef } from 'react';

/**
 * 这是一个通用的滚动进入动画组件，复刻了你原版 index.html 的逻辑。
 * 使用命名导出 (Named Export)，在其他文件中使用 { FadeInSection } 引入。
 */
export const FadeInSection = ({ children, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // 一旦进入视口，就将其设为可见（不再变回隐藏，保持平滑）
        if (entry.isIntersecting) setVisible(true);
      });
    }, { threshold: 0.1 });

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};