import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers/index";
import { ACTIONS } from "reducers/user";
import SelectLanguageBox, { SelectItems } from 'styles/components/Main/SelectLanguageBox';

type itemOption = {
    [key: string]: string
}

const items: itemOption = {
    한국어: "kor",
};

const renderItem = (lang: string, key: number) => {
    return <button key={key}>
        {lang}
    </button>
}

const SelectLanguage: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickBox = () => {
        setIsOpen((prev) => !prev)
    }

    const clickItem: React.MouseEventHandler<HTMLDivElement> = (event) => {
        const {tagName, innerHTML} = event.target as HTMLButtonElement;
        
        if (tagName === "BUTTON"){
            dispatch(ACTIONS.changeLanguageAction({
                language: items[innerHTML],
            }));
            setIsOpen(false);
        }
    }

    return <>
        <SelectLanguageBox onClick={clickBox}>
            <div>
                {Object.keys(items).filter(element => items[element] === language)}
            </div>
            <div></div>
        </SelectLanguageBox>
        {isOpen &&
        <SelectItems onClick={clickItem}>
            { Object.keys(items).map((element, index) => (
                renderItem(element, index)
            )) }
        </SelectItems>
        }
    </>
}

export default SelectLanguage;