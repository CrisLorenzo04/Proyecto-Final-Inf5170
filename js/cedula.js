// ============================================
// VALIDADOR DE CÉDULA DOMINICANA (MÓDULO 10)
// ============================================

/**
 * Valida una cédula dominicana usando el algoritmo Módulo 10
 */
function validarCedulaIntegrada() {
    // Obtener y limpiar la cédula (quitar guiones y espacios)
    let cedula = document.getElementById('cedula-input').value;
    let cedulaLimpia = cedula.replace(/-/g, '').replace(/\s/g, '');

    // Validación básica
    if (cedulaLimpia.length !== 11 || isNaN(cedulaLimpia)) {
        document.getElementById('cedula-result').innerHTML = 
            '<div class="alert alert-warning">⚠️ Debe tener 11 dígitos numéricos</div>';
        return;
    }

    // Aplicar algoritmo Módulo 10
    let suma = 0;
    let multiplicador = 1;

    // Recorrer los primeros 10 dígitos
    for (let i = 0; i < 10; i++) {
        let digito = parseInt(cedulaLimpia.charAt(i));
        let producto = digito * multiplicador;

        // Si el producto es mayor a 9, sumar sus dígitos
        if (producto > 9) {
            producto = producto.toString()
                .split('')
                .reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }

        suma += producto;
        
        // Alternar multiplicador entre 1 y 2
        multiplicador = multiplicador === 1 ? 2 : 1;
    }

    // Calcular dígito verificador
    let residuo = suma % 10;
    let digitoVerificadorCalculado = residuo === 0 ? 0 : 10 - residuo;

    // Comparar con el último dígito de la cédula
    let digitoVerificadorReal = parseInt(cedulaLimpia.charAt(10));

    // Mostrar resultado
    if (digitoVerificadorCalculado === digitoVerificadorReal) {
        document.getElementById('cedula-result').innerHTML = 
            '<div class="alert alert-success">✅ ¡La cédula es VÁLIDA!</div>';
    } else {
        document.getElementById('cedula-result').innerHTML = 
            '<div class="alert alert-danger">❌ La cédula es INVÁLIDA</div>';
    }
}