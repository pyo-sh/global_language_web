// Prevent from exposure Commercial Images

export const logoImage = () => {
    let resultImage = null;

    try{
        const img = require("source/images/logo.png");
        resultImage = img
    }catch{
        resultImage = "/logo.png";
    }

    return resultImage;
}
