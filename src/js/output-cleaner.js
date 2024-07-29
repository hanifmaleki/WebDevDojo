const path = require('path')
const fs = require('fs')
const debug = require('debug')('app:assetLoader')

function cleanOutputDir(outputDir) {
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
