// ============================================
// FORMULARIO MULTI-PASO CON BASE DE DATOS
// ============================================

/**
 * Cambia entre los pasos del formulario
 */
function cambiarPaso(paso) {
    document.getElementById('paso1').classList.toggle('hidden', paso !== 1);
    document.getElementById('paso2').classList.toggle('hidden', paso !== 2);
}

/**
 * Guarda los datos del formulario en Firestore
 */
function guardarEnBD() {
    const user = auth.currentUser;
    
    if (!user) {
        return alert("Debes iniciar sesión para guardar datos");
    }

    // Recopilar datos del formulario
    const datos = {
        nombre: document.getElementById('f-nombre').value,
        edad: document.getElementById('f-edad').value,
        carrera: document.getElementById('f-carrera').value,
        matricula: document.getElementById('f-matricula').value,
        registradoPor: user.uid,
        fecha: new Date().toISOString()
    };

    // Validar que los campos no estén vacíos
    if (!datos.nombre || !datos.carrera || !datos.matricula) {
        document.getElementById('form-msg').innerHTML = 
            '<div class="alert alert-warning">⚠️ Por favor completa todos los campos</div>';
        return;
    }

    // Guardar en Firestore
    db.collection("registros_academicos").add(datos)
        .then(() => {
            document.getElementById('form-msg').innerHTML = 
                '<div class="alert alert-success">✅ Guardado en Firebase Firestore correctamente.</div>';
            
            // Limpiar campos
            document.getElementById('f-nombre').value = '';
            document.getElementById('f-edad').value = '';
            document.getElementById('f-carrera').value = '';
            document.getElementById('f-matricula').value = '';
            
            // Volver al paso 1
            cambiarPaso(1);
        })
        .catch(err => {
            document.getElementById('form-msg').innerHTML = 
                `<div class="alert alert-danger">❌ Error: ${err.message}</div>`;
        });
}