import styled from 'styled-components';
import { Color } from 'Contant';

const FooterBox = styled.p`
    width: 100vw;
    height: 40px;

    display: flex;
    justify-content: center;

    p {
        max-width: 965px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    span {
        height: 20px;
        padding: 0 8px;
        
        color: ${Color.dark_gray};
        font-size: 12px;
        border-left: 1px solid ${Color.mid_light_gray};
        :first-child {
            height: auto;
            padding-left: 0;
            border-left: none;

            strong {
                margin-right: 8px;
            }
        }
    }
`;

export default FooterBox;