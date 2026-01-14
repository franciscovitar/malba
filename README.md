# MALBA VIAJES SRL - Website Institucional

Sitio web institucional single page desarrollado con Next.js (App Router), JavaScript y SCSS.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abrí tu navegador en [http://localhost:3000](http://localhost:3000)

### Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
malba/
├── app/
│   ├── layout.jsx          # Layout principal con metadata SEO
│   ├── page.jsx            # Página principal (integra todos los componentes)
│   └── globals.scss        # Estilos globales y variables
├── components/
│   ├── Navbar.jsx          # Navegación sticky
│   ├── Hero.jsx            # Hero section con CTAs
│   ├── BrazilOffer.jsx     # Sección Brasil (producto estrella)
│   ├── Fleet.jsx           # Galería flota y comodidad
│   ├── Services.jsx        # Servicios de alquiler
│   ├── Trust.jsx           # Sección confianza
│   ├── Testimonials.jsx    # Testimonios
│   ├── FAQ.jsx             # Preguntas frecuentes
│   ├── Contact.jsx         # Contacto y formulario
│   ├── Footer.jsx          # Footer con links
│   ├── FloatingWhatsApp.jsx # Botón flotante WhatsApp
│   └── *.module.scss       # Estilos SCSS modules por componente
├── public/
│   └── images/             # Imágenes del sitio
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Personalización

### Cambiar Imágenes

Reemplazá las imágenes placeholder en `/public/images/`:

- `hero-bus.jpg` - Imagen de fondo del Hero
- `bus-exterior.jpg` - Bus exterior
- `bus-interior-cama.jpg` - Interior butaca cama
- `bus-confort.jpg` - Confort del bus
- `bus-night.jpg` - Viaje nocturno

Las imágenes deben ser optimizadas para web (formato .jpg o .webp, peso < 500KB).

### Cambiar Colores

Editá las variables CSS en `/app/globals.scss`:

```scss
:root {
  --color-primary: #1f3188;    // Azul principal
  --color-secondary: #FAAE16;  // Amarillo
  --color-white: #FFFFFF;      // Blanco
}
```

### Modificar Textos

Todos los textos están en los componentes JSX dentro de `/components/`. 
Editá directamente el contenido según necesites.

### Números de WhatsApp

Los números están hardcodeados en varios lugares:

**Brasil:** `5493517171672`
- Navbar.jsx
- Hero.jsx
- BrazilOffer.jsx
- Contact.jsx
- FloatingWhatsApp.jsx

**Alquiler:** `5493514039510`
- Navbar.jsx
- Hero.jsx
- Services.jsx
- Contact.jsx
- FloatingWhatsApp.jsx

Usá "Buscar y Reemplazar" en VS Code para cambiarlos si es necesario.

### Redes Sociales

Editá los enlaces en `/components/Footer.jsx`:

```jsx
<a href="https://www.instagram.com/malbaviajes/">
<a href="https://www.facebook.com/malbaviajessrl">
```

## 📱 Responsive

El sitio es 100% responsive y mobile-first. Probalo en:
- Desktop (1920px, 1440px, 1280px)
- Tablet (768px)
- Mobile (375px, 414px)

## ✅ SEO

- Metadata configurada en `/app/layout.jsx`
- Open Graph tags para redes sociales
- Keywords relevantes incluidas
- Headings semánticos (h1, h2, h3)
- URLs descriptivas para WhatsApp

## 🎭 Animaciones

Usa Framer Motion para:
- Fade in al scrollear
- Hover effects en cards y botones
- Stagger animations en listas
- Smooth transitions

## 📦 Dependencias Principales

- **Next.js 14**: Framework React
- **React 18**: Librería UI
- **Framer Motion**: Animaciones
- **Swiper**: Slider/carrusel
- **React Icons**: Iconos
- **SASS**: Preprocesador CSS
- **clsx**: Utilidad para clases CSS

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm start        # Servidor producción
npm run lint     # Linter
```

## 📞 Soporte

Para consultas sobre el código o modificaciones, contactá al desarrollador.

## 🔐 Notas Importantes

1. **No subir** números de teléfono reales a repositorios públicos sin autorización
2. **Optimizar** imágenes antes de usarlas en producción
3. **Testear** todos los enlaces de WhatsApp antes de publicar
4. **Validar** formularios en producción (actualmente solo frontend)
5. **Configurar** dominio y hosting según necesidad

---

**MALBA VIAJES SRL** - 2026
