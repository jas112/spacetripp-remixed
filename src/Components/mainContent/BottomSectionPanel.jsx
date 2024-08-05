import React, {useState, useEffect} from 'react'
import './styles/Animations.css'
import './styles/SectionElement.css'
import './styles/SectionPanel.css'

const BottomSectionPanel = ({currentStatusBool}) => {

    const [activatePanel, setActivatePanel] = useState(false);
    const [blinkingElement, setBlinkingElement] = useState(-1);


    useEffect(() => {
        let interval;
        if(activatePanel){
            interval = setInterval(() => {
                setBlinkingElement((prev) => (prev + 1) % 6);
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
    <div className={`bottom-section-panel  section-panel ${activatePanel ? 'active-section-panel' : ''}`}>
        <div className="section-selection-activation-bar">
            <div className="activation-bar-segment-4-active"></div>
            <div className={`activation-bar-segment-3-active ${activatePanel ? 'current-section' : ''}`}></div>
        </div>
        <div className="section-comp-detail-panel bottom-section-comp-detail-panel">
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container bottom-eFrame'>

                    {[...Array(6)].map((_, idxElement) => (
                        <div key={idxElement} className={`comp-element-1 endpoint-comp-element comp-element-1-active bt-element ${blinkingElement === idxElement ? 'active-element' : ''}`}></div>
                    ))}

                </div>
            </div>
            <div className='section-comp-detail-element-spacer detail-spacer bottom-detail-spacer'>
                <div className={`spacer-frame bottom-spacer-frame ${activatePanel ? 'active-spacer-frame' : ''}`}>

                    {[...Array(3)].map((_, idxSpacer) => (
                        <div key={idxSpacer} className={`spacer-element bottom-spacer ${activatePanel ? 'active-spacer' : ''}`}></div>
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomSectionPanel