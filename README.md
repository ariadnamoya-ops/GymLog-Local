# GymLog

App web para registrar tus entrenos en el gimnasio: máquinas, pesos y repeticiones, con rutina semanal e historial. Funciona sin conexión y los datos se guardan solo en tu dispositivo.

## Funciones
- **Hoy:** las máquinas de tu rutina del día, con series de kg × repeticiones y lo que hiciste la última vez.
- **Rutina:** asigna máquinas a cada día de la semana.
- **Máquinas:** añade, renombra y borra.
- **Historial:** mejor peso y sesiones por máquina.
- **Copia de seguridad:** exporta e importa un archivo `.json`.

## Usarla en el móvil
1. Activa GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
2. Abre `https://ariadnamoya-ops.github.io/gymlog/` en el móvil.
3. **iPhone (Safari):** Compartir → Añadir a pantalla de inicio.
   **Android (Chrome):** menú ⋮ → Instalar app.

## Crear el APK de Android (Capacitor)
```bash
npm init -y
npm i @capacitor/core @capacitor/cli @capacitor/android
npx cap init GymLog com.tunombre.gymlog --web-dir=www
mkdir www && cp index.html manifest.webmanifest sw.js *.png www/
npx cap add android
npx cap open android   # Build → Build APK(s)
```

## Iconos
`icon-192.png`, `icon-512.png` y `apple-touch-icon.png` son reemplazables por los tuyos con el mismo nombre.

## Datos
Todo se guarda en `localStorage`. Si borras los datos del navegador los pierdes: exporta copias de vez en cuando.
