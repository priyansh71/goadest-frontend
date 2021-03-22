import React from 'react'
import { useMediaQuery } from 'react-responsive'
 
const Jumbotron = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 800px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 800px)'
    })
 
    return (
        <div>
        { isTabletOrMobileDevice && <>
            <div>
                <div className="feature">Goa.The word is enough.</div>
            </div>    
          </>}
        
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
            </>
            }
            
              </div>

    )
}

export default Jumbotron 