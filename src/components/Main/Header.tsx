import React, { useState } from 'react';
import HeaderBox, { MenuBox, MenuContentBox, MenuBackground } from 'styles/components/Main/HeaderBox';
import SelectLanguage from 'components/Main/SelectLanguage';

import { logoImage } from 'resources/renderImages';
import { menuWords } from 'resources/renderWords';

const renderContents = (array: Array<string>, isOpen: boolean) => {
    return <MenuContentBox isOpen={isOpen}>
    {array.map((element, index) => {
        return <li
            className="HeaderMenu-Content"
            key={index}
            >
            {element}
        </li>
    })}
    </MenuContentBox>
}

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menu_1 = menuWords(1, 'kor');
    const menu_2 = menuWords(2, 'kor');
    const menu_3 = menuWords(3, 'kor');
    const menu_4 = menuWords(4, 'kor');

    const onHoverOpen = () => {
        setIsOpen(true);
    }

    return <HeaderBox>
        <img
            className="Header-Logo"
            src={logoImage()}
            />
        <MenuBox
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            >
            <li className="HeaderMenu-Item">
                <a className="HeaderMenu-Title">{menu_1.title}</a>
                {renderContents(menu_1.childs, isOpen)}
            </li>
            <li className="HeaderMenu-Item">
                <a className="HeaderMenu-Title">{menu_2.title}</a>
                {renderContents(menu_2.childs, isOpen)}
            </li>
            <li className="HeaderMenu-Item">
                <a className="HeaderMenu-Title">{menu_3.title}</a>
                {renderContents(menu_3.childs, isOpen)}
            </li>
            <li className="HeaderMenu-Item">
                <a className="HeaderMenu-Title">{menu_4.title}</a>
                {renderContents(menu_4.childs, isOpen)}
            </li>
            <MenuBackground isOpen={isOpen}/>
        </MenuBox>
        <SelectLanguage/>
    </HeaderBox>
}

export default Header;