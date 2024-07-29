const path = require('path')

function getAsset(assetPath) {
    return path.join('/asset', assetPath)
}

function getMainStyle() {
    return '/css/style.css'
}

module.exports = {getAsset, getMainStyle}
