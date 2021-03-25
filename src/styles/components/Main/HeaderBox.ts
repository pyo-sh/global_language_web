import styled from 'styled-components';
import { Color } from 'Contant';

const HeaderBox = styled.div`
    width: 100vw;
    height: 80px;
    padding: 0 30px;
    z-index: 3;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${Color.mid_gray};

    .Header-Logo {
        height: 60px;
    }
`;

export const MenuBox = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background: none;

    display: flex;
    align-items: center;
    height: 100%;

    .HeaderMenu-Title {
        width: 150px;
        padding-right: 50px;
        margin-right: 50px;

        text-align: center;
        font-size: 22px;

        :first-child {
            margin-left: 0;
        }

        :last-child {
            width: 100px;
            padding: 0;
            margin-right: 0;
        }
    }
`;

const itemHeight = 205;
const itemHeight2 = 46;
export const MenuContentBox = styled.div<{ isOpen: boolean }>`
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
    @keyframes bounce2 {
        0% {
            height: 0;
        }
        40% {
            height: ${itemHeight2 * 1.2}px;
        }
        60%{
            height: ${itemHeight2 * 0.9}px;
        }
        80% {
            height: ${itemHeight2 * 1.1}px;
        }
    }

    width: 100vw;
    min-width: 965px;
    padding: 0 30px 0 30px;
    margin-top: 80px;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;

    height: 0px;
    opacity: 0;
    transition: height, opacity 250ms cubic-bezier(0.3, 0, 0.7, 1);

    .HeaderMenu-Contents {
        display: block;
        width: 150px;
        padding: 0 50px 0 0;
        margin-right: 50px;

        text-align: center;

        :first-child {
            margin-left: 0;
        }

        :last-child {
            width: 100px;
            padding-right: 0;
            margin-right: 35px;
        }
    }
    .HeaderMenu-Content {
        font-size: 15px;

        height: 0px;
        padding: 0px;
        transition: all 250ms cubic-bezier(0.3, 0, 0.7, 1);
    }

    ${props => props.isOpen && `
        height: auto;
        opacity: 1;
        animation: bounce 0.7s 1 alternate;
        
        .HeaderMenu-Content {
            height: auto;
            padding-top: 25px;
            animation: bounce2 0.7s 1 alternate;
        }
    `}
`;

export default HeaderBox;