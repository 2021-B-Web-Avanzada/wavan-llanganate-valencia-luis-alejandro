const fs = require('fs')

const getContentFromAFile = path => {
    return fs.readFileSync(
        path,
        "utf-8",
        'r'
    )
}

const writeContentOnAFile = (path, content) => {
    const data = `${getContentFromAFile(path)}\n${content}`
    fs.writeFile(
        path,
        data,
        error => {
            if (error) throw error;
        }
    )
}


writeContentOnAFile("file.txt", 'Llanganate')