import React from "react"

const generateText = (str, attr, sMarker) => {
    return(
        <>
            {str.split('\n\n').map((paragraph, idx) => (
                <p key={`${sMarker}` + `${attr}` + idx}>
                    {paragraph.split('\n').map((line, i) =>(
                        <React.Fragment key={`${sMarker}` + `${attr}` + idx + i}>
                            {line}
                        </React.Fragment>
                    ))}
                </p>
            ))} 
        </>
    )
}

export { generateText };