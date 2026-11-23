// ============================================
// AUTENTICACIÓN: LOGIN Y REGISTRO
// ============================================

/**
 * Muestra/oculta el formulario de registro
 */
function mostrarRegistro() {
    document.getElementById('registro-form').classList.toggle('hidden');
}

/**
 * Registrar un nuevo usuario
 * Guarda el nombre de usuario en Firestore para mostrarlo después
 */
function registrarUsuario() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    const username = document.getElementById('reg-username').value;

    if (!username) {
        return mostrarError("El nombre de usuario es obligatorio");
    }

    auth.createUserWithEmailAndPassword(email, pass)
        .then(cred => {
            // Guardar el nombre de usuario en Firestore
            return db.collection("usuarios").doc(cred.user.uid).set({
                username: username,
                email: email,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            alert("✅ Cuenta creada exitosamente. Ahora inicia sesión.");
            mostrarRegistro(); // Ocultar formulario de registro
        })
        .catch(err => mostrarError(err.message));
}

/**
 * Iniciar sesión con email y contraseña
 */
function iniciarSesion() {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    
    auth.signInWithEmailAndPassword(email, pass)
        .catch(err => mostrarError(err.message));
}

/**
 * Cerrar sesión
 */
function cerrarSesion() {
    auth.signOut();
}

/**
 * Escuchar cambios de estado de autenticación
 * Se ejecuta automáticamente cuando el usuario entra o sale
 */
auth.onAuthStateChanged(user => {
    if (user) {
        // Usuario logueado: mostrar sistema
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('main-system').classList.remove('hidden');
        
        // Renderizar menú dinámico
        renderizarMenu();
        renderizarTarjetas();

        // Obtener nombre de usuario desde Firestore
        db.collection("usuarios").doc(user.uid).get().then(doc => {
            if (doc.exists) {
                document.getElementById('display-username').innerText = doc.data().username;
            } else {
                document.getElementById('display-username').innerText = "Usuario";
            }
        });
    } else {
        // No logueado: mostrar login
        document.getElementById('login-section').classList.remove('hidden');
        document.getElementById('main-system').classList.add('hidden');
    }
});

/**
 * Mostrar mensaje de error en el login
 */
function mostrarError(msg) {
    document.getElementById('login-msg').innerHTML = 
        `<div class="alert alert-danger small">${msg}</div>`;
}