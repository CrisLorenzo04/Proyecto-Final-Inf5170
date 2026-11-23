// ============================================
// MENÚ DINÁMICO - Proyecto Final INF5170
// Todas las actividades integradas
// ============================================

const menuItems = [
    // --- Vistas internas del sistema ---
    { id: 'inicio', icon: '🏠', label: 'Inicio', tipo: 'interno' },

    // --- Actividades Web (cargan index.html en el iframe) ---
    { id: 'act1',  icon: '📄', label: 'Act 1: Opinión sobre el material de estudio', tipo: 'pdf', url: 'actividades/Actividad 1/documento.pdf' },
    { id: 'act2',  icon: '🌐', label: 'Act 2: Mi Página Web',     tipo: 'web',   url: 'actividades/Actividad 2/index.html' },
    { id: 'act3',  icon: '🏷️', label: 'Act 3: 102 Etiquetas',     tipo: 'web',   url: 'actividades/Actividad 3/index.html' },
    { id: 'act4',  icon: '🏦', label: 'Act 4: Web Banco',         tipo: 'web',   url: 'actividades/Actividad 4/index.html' },
    { id: 'act5',  icon: '📋', label: 'Act 5: Menú Dinámico',     tipo: 'web',   url: 'actividades/Actividad 5/public/index.html' },
    { id: 'act6',  icon: '🤖', label: 'Act 6: Pruebas Automatizadas', tipo: 'md', url: 'actividades/Actividad 6/Pruebas-Automatizadas-Ecoturismo/README.md' },
    { id: 'act7',  icon: '✅', label: 'Act 7: Pruebas BDD (Gherkin)', tipo: 'md', url: 'actividades/Actividad 7/pruebas-bdd-foodexpress/README.md' },
    { id: 'act8',  icon: '⚡', label: 'Act 8: Performance (k6)',      tipo: 'md', url: 'actividades/Actividad 8/README.md' },
    { id: 'act9',  icon: '📄', label: 'Act 9: Resumen Área 1',        tipo: 'pdf', url: 'actividades/Actividad 9/documento.pdf' },
    { id: 'act10', icon: '📄', label: 'Act 10: Resumen Tarea 2',      tipo: 'pdf', url: 'actividades/Actividad 10/documento.pdf' },
    { id: 'act11', icon: '📄', label: 'Act 11: Resumen Tarea 3',      tipo: 'pdf', url: 'actividades/Actividad 11/documento.pdf' },
    { id: 'act12', icon: '📝', label: 'Act 12: Formulario con BD', tipo: 'web',  url: 'actividades/Actividad 12/index.html' },
    { id: 'act13', icon: '📄', label: 'Act 13: MVC (Teoría)',         tipo: 'pdf', url: 'actividades/Actividad 13/documento.pdf' },
    { id: 'act14', icon: '🆔', label: 'Act 14: Validador Cédula', tipo: 'web',   url: 'actividades/Actividad 14/index.html' },
    { id: 'act15', icon: '📄', label: 'Act 15: Spring Framework',     tipo: 'pdf', url: 'actividades/Actividad 15/documento.pdf' },
    { id: 'act16', icon: '🤖', label: 'Act 16: Chatbot IA',     tipo: 'web', url: 'actividades/Actividad 16/index.html' }

];

function renderizarMenu() {
    const ul = document.getElementById('dynamic-menu');
    ul.innerHTML = '';
    
    // Variable para controlar si el menú está expandido
    let menuExpandido = false;
    
    menuItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        
        if (item.id === 'inicio') {
            // "Inicio" siempre visible, actúa como toggle
            li.innerHTML = `
                <a class="nav-link ${index === 0 ? 'active' : ''}" href="#" 
                   onclick="toggleMenu(event, this)">
                    ${item.icon} ${item.label} <span id="menu-toggle-icon">▼</span>
                </a>
            `;
        } else {
            // Las demás opciones están ocultas por defecto
            let displayClass = 'hidden';
            
            if (item.tipo === 'interno') {
                li.innerHTML = `
                    <a class="nav-link ${displayClass}" href="#" 
                       onclick="cambiarVista('${item.id}', this)">
                        ${item.icon} ${item.label}
                    </a>
                `;
            } else {
                li.innerHTML = `
                    <a class="nav-link ${displayClass}" href="#" 
                       onclick="cargarActividad('${item.url}', '${item.label}', this)">
                        ${item.icon} ${item.label}
                    </a>
                `;
            }
        }
        ul.appendChild(li);
    });
}

// Función para expandir/colapsar el menú
function toggleMenu(event, elementoLink) {
    event.preventDefault();
    
    const menuItems = document.querySelectorAll('#dynamic-menu .nav-item');
    const toggleIcon = document.getElementById('menu-toggle-icon');
    let menuExpandido = toggleIcon.innerText === '▲';
    
    // Ocultar/mostrar todas las opciones excepto "Inicio"
    menuItems.forEach((item, index) => {
        if (index > 0) { // Saltar "Inicio"
            const link = item.querySelector('.nav-link');
            if (menuExpandido) {
                link.classList.add('hidden');
            } else {
                link.classList.remove('hidden');
            }
        }
    });
    
    // Cambiar el ícono de la flecha
    toggleIcon.innerText = menuExpandido ? '▼' : '▲';
    
    // Si estamos colapsando, volver al inicio
    if (menuExpandido) {
        cambiarVista('inicio', elementoLink);
    }
}

