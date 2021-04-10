// Prevent from exposure Commercial Words

let isCommercial;
try{
    isCommercial = require('sources/exists.js').default;
}
catch{
    isCommercial = false;
}

// Words are delivered by Array (Easy Rewrite)
// We will use it as Object

const ArrayToObject = (keys, values) => {
    if (keys.length != values.length)
        return null;

    return values.reduce((accumulator, current, index) => {
        accumulator[keys[index]] = current;
        return accumulator;
    }, {})
}

export const titleWord = (lang) => {
    let value;
    if (isCommercial && lang){
        const this_module = require(`sources/words/${lang}.js`);
        value = this_module.titleWord;
    }
    else {
        switch(lang){
            case 'eng':
                value = 'TitleName';
                break;
            case 'kor':
            default:
                value = '페이지이름'
                break;
        }
    }
    return value
}

export const menuWords = (index, lang) => {
    index = (index + 3) % 4 + 1;
    const keys = [
        'title',
        'childs',
    ];

    let values
    if (isCommercial && lang) {
        const this_module = require(`sources/words/${lang}.js`);
        values = this_module[`mainMenu_${index}`];
    }
    else {
        switch(lang){
            case 'eng':
                values = [
                    `Menu${index}`,
                    'Sub1',
                    'Sub2',
                    'Sub3'
                ];
                break;
            case 'kor':
            default:
                values = [
                    `메뉴${index}`,
                    '서브1',
                    '서브2',
                    '서브3'
                ];
                break;
        }
    }

    return ArrayToObject(keys, [values[0], values.slice(1)]);
}

export const footerWords = (lang) => {
    const keys = [
        'author',
        'register',
        'phone',
        'email',
        'fax',
    ];

    let values;
    switch(lang){
        case 'eng':
            values = [
                'author',
                'version',
                'phone',
                'email',
                'fax',
            ];
            break;
        case 'kor':
        default:
            values = [
                '대표자',
                '사업자등록번호',
                '전화번호',
                '이메일',
                '팩스'
            ];
            break;
    }
    return ArrayToObject(keys, values);
}


export const projectWords = (lang) => {
    const keys = [
        'name',
        'location',
        'author',
        'register',
        'phone',
        'email',
        'fax',
    ];

    let values
    if (isCommercial && lang) {
        const this_module = require(`sources/words/${lang}.js`);
        values = this_module.project;
    }
    else {
        switch(lang){
            case 'eng':
                values = [
                    'name',
                    'location',
                    'author',
                    'register',
                    'phone',
                    'email',
                    'fax',
                ];
                break;
            case 'kor':
            default:
                values = [
                    '이름',
                    '위치',
                    '대표자',
                    '사업자등록번호',
                    '전화번호',
                    '이메일',
                    '팩스'
                ];
                break;
        }
    }
    return ArrayToObject(keys, values);
}

export const mainIntroduceWord = (lang) => {
    const keys = [
        'title_1',
        'title_2',
        'content'
    ];
    let values;
    if (isCommercial && lang){
        const this_module = require(`sources/words/${lang}.js`);
        values = this_module.mainIntroduceWord;
    }
    else {
        switch(lang){
            case 'eng':
                values = [
                    'A new model for',
                    'open collaboration',
                    'Run an organization where members get rewarded for their contributions with fractional ownership.',
                ];
                break;
            case 'kor':
            default:
                values = [
                    "전세계적인 언어",
                    "따라가는 홈페이지",
                    "글로벌 언어를 지원하는 홈페이지를 만드는 것은 고달픈 것입니다. 상업적인 것을 숨기기 위해 두 번을 고려해야 하는 홈페이지입니다."
                ];
                break;
        }
    }
    return ArrayToObject(keys, values);
}