import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers/index";
import { ACTIONS } from "reducers/user";
import SelectLanguageBox from 'styles/components/Main/SelectLanguageBox';

type itemOption = {
    [key: string]: string
}

const items: itemOption = {
    한국어: "kor",
    English: "eng",
};

const renderItem = (lang: string, key: number) => {
    return <button
        className="LanguageBox-Item"
        key={key}
        >
        {lang}
    </button>
}

const SelectLanguage: React.FC = () => {
    const { language } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickItem: React.MouseEventHandler<HTMLDivElement> = (event) => {
        const {tagName, innerHTML} = event.target as HTMLButtonElement;
        if (tagName === "BUTTON"){
            dispatch(ACTIONS.changeLanguageAction({
                language: items[innerHTML],
            }));
        }
    }

    return <>
        <SelectLanguageBox
            isOpen={isOpen}
            >
            <button className="LanguageBox-Button"
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                >
                <span>
                    {Object.keys(items).filter(element => items[element] === language)}
                </span>
            </button>
            <div
                className="LanguageBox-Items"
                onClick={clickItem}
                >
                { Object.keys(items).map((element, index) => (
                    renderItem(element, index)
                )) }
            </div>
        </SelectLanguageBox>
    </>
}

export default SelectLanguage;