const express = require('express')
const debug = require('debug')('app')
const path = require('path')
const logger = require('morgan')
const saasLoader = require('./src/js/saas-loader')
const pugLoader = require('./src/js/pug-loader')
const assetLoader = require('./src/js/asset-loader')
const outputCleaner = require('./src/js/output-cleaner') 
const resourceManager = require('./src/js/resource-manager')
const moduleManager = require('./src/js/module-manager')

const PORT = process.env.PORT || 3000
const srcDir = path.join(__dirname, 'src')
const outputDir = path.join(__dirname, 'public')      
const viewsDir = 'views'
const sourceStyleDir = 'scss'
const destinationStyleDir = 'css'
const assetsDir = 'assets'
const jsDir = 'js'

const app = express()

app.use(logger('dev'));

appContext = {
    'getAsset': resourceManager.getAsset,
    'getMainStyle': resourceManager.getMainStyle,
    'modules': moduleManager.getModules(),
}

outputCleaner.cleanOutputDir(outputDir)
assetLoader.copyAssets(path.join(srcDir, assetsDir), path.join(outputDir, assetsDir))
pugLoader.compilePugsToHtml(path.join(srcDir, viewsDir), outputDir, appContext)
saasLoader.compileScss(path.join(srcDir, sourceStyleDir, 'style.scss'), path.join(outputDir, destinationStyleDir))

app.use(express.static(outputDir))

app.listen(PORT, () => {
    debug(`WebDevDojo listening on port ${PORT}`)
})
