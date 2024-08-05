import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faBackwardStep, faForwardStep, faRepeat } from '@fortawesome/free-solid-svg-icons';
import './styles/AudioPlayer.css'
import bgMusic1 from '../../assets/audio/Stars_in_the_Night.mp3'
import bgMusic2 from '../../assets/audio/Galactic_Voyage.mp3'
import bgMusic3 from '../../assets/audio/Road_to_Glory.mp3'
import bgMusic4 from '../../assets/audio/Cosmic_Warrior.mp3'

const tracks = [
    {track_number: 1, title: 'Stars in the Night', src: bgMusic1},
    {track_number: 2, title: 'Galactic Voyage', src: bgMusic2},
    {track_number: 3, title: 'Road to Glory', src: bgMusic3},
    {track_number: 4, title: 'Cosmic Warrior', src: bgMusic4}
]

const AudioPlayer = ({        
    musicActive,
    setMusicActive}) => {

    const audioRef = useRef(null);
    const [audioVolume, setAudioVolume] = useState(0.11);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    // const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
    const [isRepeating, setIsRepeating] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentTrack = tracks[currentTrackIdx];

    const playAudio = () => {
        if(musicActive){
            audioRef.current.play();
            setIsPlaying(true);
        }
    }

    const pauseAudio = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        if(isPlaying){
            setIsPlaying(false);
        }
    }

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setAudioVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    const onLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    }

    const onTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    }

    const onSeek = (e) => {
        const newTime = e.target.value;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    }

    const selectTrack = (idx) => {
        setCurrentTrackIdx(idx);
        audioRef.current.pause();
        audioRef.current.src = tracks[idx].src;
        audioRef.current.load();
        playAudio();
    }

    const handleForward = () => {
        selectTrack((currentTrackIdx + 1) % tracks.length);
    }

    const handleBackward = () => {
        selectTrack((currentTrackIdx - 1 + tracks.length) % tracks.length);
    }

    const toggleRepeat = () => {
        setIsRepeating(!isRepeating);
    }

    useEffect(() => {
        const audioElement = audioRef.current;
        audioElement.volume = audioVolume;
    //   audioElement.autoplay = true;

        if(!musicActive && isPlaying){
            pauseAudio();
        }else if(!musicActive){
            stopAudio();
        }else if(musicActive){
            playAudio();
        }

        const handleEnded = () => {
            if(isRepeating){
                audioElement.currentTime = 0;
                playAudio();
            }else{
                handleForward();
            }
        }

        audioElement.addEventListener('loadedmetadata', onLoadedMetadata);
        audioElement.addEventListener('timeupdate', onTimeUpdate);
        audioElement.addEventListener('ended', handleEnded);

        //   console.log(`current volume: ${audioVolume}`);
    
        return () => {
            audioElement.removeEventListener('loadedmetadata', onLoadedMetadata);
            audioElement.removeEventListener('timeupdate', onTimeUpdate);
            audioElement.removeEventListener('ended', handleEnded);
        }
    }, [audioVolume, isRepeating, currentTrackIdx, musicActive])
    

  return (
    <div 
        className={`audio-player-frame ${musicActive ? '' : 'music-disabled'}`}
    >
        <audio ref={audioRef}>
            <source src={currentTrack.src} type='audio/mpeg' />
            This browser does not support the audio element.
        </audio>
        <div className='control-console'>
            <div className='control-console-panel btn-panel'>
                <div className={`audio-player-btn ${isPlaying ? 'pause' : 'play'}`} onClick={isPlaying ? pauseAudio : playAudio} title={isPlaying ? 'Pause' : 'Play'}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </div>
                <div className='audio-player-btn stop' onClick={stopAudio} title='Stop'>
                    <FontAwesomeIcon icon={faStop} />
                </div>
                <div className='audio-player-btn backward' onClick={handleBackward} title='Prev Track'>
                    <FontAwesomeIcon icon={faBackwardStep} />
                </div>
                <div className='audio-player-btn forward' onClick={handleForward} title='Next Track'>
                    <FontAwesomeIcon icon={faForwardStep} />
                </div>
                <div className={`audio-player-btn repeat ${isRepeating ? 'repeat-active' : 'repeat-inactive'}`} onClick={toggleRepeat} title={`${isRepeating ? 'Repeat On' : 'Repeat Off'}`}>
                    <FontAwesomeIcon icon={faRepeat} />
                </div>
            </div>
            {/* <div className='control-console-panel slider-panel'>
                <input 
                    className='volume-control'
                    type='range'
                    min={0}
                    max={1}
                    step={0.01}
                    value={audioVolume}
                    onChange={changeVolume}
                />
            </div> */}
        </div>
        <div className='track-nfo'>
            <div className='track-title'>
                {currentTrack.title}
            </div>
            <div className='track-duration'>
                {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)} / {Math.floor(duration / 60)}:{('0' + (duration % 60)).slice(-2)}
            </div>
        </div>
        {/* <div className='seek-bar-frame'>
        </div>
        <div className='time-display'>
            {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)} / {Math.floor(duration / 60)}:{('0' + (duration % 60)).slice(-2)}
        </div> */}    
    </div>
  )
}

export default AudioPlayer