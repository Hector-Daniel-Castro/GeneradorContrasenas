function generatePassword() {
    // Definir los caracteres permitidos para la contraseña
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    // Longitud de la contraseña
    var passwordLength = 12;

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    // Mostrar la contraseña generada en el campo de texto
    document.getElementById("password").value = password;
}
