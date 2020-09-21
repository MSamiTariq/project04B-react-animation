import React from 'react';
import './MainPage.modules.css';
import { Text } from './Text';
import { Footer } from './Footer';
import studying from '../images/studying.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {Services} from './Services';
import {Products} from './Products';
import useWebAnimations from "@wellyshen/use-web-animations";

const Mainpage = () => {
    const { ref, playState } = useWebAnimations({
        keyframes: {
          transform: "translateY(-50px)",
        },
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: 'Infinity', // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
      });
    AOS.init();
    return (
        <div className="background">
            <nav>
            <div
                data-aos="slide-left" data-aos-duration="3000" data-aos-once="true"
            >
                <div>
                    <li className="menuList" >

                        <a href="#footer"><ul>About us</ul></a>
                        <a href="#"><ul>Contact us</ul></a>
                        <a href="#services"><ul>Services</ul></a>
                        <a href="#products"><ul>Products</ul></a>
                    </li>
                </div>
                </div>
            </nav>
            <Text />
            <img src={studying} className="study" alt="logo" ref= {ref}/>
            <Products />
            <Services />
            <div
                data-aos="slide-left" data-aos-duration="3000" data-aos-once="true"
            >
            <Footer />
            </div>
        </div>
    )
}

export default Mainpage;
