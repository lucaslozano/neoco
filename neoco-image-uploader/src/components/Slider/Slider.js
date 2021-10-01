import * as React from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";

const Slider = (props) => (
  <StyledSlider
    defaultValue={[1.5]}
    renderTrack={Track}
    renderThumb={Thumb}
    min={1}
    max={8}
    step={0.001}
    {...props}
  />
);

const StyledSlider = styled(ReactSlider)`
  width: 50%;
  height: 14px;
  margin-top: 8px;
`;

const StyledThumb = styled.div`
  margin-top: -5px;
  height: 14px;
  width: 14px;
  text-align: center;
  background-color: #770667;
  border-radius: 50%;
  cursor: grab;
`;

const Thumb = (props) => <StyledThumb {...props} />;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2
      ? "#f00"
      : props.index === 1
      ? "#e9e9e9"
      : "rgb(163, 0, 80)"};
  border-radius: 999px;
  height: 4px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export default Slider;
