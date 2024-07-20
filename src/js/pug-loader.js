const pug = require('pug')
const path = require('path')
const debug = require('debug')('app:pugLoader')
const fs = require('fs')

function compilePugsToHtml(sourceDirectory, destinationDirectory) {
    debug('scanning files in ', sourceDirectory)

    fs.readdir(sourceDirectory, (err, files) => {
        if (err) {
            debug('Failed to read views directory', err)
            return
        }

        files.forEach((file) => {
            if (path.extname(file) === '.pug') {
                const pugFileNameWithoutExtension = path.basename(file, path.extname(file))
                pugFileName = path.join(sourceDirectory, file)
                htmlFileName = path.join(destinationDirectory, pugFileNameWithoutExtension + '.html')
                debug('Calling render for: ', pugFileName, htmlFileName)
                renderPugAndWriteToHtml(pugFileName, htmlFileName)
            } else  {
                const fullFilePath = path.join(sourceDirectory, file)
                const stats = fs.statSync(fullFilePath)

                if (stats.isDirectory()) {
                    debug('calling recursively for ', file)
                    compilePugsToHtml(fullFilePath, path.join(destinationDirectory, file))
                }
            }
        })
    })
}


function renderPugAndWriteToHtml(pugFileName, htmlFileName) {
    const options = {}
    const fn = pug.compileFile(pugFileName, options)
    const directory = path.dirname(htmlFileName) 
    debug(directory)
    fs.mkdir(directory, {recursive: true}, (err) => {
        if (err) {
            console.error(`Error creating directories: ${err.message}`);
            return;
        }
        fs.writeFile(htmlFileName, fn({}), 'utf8', (err) => {
            if (err) {
                debug('Error writing HTML to file:', err);
            } else {
                debug(`${pugFileName} compiled and written to HTML file successfully!`)
            }
        })
    })
}

module.exports = { compilePugsToHtml }
