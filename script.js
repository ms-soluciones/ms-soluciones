<script>
        // Menú móvil toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });
        }

        // 1. Envío del Formulario de Demostración ClinPOS a WhatsApp
        document.getElementById('demo-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Capturar los valores de los inputs de la segunda imagen
            const negocio = e.target.elements[0].value;
            const nombre = e.target.elements[1].value;
            const telefono = e.target.elements[2].value;
            
            // Reemplaza '529990000000' con tu número de WhatsApp real (ej. 5219991234567)
            const tuNumeroWhatsApp = '529994937978';
            
            const texto = `Hola, me interesa una demostración de ClinPOS.%0A%0A*Negocio:* ${negocio}%0A*Nombre:* ${nombre}%0A*WhatsApp:* ${telefono}`;
            
            window.open(`https://wa.me/${tuNumeroWhatsApp}?text=${texto}`, '_blank');
        });

        // 2. Envío del Formulario General de Contacto a WhatsApp (Primera imagen)
        document.getElementById('contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Capturar los valores del formulario general
            const nombre = e.target.elements[0].value;
            const correo = e.target.elements[1].value;
            const servicio = e.target.elements[2].value;
            const mensaje = e.target.elements[3].value;
            
            const tuNumeroWhatsApp = '529994937978'; // Tu número real
            
            const texto = `Hola Mauricio, me pongo en contacto desde la web.%0A%0A*Nombre:* ${nombre}%0A*Correo:* ${correo}%0A*Servicio de Interés:* ${servicio}%0A*Mensaje:* ${mensaje}`;
            
            window.open(`https://wa.me/${tuNumeroWhatsApp}?text=${texto}`, '_blank');
        });
    </script>