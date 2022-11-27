import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className='fixed right-6 bottom-12 z-20'>
     <FaArrowCircleUp className='text-4xl bg-white rounded shadow-lg hover:bg-black hover:text-white' onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </button>
  );
}
  
export default ScrollButton;