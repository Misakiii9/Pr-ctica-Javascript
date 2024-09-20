function validar(formulario) {
    // Obtener los valores del formulario
    var numeroDNI = document.getElementById("introDNI").value;
    var letraDNI = document.getElementById("edad").value.toUpperCase();  // Convertir letra a mayúsculas para evitar problemas de comparación

    // Array de letras correspondientes al DNI
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    // Validar que el número esté dentro del rango válido
    if (numeroDNI < 0 || numeroDNI > 99999999) {
        alert("El número no es válido. Debe estar entre 0 y 99.999.999.");
        return false;
    }

    // Validar que la letra no esté vacía y sea un único carácter
    if (letraDNI === "" || letraDNI.length !== 1) {
        alert("Por favor, introduce una sola letra.");
        return false;
    }

    // Validar que la letra ingresada esté en mayúsculas
    if (letraDNI !== letraDNI.toUpperCase()) {
        alert("La letra es preferible que esté en mayúsculas.");
        return false;
    }

    // Cálculo de la letra correcta para el DNI usando el residuo de la división
    var residuo = numeroDNI % 23;  // Obtener el residuo de la división por 23
    var letraCorrecta = letras[residuo];  // Obtener la letra correcta a partir del array

    // Ajuste para la letra 'T'
    if (residuo === 0 && letraDNI !== 'T') {
        alert("La letra proporcionada no es correcta. La letra correcta es: T");
        return false;
    } else if (residuo === 1 && letraDNI !== 'R') {
        alert("La letra proporcionada no es correcta. La letra correcta es: R");
        return false;
    }

    // Comparar la letra ingresada con la letra correcta
    if (letraDNI !== letraCorrecta) {
        alert("La letra proporcionada no es correcta. La letra correcta es: " + letraCorrecta);
        return false;
    }

    // Si todo está correcto
    alert("El número y la letra del DNI son correctos.");
    return true;
}