function cambiarVista(vistaId, elementoLink) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(`view-${vistaId}`).classList.remove('hidden');
    
    if (vistaId === 'inicio') {
        renderizarTarjetas();
    }
    
    // Actualizar menú activo
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    if (elementoLink) {
        elementoLink.classList.add('active');
    }
    
    // Colapsar el menú después de seleccionar una opción (excepto si es Inicio)
    if (vistaId !== 'inicio') {
        const toggleIcon = document.getElementById('menu-toggle-icon');
        if (toggleIcon && toggleIcon.innerText === '▲') {
            // Simular clic en "Inicio" para colapsar
            const inicioLink = document.querySelector('#dynamic-menu .nav-link');
            if (inicioLink) {
                setTimeout(() => {
                    toggleMenu(new Event('click'), inicioLink);
                }, 100);
            }
        }
    }
}

function cargarActividad(url, titulo, elementoLink) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('view-actividad-externa').classList.remove('hidden');
    
    const iframe = document.getElementById('iframe-actividad');
    iframe.src = url;
    document.getElementById('titulo-actividad-externa').innerText = titulo;
    document.getElementById('btn-descargar').href = url;
    
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    if (elementoLink) {
        elementoLink.classList.add('active');
    }
    
    // Colapsar el menú después de seleccionar
    const toggleIcon = document.getElementById('menu-toggle-icon');
    if (toggleIcon && toggleIcon.innerText === '▲') {
        const inicioLink = document.querySelector('#dynamic-menu .nav-link');
        if (inicioLink) {
            setTimeout(() => {
                toggleMenu(new Event('click'), inicioLink);
            }, 100);
        }
    }
}

function volverAlInicio() {
    document.getElementById('iframe-actividad').src = '';
    const inicioLink = document.querySelector('#dynamic-menu .nav-link');
    cambiarVista('inicio', inicioLink);
}

// ============================================
// GENERAR TARJETAS DEL PANEL DE CONTROL
// ============================================

function renderizarTarjetas() {
    const contenedor = document.getElementById('tarjetas-container');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    menuItems.forEach((item) => {
        // No mostrar "Inicio" como tarjeta
        if (item.id === 'inicio') return;
        
        let colorBorde = '#0d6efd';
        if (item.tipo === 'pdf') colorBorde = '#6c757d';
        if (item.tipo === 'web') colorBorde = '#198754';
        
        const col = document.createElement('div');
        col.className = 'col-md-4 col-lg-3';
        col.innerHTML = `
            <div class="card info-card p-3 text-center h-100" 
                 style="cursor:pointer; border-left: 4px solid ${colorBorde};"
                 onclick="handleTarjetaClick('${item.id}', '${item.tipo}', '${item.url}', '${item.label}')">
                <div style="font-size: 2.5rem; margin-bottom: 10px;">${item.icon}</div>
                <h6 class="mb-1">${item.label}</h6>
                <p class="text-muted small mb-0">
                    ${item.tipo === 'pdf' ? '📄 Documento PDF' : 
                      item.tipo === 'web' ? '🌐 Página Web' : 
                      '⚙️ Sistema interno'}
                </p>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

// Función que maneja el clic en las tarjetas
function handleTarjetaClick(id, tipo, url, label) {
    if (tipo === 'interno') {
        // Para vistas internas (formulario, cédula)
        cambiarVista(id, null);
        resaltarMenu(id);
    } else {
        // Para actividades web y PDF (se cargan en iframe)
        cargarActividad(url, label, null);
        resaltarMenu(id);
    }
}

// Función para resaltar el ítem correspondiente en el menú lateral
function resaltarMenu(id) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(id)) {
            link.classList.add('active');
        }
    });
}

function cambiarVista(vistaId, elementoLink) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(`view-${vistaId}`).classList.remove('hidden');
    
    // 🆕 Si se muestra el inicio, generar las tarjetas
    if (vistaId === 'inicio') {
        renderizarTarjetas();
    }
    
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    if (elementoLink) elementoLink.classList.add('active');
}

function cargarActividad(url, titulo, elementoLink) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    document.getElementById('view-actividad-externa').classList.remove('hidden');

    const iframe = document.getElementById('iframe-actividad');
    iframe.src = url;
    document.getElementById('btn-descargar').href = url;
    document.getElementById('titulo-actividad-externa').innerText = titulo;

    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    if (elementoLink) elementoLink.classList.add('active');
}

function volverAlInicio() {
    document.getElementById('iframe-actividad').src = '';
    cambiarVista('inicio', document.querySelector('.nav-link'));
}