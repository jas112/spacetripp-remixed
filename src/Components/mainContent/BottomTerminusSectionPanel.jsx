import React, {useState, useEffect} from 'react'
import './styles/SectionPanel.css'
import './styles/TerminusSectionPanel.css'

const BottomTerminusSectionPanel = ({currentStatusBool}) => {

    const [activatePanel, setActivatePanel] = useState(false);
    const [blinkingChevron, setBlinkingChevron] = useState(-1);


    useEffect(() => {
        let interval;
        if(activatePanel){
            interval = setInterval(() => {
                setBlinkingChevron((prev) => (prev - 1 + 9) % 9);
            }, 200);
        }else{
            setBlinkingChevron(-1);
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
    <div className={`top-section-panel btm-terminus-panel  section-panel ${activatePanel ? 'active-terminus-section-panel' : ''}`}>
        <div className="section-selection-activation-bar">
            <div className={`activation-bar-segment-3-active ${activatePanel ? 'current-section' : ''}`}></div> 
            <div className="activation-bar-segment-4-active ele-bar"></div>
        </div>
        <div className="section-comp-detail-panel bottom-section-comp-detail-panel">
            <div className='section-comp-detail-element-spacer detail-spacer bottom-detail-spacer btm-ele-spacer'>
                <div className={`spacer-frame bottom-spacer-frame ${activatePanel ? 'active-spacer-frame' : ''}`}>

                    {[...Array(3)].map((_, idxSpacer) => (
                        <div key={idxSpacer} className={`spacer-element bottom-spacer ${activatePanel ? 'active-spacer' : ''}`}></div>
                    ))}
  
                </div>
            </div>
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container bottom-eFrame terminus-eFrame'>

                    {[...Array(9)].map((_, idxEframeB) => (
                        <div key={idxEframeB} className={`eFrame-chevron eFrame-chevron-2 ${blinkingChevron === idxEframeB  ? 'blink-chevron' : ''}`}></div>
                    ))}

                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomTerminusSectionPanel