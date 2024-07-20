const path = require('path')
const sass = require('sass')
const fs = require('fs')
const debug = require('debug')('app:saasLoader')

function compileScss(sourceFile, destinationDirectory) {
    const sassOptions = {
        file: sourceFile,
        outputStyle: 'expanded', // compressed
        outFile: path.join(destinationDirectory, 'style.css'),
        sourceMap: true, // Generate source maps for debugging (optional)
        sourceMapEmbed: true, // Embed source maps in the CSS (optional)
    }

    sass.render(sassOptions, (err, result) => {
        if (err) {
            debug(err)
            return
        }
        
        const directory = path.dirname(sassOptions.outFile) 
        fs.mkdir(directory, {recursive: true}, (err) => {
            if (err) {
                console.error(`Error creating directories: ${err.message}`);
                return;
            }
            
            fs.writeFile(sassOptions.outFile, result.css, 'utf8', (err) => {
                if (err) {
                    debug('Error writing CSS to file:', err);
                } else {
                    debug('SCSS compiled and written to file successfully!')
                }
            })
        })
    })
}

module.exports = { compileScss }
