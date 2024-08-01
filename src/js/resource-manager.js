const path = require('path')

function getAsset(assetPath) {
    return path.join('/assets', assetPath)
}

function getMainStyle() {
    return '/css/style.css'
}

module.exports = {getAsset, getMainStyle}
