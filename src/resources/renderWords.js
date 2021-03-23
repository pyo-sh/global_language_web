// Prevent from exposure Commercial Words

let isCommercial;
try{
    isCommercial = require('sources/exists.js').default;
}
catch{
    isCommercial = false;
}

const ArrayToObject = (keys, values) => {
    if (keys.length != values.length)
        return null;

    return values.reduce((accumulator, current, index) => {
        accumulator[keys[index]] = current;
        return accumulator;
    }, {})
}

export const menuWords = (lang) => {
    const keys = [
        'menu_1',
        'menu_2',
        'menu_3',
        'menu_4'
    ];
    let values
    if (isCommercial && lang) {
        values = require(`sources/words/${lang}.js`).menuWords
    }
    else {
        switch(lang){
            case 'eng':
                values = [
                    'Menu1',
                    'Menu2',
                    'Menu3',
                    'Menu4'
                ];
                break;
            case 'kor':
            default:
                values = [
                    '메뉴1',
                    '메뉴2',
                    '메뉴3',
                    '메뉴4'
                ];
                break;
        }
    }

    return ArrayToObject(keys, values);
}