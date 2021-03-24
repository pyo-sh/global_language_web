import styled from 'styled-components';
import { Color } from 'Contant';

const deleteButtonDisplay = `
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;
`;

const triangleSize = 8;
const triangleColor = Color.dark_gray;

const itemHeight = 40;

const SelectLanguageBox = styled.div<{ isOpen: boolean }>`
    width: 120px;
    height: 40px;

    @keyframes bounce {
        0% {
            height: 0;
        }
        40% {
            height: ${itemHeight * 1.2}px;
        }
        60%{
            height: ${itemHeight * 0.9}px;
        }
        80% {
            height: ${itemHeight * 1.1}px;
        }
    }

    .LanguageBox-Button {
        ${deleteButtonDisplay}
        width: 120px;
        height: 40px;
        padding: 0 10px;

        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        z-index: 2;
        background: white;
        border: 1px solid black;
        border-radius: 5px;

        span {
            margin: 0 auto;
        }
        :after {
            content: "";
            width: 0px;
            height: 0px;
            margin-bottom: -${triangleSize / 2}px;
            
            transition: 0.3s;

            background-color: ${triangleColor};
            border-top: ${triangleSize / 8}px solid ${triangleColor};
            border-bottom: ${triangleSize / 8}px solid ${triangleColor};
            border-right: ${triangleSize / 2}px solid ${triangleColor};
            border-left: ${triangleSize / 2}px solid ${triangleColor};
        }
        ${(props) => props.isOpen && `
        :after{
            transform: rotate(0.5turn);
            background: none;
            border-top: none;
            border-bottom: ${triangleSize/1.5}px solid ${triangleColor};
            border-right: ${triangleSize/2}px solid transparent;
            border-left: ${triangleSize/2}px solid transparent;
        }
        `}
    }

    .LanguageBox-Items {
        min-width: 120px;
        display: block;
        position: absolute;
        z-index: 1;
        padding-top: 5px;
        margin-top: 34px;

        border: 1px solid black;

        transition: all 250ms cubic-bezier(0.3, 0, 0.7, 1);

        ${props => !props.isOpen && `
            height: 0;
            margin-top: 10px;
            border: none;
        `}
    }
    .LanguageBox-Item {
        ${deleteButtonDisplay}
        width: 100%;
        height: 0px;
        opacity: 0;
        z-index: 2;

        background-color: white;
        transition: all 250ms cubic-bezier(0.3, 0, 0.7, 1);

        ${props => props.isOpen && `
            height: 40px;
            opacity: 1;
            animation: bounce 0.7s 1 alternate;
        `}
    }
`;

export default SelectLanguageBox;