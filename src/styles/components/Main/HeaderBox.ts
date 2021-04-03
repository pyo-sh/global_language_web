import styled from 'styled-components';
import { Color } from 'Contant';

const HeaderBox = styled.div`
    min-width: 1065px;
    width: 100%;
    height: 80px;
    padding: 0 30px;
    z-index: 3;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* border-bottom: 1px solid ${Color.mid_gray}; */

    .Header-Logo {
        height: 60px;
    }
`;

const listStyle = `
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const MenuBox = styled.ul`
    ${listStyle}

    display: flex;
    align-items: center;
    height: 100%;

    .HeaderMenu-Item {
        height: 100%;

        text-align: center;
        font-size: 22px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .HeaderMenu-Title {
        width: 200px;
        padding: 25px 40px 25px 40px;
    }
`;

let isFirst = false;
const display_animation = (isOpen: boolean): string => {
    isFirst = isFirst || isOpen;
    return `
        animation-name: ${isOpen ? 'slidedown' : (isFirst ? 'slideup' : ' ')};
        animation-duration: 0.6s;
        animation-direction: alternate;
        animation-iteration-count: 1;
        animation-play-state: 'running';
        animation-fill-mode: both;
    `;
}
export const MenuContentBox = styled.ul<{ isOpen : boolean }>`
    ${listStyle}
    position: absolute;
    top: 80px;
    z-index: 2;

    .HeaderMenu-Content {
        padding-top: 25px;
        font-size: 15px;

        :last-child {
            padding-bottom: 25px
        }
    }

    @keyframes slidedown {
        0% {
            display: none;
            height: 0;
        }
        1%{
            display: block;
            height: 1%;
        }
        100%{
            display: block;
            height: 205px;
        }
    }
    @keyframes slideup{
        0%{
            display: block;
            height: 205px;
        }
        99%{
            display: block;
            height: 0;
        }
        100% {
            display: none;
            height: 0;
        }
    }
    height: 0px;
    overflow: hidden;
    ${props => display_animation(props.isOpen)}

    /* animation: slidedown 0.7s 2 alternate both running; */
    /* transition: height, opacity 250ms cubic-bezier(0.3, 0, 0.7, 1); */
    /* height: 205px */
`;

export const MenuBackground = styled.div<{ isOpen : boolean }>`
    width: 100vw;
    position: absolute;
    left: 0;
    top: 80px;
    z-index: 1;

    height: 0;
    overflow: hidden;
    ${props => display_animation(props.isOpen)}

    /* border: 1px solid black; */
`;

export default HeaderBox;