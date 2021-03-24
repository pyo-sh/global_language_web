import styled from 'styled-components';
import { Color } from 'Contant';

const HeaderBox = styled.div`
    width: 100vw;
    height: 80px;
    padding: 0 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${Color.mid_gray};

    .Header-Logo {
        height: 60px;
    }
`;

export const MenuBox = styled.div`
    display: flex;

    
    :last-child {
        margin-right: 0;
    }
`;

export default HeaderBox;