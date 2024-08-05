import ScrollTransformData from "./scrollTransformData";

// Root ScrollBar Transform Data

const sBarTrackBGolor_S_Transform = new ScrollTransformData(
    '#000000',
    '#000000',
    'linear-gradient(#ff450010, #ff450030)',
    '#ff450050'
);

const sBarThumbBGColor_S_Transform = new ScrollTransformData(
    '#ffffff40',
    '#ffffff40',
    '#ff450040',
    '#eb8d0a40'
);

const sBarThumbBorder_S_Transform = new ScrollTransformData(
    '2px solid #ffffff40',
    '2px solid #ffffff',
    '2px solid #ff4500',
    '2px solid #eb8d0a' 
);


const scrollTransforms = {
    sBarTrackBGolor: sBarTrackBGolor_S_Transform,
    sBarThumbBGColor: sBarThumbBGColor_S_Transform,
    sBarThumbBorder: sBarThumbBorder_S_Transform
}

export default scrollTransforms