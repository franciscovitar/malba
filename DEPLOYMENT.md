# Instrucciones de Deployment

## Opciones de Hosting

### 1. Vercel (Recomendado - Gratis)

Vercel es la plataforma creada por el equipo de Next.js. Es la opción más simple:

1. Creá cuenta en [vercel.com](https://vercel.com)
2. Conectá tu repositorio de GitHub/GitLab
3. Vercel detecta automáticamente Next.js
4. Deploy automático en cada push

**Dominio custom gratis** incluido.

```bash
# O usando Vercel CLI
npm i -g vercel
vercel
```

### 2. Netlify (Alternativa)

1. Registrate en [netlify.com](https://netlify.com)
2. Conectá tu repositorio
3. Build command: `npm run build`
4. Publish directory: `.next`

### 3. Servidor Propio (VPS/Hosting Node.js)

Requisitos:
- Node.js 18+
- Servidor con soporte Node.js (VPS, DigitalOcean, AWS, etc.)

```bash
# En tu servidor
git clone <tu-repo>
cd malba
npm install
npm run build
npm start
```

Para producción con PM2:
```bash
npm install -g pm2
pm2 start npm --name "malba-web" -- start
pm2 save
pm2 startup
```

### 4. Docker (Avanzado)

Crear `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t malba-web .
docker run -p 3000:3000 malba-web
```

## Variables de Entorno

Si necesitás variables de entorno, creá `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://malbaviajes.com.ar
```

## Pre-Deploy Checklist

✅ Reemplazar imágenes placeholder con fotos reales
✅ Optimizar imágenes (< 500KB, formato webp)
✅ Testear todos los enlaces de WhatsApp
✅ Verificar números de teléfono
✅ Probar responsive en móvil
✅ Configurar dominio custom
✅ Configurar SSL/HTTPS
✅ Google Analytics (opcional)
✅ Google Search Console
✅ robots.txt y sitemap.xml

## Performance

Para mejor rendimiento:

1. **Optimizar imágenes**: Usar formato .webp o .avif
2. **CDN**: Vercel/Netlify incluyen CDN gratis
3. **Caché**: Next.js maneja automáticamente
4. **Lighthouse**: Verificar score 90+

```bash
npm run build
# Verificar el output bundle size
```

## SEO Post-Deploy

1. Registrar en [Google Search Console](https://search.google.com/search-console)
2. Registrar en [Bing Webmaster](https://www.bing.com/webmasters)
3. Crear sitemap.xml (Next.js puede generarlo)
4. Configurar Google Analytics (opcional)
5. Schema.org markup para local business

## Dominio

Opciones de dominios .com.ar:
- nic.ar (registro oficial Argentina)
- Donweb
- Hostinger
- GoDaddy

Configurar DNS:
- A Record: apuntar a IP del servidor
- CNAME: para Vercel/Netlify seguir sus instrucciones

## Soporte WhatsApp Business

Considerar:
1. WhatsApp Business API (requiere verificación)
2. Formulario con notificaciones por email (SendGrid, Resend)
3. CRM básico (Notion, Airtable) para gestionar consultas

## Mantenimiento

- Actualizar Next.js regularmente: `npm update next react react-dom`
- Backup de la base de datos (si agregás backend)
- Monitoreo con Vercel Analytics o Google Analytics
- Revisar Console de errores mensualmente

---

¿Dudas? Consultá la [documentación oficial de Next.js](https://nextjs.org/docs/deployment)
