import React, { useState, useEffect, useRef } from 'react';

const Stars = (params) => {
    // const [stars_style, set_stars_style] = useState('')
  
    const [stars_1, set_stars_1] = useState('')
    const [stars_2, set_stars_2] = useState('')
  
    const make_stars = () => {
        const maximum_stars_depth = (params.app_ref.current.clientHeight) * 0.75;
        const star_density = 1e-4; // stars per pixel per category
    
        const num_stars = star_density * params.app_ref.current.clientHeight * params.app_ref.current.clientWidth;
    
        set_stars_1(get_stars_style(maximum_stars_depth, num_stars));
        set_stars_2(get_stars_style(maximum_stars_depth, num_stars/2));
      }
    

      useEffect(() => {
        make_stars()
        window.addEventListener('resize', make_stars, false);
      }, [])
    
  
    const weighted_random = (low, high) => {
      // creates a 60% chance of being in top 50%, 30% chance of top 70%, 10% chance of top 100%
      const accuracy = 1e2;
      const initial_seed = Math.random();
      if (initial_seed <= 0.5) {
        return Math.round((Math.random() * (high * 0.4) + low) * accuracy) / accuracy;
      } else if (initial_seed <= 0.8) {
        return Math.round((Math.random() * (high * 0.6) + low) * accuracy) / accuracy;
      } else {
        return Math.round((Math.random() * (high * 1.0) + low) * accuracy) / accuracy;
      }
    }
  
    const get_stars_style = (max, num_stars=300) => {
      let stars_style = '';
      for (let i = 0; i < num_stars; i++) {
        stars_style += '' + Math.round((Math.random() * 100 * 1e2)) / 1e2 + 'vw ' + weighted_random(0, max) + 'px #FFF, '
      }
      stars_style = stars_style.slice(0, stars_style.length - 2);
      return stars_style
    }
  
    return <>
      <div id='stars2' class='stars' style={{ boxShadow: stars_2, width: '2px', height: '2px', background: 'transparent'}}></div>
      <div id='stars1' class='stars' style={{ boxShadow: stars_1, width: '1px', height: '1px', background: 'transparent' }}></div>
    </>
  }
  



export default Stars;