const path = require('path')
const fs = require('fs')
const debug = require('debug')('app:assetLoader')

function copyAssets(assetDir, outputDir) {
   fs.mkdirSync(outputDir, { recursive: true })

   const entries = fs.readdirSync(assetDir)

   for (const entry of entries) {
       const src = path.join(assetDir, entry)
       const dest = path.join(outputDir, entry)
       const stats = fs.statSync(src)

       if (stats.isDirectory()) {
           copyAssets(src, dest)
       } else {
           fs.copyFileSync(src, dest)                
           debug(`${src} copied to ${dest}`)
       }
   }
}

module.exports = { copyAssets }
