import styled from "styled-components";

const InputRange = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  margin-right: 15px;
  width: 200px;
  height: 7px;
  background: #ddd;
  border-radius: 5px;
  background-image: linear-gradient(#8d33ff, #8d33ff);
  background-size: ${(props: any) => props.defaultValue || 50}% 100%;
  background-repeat: no-repeat;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #8d33ff;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }
`;

export default InputRange;