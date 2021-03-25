import React, { useState } from 'react';
import HeaderBox, { MenuBox, MenuContentBox } from 'styles/components/Main/HeaderBox';
import SelectLanguage from 'components/Main/SelectLanguage';

import { logoImage } from 'resources/renderImages';
import { menuWords } from 'resources/renderWords';

const renderContents = (array: Array<string>) => {
    return<div className="HeaderMenu-Contents">
    {array.map((element) => {
        return <div className="HeaderMenu-Content">
            {element}
        </div>
    })}
    </div>
}

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menu_1 = menuWords(1, 'kor');
    const menu_2 = menuWords(2, 'kor');
    const menu_3 = menuWords(3, 'kor');
    const menu_4 = menuWords(4, 'kor');

    return <HeaderBox>
        <img
            className="Header-Logo"
            src={logoImage()}
            />
        <MenuBox
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
            >
            <div className="HeaderMenu-Title"> {menu_1.title} </div>
            <div className="HeaderMenu-Title"> {menu_2.title} </div>
            <div className="HeaderMenu-Title"> {menu_3.title} </div>
            <div className="HeaderMenu-Title"> {menu_4.title} </div>
        </MenuBox>
        <MenuContentBox
            isOpen={isOpen}
            >
            {renderContents(menu_1.childs)}
            {renderContents(menu_2.childs)}
            {renderContents(menu_3.childs)}
            {renderContents(menu_4.childs)}
        </MenuContentBox>
        <SelectLanguage/>
    </HeaderBox>
}

export default Header;