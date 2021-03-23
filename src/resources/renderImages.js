// Prevent from exposure Commercial Images

let isCommercial;
try{
    isCommercial = require('sources/exists.js').default;
}
catch{
    isCommercial = false;
}

export const logoImage = () => {
    return isCommercial ? require("sources/images/logo.png") : "/logo.png";
}
