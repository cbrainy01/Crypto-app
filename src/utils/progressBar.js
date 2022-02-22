import styled from "styled-components";

const Bar = styled.div`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    background-color: ${(props) => props.barColor};
    border-radius: 10px;
`
const Progress = styled.div`
    border-radius: 10px;
    background-color: ${(props) => props.progressColor};
    height: 100%;
    width: ${(props) => props.progress}%;
`

export default function progressBar(progress, barColor, progressColor, width, height) {
    return(
        <Bar width={width} height={height} barColor={barColor}>
            <Progress progress={progress} progressColor={progressColor}></Progress>
        </Bar>
    )
}

