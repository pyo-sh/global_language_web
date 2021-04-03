import styled from 'styled-components';
import { Color } from 'Contant';

const FooterBox = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    p {
        max-width: 965px;
        width: 100%;
        height: 40px;
        margin: 20px 0 50px 0;
        display: flex;
        justify-content: center;
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