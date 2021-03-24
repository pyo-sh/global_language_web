import React, { useEffect } from 'react';
import HeaderBox, { MenuBox } from 'styles/components/Main/HeaderBox';
import SelectLanguage from 'components/Main/SelectLanguage';

import { logoImage } from 'resources/renderImages';
import { menuWords } from 'resources/renderWords';

const Header: React.FC = () => {
    const menu = menuWords('kor');
    return <HeaderBox>
        <img
            className="Header-Logo"
            src={logoImage()}
            />
        <MenuBox>
            <div>
                {menu.menu_1}
            </div>
            <div>
                {menu.menu_2}
            </div>
            <div>
                {menu.menu_3}
            </div>
            <div>
                {menu.menu_4}
            </div>
        </MenuBox>
        <SelectLanguage/>
    </HeaderBox>
}

export default Header;