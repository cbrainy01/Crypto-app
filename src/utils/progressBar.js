import styled from "styled-components";
const Bar = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.barColor};
    border-radius: 20px;
`
const Progress = styled.div`
    border-radius: 20px;
    background-color: ${(props) => props.progressColor};
    height: 100%;
    width: ${(props) => props.progress};
`

function ProgressBar(progress, barColor, progressColor, width, height) {
    return(
        <Bar width={width} height={height} barColor={barColor}>
            <Progress progress={progress} progressColor={progressColor}></Progress>
        </Bar>
    )
}