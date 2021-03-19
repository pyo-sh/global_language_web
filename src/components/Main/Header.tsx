import React, { useEffect } from 'react';
import HeaderBox from 'styles/components/Main/HeaderBox';

import { logoImage } from 'config/renderImages';

const Header: React.FC = () => {
    return <HeaderBox>
        <img src={logoImage()}/>
    </HeaderBox>
}

export default Header;