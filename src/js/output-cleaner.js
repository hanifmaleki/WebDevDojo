const path = require('path')
const fs = require('fs')
const debug = require('debug')('app:assetLoader')

function cleanOutputDir(outputDir) {
    if (!fs.existsSync(outputDir)) {
        debug(`Directory ${outputDir} does not exist. Nothing to clean`)
        return
    }

    debug(`Cleaning ${outputDir}`)

    const entries = fs.readdirSync(outputDir)
    for (const entry of entries) {
        const filePath = path.join(outputDir, entry)
        const stats = fs.statSync(filePath)

        if (stats.isDirectory()) {
            cleanOutputDir(filePath)
            fs.rmdirSync(filePath)
        } else {
            fs.unlinkSync(filePath)                
        }
    }
}

module.exports = { cleanOutputDir }
