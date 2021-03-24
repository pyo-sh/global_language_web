import styled from 'styled-components';
import { Color } from 'Contant';

const deleteButtonDisplay = `
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;
`;

const triangleSize = 7;
const triangleColor = Color.dark_gray;

const SelectLanguageBox = styled.div`
    width: 120px;
    height: 40px;

    display:block;
    border: 1px solid black;
    border-radius: 5px;

    .LanguageBox-Button{
        ${deleteButtonDisplay}
        width: 100%;
        height: 100%;
        padding: 0 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .LanguageBox-Triangle {
        width: 0px;
        height: 0px;
        margin-bottom: -${triangleSize / 2}px;

        transition: 0.3s;
    }
    .LanguageBox-Activate{
        border-top: ${triangleSize}px solid ${triangleColor};
        border-bottom: none;
        border-right: ${triangleSize / 1.5}px solid transparent;
        border-left: ${triangleSize / 1.5}px solid transparent;
    }
    .LanguageBox-Deactivate{
        transform: rotate(0.5turn);
        background-color: ${triangleColor};
        border-top: ${triangleSize / 6}px solid ${triangleColor};
        border-bottom: ${triangleSize / 6}px solid ${triangleColor};
        border-right: ${triangleSize / 1.75}px solid ${triangleColor};
        border-left: ${triangleSize / 1.75}px solid ${triangleColor};
    }
`;

export const SelectItems = styled.div`
    min-width: 120px;
    display: block;
    position: absolute;
    z-index: 1;
    .Language-Item{
        ${deleteButtonDisplay}
        width: 100%;
        /* position: absolute; */
    }
`;

export default SelectLanguageBox;