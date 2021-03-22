import a from '../../images/a.jpg';
import b from '../../images/b.jpg';
import c from '../../images/c.jpg';
import d from '../../images/d.jpg';
import e from '../../images/e.jpg';
import React from 'react'
import { useMediaQuery } from 'react-responsive'
 
const Bootstrap = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 800px)'
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 800px)'
  })
 
  return (
  <div>
      { isDesktopOrLaptop && <>
        <div className="body2" >
                    <div className="jumbotron" >
                        <div className="jumbotron-inner">
                            <h2>Let's plan your dream holiday destination!</h2>
                            <p>
                                Famed to be a paradise on earth, Goa has the right mix of everything that a tourist destination has to offer.
                                It is an ideal for tourist activities. It is beautiful because of its unbeatable greenery oozing out of
                                the dense palm cover even at the most popular stretches of beaches.
                                The glimpse of peaceful life of the fisherman villages,The exciting water sports activities such as scuba diving and snorkelling, boat rides, water skiing for nimble footed ones, boating, cruising, surfing,
                                parasailing and jet skiing options would satisfy every adventure lover’s heart.
                   </p>
                        </div>
                    </div>
        </div>
        <br />
        <br />
      <div className="body">
    <div className="main">
      <div className="master">
        <input type="radio" name="radio-btn" id="r1"/>
        <input type="radio" name="radio-btn" id="r2"/>
        <input type="radio" name="radio-btn" id="r3"/>
        <input type="radio" name="radio-btn" id="r4"/>
        <input type="radio" name="radio-btn" id="r5"/>

        <div className="slide first"><img src={e} alt="Image1"/></div>
        <div className="slide"><img src={b} alt="Image2"/></div>
        <div className="slide"><img src={c} alt="Image3"/></div>
        <div className="slide"><img src={d} alt="Image4"/></div>
        <div className="slide"><img src={a} alt="Image5"/></div>

          <span className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>            
          </span>
      </div>  

        <div className="navigation-manual">
          <label htmlFor="r1" className="manual-btn"></label>
          <label htmlFor="r2" className="manual-btn"></label>
          <label htmlFor="r3" className="manual-btn"></label>
          <label htmlFor="r4" className="manual-btn"></label>
          <label htmlFor="r5" className="manual-btn"></label>        
        </div>
    </div>
      </div>
      </>}
      { isTabletOrMobileDevice && <>
        <div>
          <br />
          <br />
        <div className="body4" >
                    <div className="jumbotron" >
                        <div className="jumbotron-inner">
                            <h2>Let's plan your dream holiday destination!</h2>
                            <p>
                                Famed to be a paradise on earth, Goa has the right mix of everything that a tourist destination has to offer.
                                It is beautiful because of its unbeatable greenery oozing out of
                                the dense palm cover even at the most popular stretches of beaches.
                                The glimpse of peaceful life of the fisherman villages,such as scuba diving and snorkelling, boat rides, water
                                skiing for nimble footed ones, boating, cruising, surfing,
                                parasailing and jet skiing options would satisfy every adventure lover’s heart.
                             </p>
                         </div>
                       </div>
              </div>
        <br/>
        <br/>
        <div className="body3">
    <div className="main">
      <div className="master">
        <input type="radio" name="radio-btn" id="r1"/>
        <input type="radio" name="radio-btn" id="r2"/>
        <input type="radio" name="radio-btn" id="r3"/>
        <input type="radio" name="radio-btn" id="r4"/>
        <input type="radio" name="radio-btn" id="r5"/>

        <div className="slide first"><img src={e} alt="Image1"/></div>
        <div className="slide"><img src={b} alt="Image2"/></div>
        <div className="slide"><img src={c} alt="Image3"/></div>
        <div className="slide"><img src={d} alt="Image4"/></div>
        <div className="slide"><img src={a} alt="Image5"/></div>

          <span className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>            
          </span>
      </div>  

        <div className="navigation-manual">
          <label htmlFor="r1" className="manual-btn"></label>
          <label htmlFor="r2" className="manual-btn"></label>
          <label htmlFor="r3" className="manual-btn"></label>
          <label htmlFor="r4" className="manual-btn"></label>
          <label htmlFor="r5" className="manual-btn"></label>        
        </div>
    </div>
          </div>
          </div>
      </>}
      </div>
      )
}
export default Bootstrap
