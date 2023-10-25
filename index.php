<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validación de Documento</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Validación de Documento</h1>

    <!-- Formulario para cargar las imágenes -->
    <form id="upload-form" enctype="multipart/form-data">
        <input type="file" id="front-image" accept="image/*" required>
        <input type="file" id="back-image" accept="image/*" required>
        <button type="submit">Validar</button>
    </form>

    <!-- Resultado de la validación -->
    <div id="validation-result"></div>

    <!-- JavaScript para procesar la validación -->
    <script src="script.js"></script>
</body>
</html>
