import React, {useState, useEffect} from 'react'
import './styles/SectionPanel.css'
import './styles/TerminusSectionPanel.css'

const TopTerminusSectionPanel = ({currentStatusBool}) => {

    // console.log(`from TopterminusSectionPanel - currentStatusBool = ${currentStatusBool}`);

    const [activatePanel, setActivatePanel] = useState(false);
    const [blinkingChevron, setBlinkingChevron] = useState(-1);


    useEffect(() => {
        let interval;
        if(activatePanel){
            interval = setInterval(() => {
                setBlinkingChevron((prev) => (prev + 1) % 9);
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
    <div className={`top-section-panel tp-terminus-panel  section-panel ${activatePanel ? 'active-terminus-section-panel' : ''}`}>
        <div className="section-comp-detail-panel top-section-comp-detail-panel">
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container top-eFrame terminus-eFrame'>

                    {[...Array(9)].map((_, idxEframeA) => (
                        <div key={idxEframeA} className={`eFrame-chevron eFrame-chevron-1 ${blinkingChevron === idxEframeA  ? 'blink-chevron' : ''}`}></div>
                    ))}

                </div>
            </div>
            <div className='section-comp-detail-element-spacer detail-spacer top-detail-spacer tp-ele-spacer'>
                <div className={`spacer-frame top-spacer-frame ${activatePanel ? 'active-spacer-frame' : ''}`}>

                    {[...Array(3)].map((_, idxSpacer) => (
                        <div key={idxSpacer} className={`spacer-element top-spacer ${activatePanel ? 'active-spacer' : ''}`}></div>
                    ))}

                </div>
            </div>
        </div>
        <div className="section-selection-activation-bar">
            <div className="activation-bar-segment-1-active ele-bar"></div>
            <div className={`activation-bar-segment-2-active ${activatePanel ? 'current-section' : ''}`}></div>
        </div>
    </div>
  )
}

export default TopTerminusSectionPanel