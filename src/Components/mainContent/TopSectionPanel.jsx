import React, {useState, useEffect} from 'react'
import './styles/Animations.css'
import './styles/SectionElement.css'
import './styles/SectionPanel.css'

const TopSectionPanel = ({currentStatusBool}) => {

    const [activatePanel, setActivatePanel] = useState(false);
    const [blinkingElement, setBlinkingElement] = useState(-1);


    useEffect(() => {
        let interval;
        if(activatePanel){
            interval = setInterval(() => {
                setBlinkingElement((prev) => (prev - 1 + 6) % 6);
            }, 200);
        }else{
            setBlinkingElement(-1);
        }

      return () => {
        clearInterval(interval);
      }
      
    }, [activatePanel])
    

    useEffect(() => {

        let interval;
        let timer;
        if (currentStatusBool) {

            timer = setTimeout(() => {
                setActivatePanel(true);
            }, 1500);

        }else{
            setActivatePanel(false);
        }

        return () => {
            clearTimeout(timer);
        }

      }, [currentStatusBool]);

  return (
    <div className={`top-section-panel section-panel ${activatePanel ? 'active-section-panel' : ''}`}>
        <div className="section-comp-detail-panel top-section-comp-detail-panel">
            <div className='section-comp-detail-element-spacer detail-spacer top-detail-spacer'>
                <div className={`spacer-frame top-spacer-frame ${activatePanel ? 'active-spacer-frame' : ''}`}>

                    {[...Array(3)].map((_, idxSpacer) => (
                        <div key={idxSpacer} className={`spacer-element top-spacer ${activatePanel ? 'active-spacer' : ''}`}></div>
                    ))}

                </div>
            </div>
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container top-eFrame'>
                    <div className='section-comp-detail-element-frame-container bottom-eFrame'>

                        {[...Array(6)].map((_, idxElement) => (
                            <div key={idxElement} className={`comp-element-1 endpoint-comp-element comp-element-1-active tp-element ${blinkingElement === idxElement ? 'active-element' : ''}`}></div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
        <div className="section-selection-activation-bar">
            <div className={`activation-bar-segment-2-active ${activatePanel ? 'current-section' : ''}`}></div>
            <div className="activation-bar-segment-1-active"></div>
        </div>
    </div>
  )
}

export default TopSectionPanel
