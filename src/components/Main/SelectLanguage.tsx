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
    English: "eng",
};

const renderItem = (lang: string, key: number) => {
    return <button
        className="Language-Item"
        key={key}
        >
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
        <SelectLanguageBox>
            <button
                className="LanguageBox-Button"
                onClick={clickBox}
                >
                {Object.keys(items).filter(element => items[element] === language)}
                <span
                    className={
                        "LanguageBox-Triangle "
                        + (isOpen
                            ? "LanguageBox-Activate"
                            : "LanguageBox-Deactivate"
                    )}
                    >
                </span>
            </button>
            {isOpen &&
            <SelectItems onClick={clickItem}>
                { Object.keys(items).map((element, index) => (
                    renderItem(element, index)
                )) }
            </SelectItems>
            }
        </SelectLanguageBox>
    </>
}

export default SelectLanguage;