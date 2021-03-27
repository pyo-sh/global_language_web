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
                    '작자',
                    '등록번호',
                    '전화번호',
                    '이메일',
                    '팩스'
                ];
                break;
        }
    }
    return ArrayToObject(keys, values);
}