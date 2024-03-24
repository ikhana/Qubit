import React, { useEffect } from 'react';
import './Timeline.scss';

const Timeline = () => {
  useEffect(() => {
    const throttle = (type, name, obj) => {
      obj = obj || window;
      let running = false;
      const func = () => {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(() => {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    throttle('resize', 'optimizedResize');

    const roadmap = (() => {
      const wrapper = document.querySelector('.js-roadmap-timeline');
      const timeframes = document.querySelectorAll('.js-roadmap-timeframe');
      const mediaQuery = window.matchMedia('(min-width: 1201px)');
      let topMaxHeight;
      let bottomMaxHeight;

      const handleStyling = () => {
        if (mediaQuery.matches) {
          applyHeights();
          styleWrapper();
        } else {
          clearWrapperStyling();
        }
      };

      const applyHeights = () => {
        topMaxHeight = getMaxHeight(timeframes, 0);
        bottomMaxHeight = getMaxHeight(timeframes, 1);
      };

      const getMaxHeight = (els, start) => {
        let maxHeight = 0;
        for (let i = start; i < els.length - 1; i += 2) {
          const elHeight = els[i].offsetHeight;
          maxHeight = Math.max(maxHeight, elHeight);
        }
        return maxHeight;
      };

      const styleWrapper = () => {
        wrapper.style.paddingBottom = `${bottomMaxHeight}px`;
        wrapper.style.paddingTop = `${topMaxHeight}px`;
      };

      const clearWrapperStyling = () => {
        wrapper.style.paddingBottom = '';
        wrapper.style.paddingTop = '';
      };

      handleStyling();
      window.addEventListener('optimizedResize', handleStyling);
    })();
  }, []);

  return (
    <div className="roadmap" id='roadmap'> 
      <div className="roadmap-bg"></div>
      <h1 className="roadmap-title">Roadmap</h1>
      <ol className="roadmap-timeline js-roadmap-timeline">
        <li className="roadmap-timeframe js-roadmap-timeframe">
          <div className="roadmap-date">Q2 2024</div>
          <svg
            className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            viewBox="-2 0 54 80"
          >
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          </svg>
  
          <ul className="roadmap-events">
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Platform Launch: Introducing QubitN
            </li>
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              QubitN's decentralized computing platform goes live, offering blockchain-agnostic orchestration and GPU hosting solutions.
            </li>
          </ul>
        </li>
  
        <li className="roadmap-timeframe js-roadmap-timeframe">
          <div className="roadmap-date">Q3 2024</div>
          <svg
            className="roadmap-swirly"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="none"
            viewBox="-2 0 54 80"
          >
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
            <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          </svg>
          <ul className="roadmap-events">
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Community Growth & Engagement Initiatives
            </li>
            <li className="roadmap-event">
              <div className="roadmap-vline"></div>
              Launch of community engagement programs to foster collaboration and innovation within the QubitN ecosystem.
            </li>
          </ul>
        </li>
        <li className="roadmap-timeframe js-roadmap-timeframe">
        <div className="roadmap-date">Q4 2024</div>
        <svg
          className="roadmap-swirly"
          version="1.1"
          xmlns="http://www.w3.org/3000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="none"
          viewBox="-2 0 54 80"
        >
          <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
        </svg>
        <ul className="roadmap-events">
          <li className="roadmap-event">
            <div className="roadmap-vline"></div>
            Decentralized Data Marketplaces Launch
          </li>
          <li className="roadmap-event">
            <div className="roadmap-vline"></div>
            Introduction of secure, decentralized data marketplaces, empowering users to monetize and share data ethically.
          </li>
        </ul>
      </li>

      <li className="roadmap-timeframe js-roadmap-timeframe">
        <div className="roadmap-date">Q1 2025</div>
        <svg
          className="roadmap-swirly"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="none"
          viewBox="-2 0 54 80"
        >
          <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
        </svg>
        <ul className="roadmap-events">
          <li className="roadmap-event">
            <div className="roadmap-vline"></div>
            AI & ML Integration for Enhanced Computing
          </li>
          <li className="roadmap-event">
            <div className="roadmap-vline"></div>
            Rollout of AI and ML-driven features to automate and optimize decentralized computing processes.
          </li>
        </ul>
      </li>

      <li className="roadmap-timeframe js-roadmap-timeframe">
        <div className="roadmap-date">Q2 2025</div>
        <svg
          className="roadmap-swirly"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="none"
          viewBox="-2 0 54 80"
        >
          <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
          <path d="m50,80c0,-21 -49,-26 -49,-59c0,-13 0,-19 -0,-19"></path>
        </svg>
        <ul className="roadmap-events">
          <li className="roadmap-event">
            <div className="roadmap-vline"></div>
            Global Expansion and Strategic Partnerships
          </li>
          <li className="roadmap-event">
            <div className="roadmap-vline"></div>
            Expanding QubitN's reach through global partnerships, enhancing the ecosystem's capabilities and accessibility.
          </li>
        </ul>
      </li>
    </ol>
  </div>
);
  }
  
  export default Timeline;
