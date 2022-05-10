import React, {useRef, useEffect} from 'react';
import TimelineObserver from "./timeline/index";


const Timeline = ({ setObserver, callback }) => {
  
    const timeline1 = useRef(null);
    const timeline2 = useRef(null);
    const timeline3 = useRef(null);
    const square1 = useRef(null);
    const square2 = useRef(null);
    const square3 = useRef(null);
  
    useEffect(() => {
      setObserver(timeline1.current);
      setObserver(timeline2.current);
      setObserver(timeline3.current);
      setObserver(square1.current);
      setObserver(square2.current);
      setObserver(square3.current);
    }, [setObserver]);
  
    return (
      <div className="wrapper">
        <div className="squareWrapper">
            <div id="square1" ref={square1} className="square"></div>
        </div>
        <div id="timeline1" ref={timeline1} className="timeline" />

        <div className="squareWrapper">
          <div id="square2" ref={square2} className="square"></div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />

        <div className="squareWrapper">
          <div id="square3" ref={square3} className="square"></div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />
      </div>
    );
};
  

export const Roadmap = () => {
    return (
        <div id="roadmap" className="roadmap position-relative">
            <div className="row">
                <div className='col-lg-12 col-xl-6'>
                    <div className="col-12">
                        <div className="roadmap-title">Roadmap</div>
                        <div className="roadmap-overview">Our roadmap 1.0 will be updated according to the project's evolution.</div>
                    </div>

                    <div className="position-relative">
                        <div className="story">
                            <div className="story-title">A PIECE OF POP CULTURE</div>
                            <p className='story-content'>When our collection is sold out, we will create and start the community wallet with 10 ETH. This wallet will be used for further donations, investments and promotions as voted on by the community. We will also reward our most active and helpful community members based on our discord ranking system.</p>
                        </div>
                        <div className="story">
                            <div className="story-title">MERCHANDISING</div>
                            <p className='story-content'>When our collection is sold out, we will create and start the community wallet with 10 ETH. This wallet will be used for further donations, investments and promotions as voted on by the community. We will also reward our most active and helpful community members based on our discord ranking system.
                            </p>
                        </div>
                        <div className="story">
                            <div className="story-title">THE LEGENDARY BUNNIES</div>
                            <p className='story-content'>When our collection is sold out, we will create and start the community wallet with 10 ETH. This wallet will be used for further donations, investments and promotions as voted on by the community. We will also reward our most active and helpful community members based on our discord ranking system.</p>
                        </div>

                        <TimelineObserver
                            initialColor="#F0AAAA"
                            fillColor="#FFFFFF"
                            handleObserve={(setObserver) => (
                                <Timeline
                                    className="timeline"
                                    setObserver={setObserver}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <img className='woman-image' src='./woman-charactor.svg' alt="woman image"></img>
                </div>
            </div>
        </div>
    );
}