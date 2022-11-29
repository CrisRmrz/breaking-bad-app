## Fuentes y herramientas utilizadas

Api de breaking bad: https://breakingbadapi.com/
Gist con estilos: https://gist.github.com/roberto-aq/1fddf4954cef0cd42eae60c86ba6696b
Font Awesome: https://fontawesome.com/
React router dom version 6: https://reactrouter.com/en/v6.3.0/getting-started/overview
Fuentes de google: https://fonts.google.com/specimen/Poppins?query=Poppins
Loaders: https://cssloaders.github.io/
Logo del navbar: https://www.pngall.com/?s=breaking+bad

## Subir a github pages
generar el build con: yarn build
la carpeta llamada dist cambiarla de nombre a docs
hacer el push
Ir a la parte de pages en github
Seleccionar main y docs
Si lo abrimos nos va a dar errores porque hay que configurar lo siguiente:
Ir a docs, luego a html y cambiar esto:
    <script type="module" crossorigin src="/assets/index.c8ebc99f.js"></script>
    <link rel="stylesheet" href="/assets/index.36afc740.css">
por esto
    <script type="module" crossorigin src="./assets/index.c8ebc99f.js"></script>
    <link rel="stylesheet" href="./assets/index.36afc740.css">
Simplemente añadirle un punto

Y ya luego subir los cambios a github