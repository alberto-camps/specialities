const getContent = (specialty, users) => {
    const template = `
<!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${specialty}</title>
        </head>
        <body>
            <nav>
                <a href="/">Home</a> |
                <a href="/developers">Developers</a> |
                <a href="/marketing">Marketings</a> |
                <a href="/ventas">Ventas</a> |
                <a href="/qas">QAs</a>
            </nav>
            <h1>${specialty}</h1>
            <p>Numero de personas ${specialty}: ${users.length}</p>
            <ul>
                ${users.map(user => `<li><h3>Nombre: ${user.name}</h3><p>Edad: ${user.age}</p></li>`).join('')}
            </ul>
        </body>
    </html>`;
    
    return template;
}

module.exports = getContent