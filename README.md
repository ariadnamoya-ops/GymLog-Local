# GymLog

App web para registrar tus entrenos en el gimnasio: máquinas, pesos y repeticiones, con rutina semanal e historial. Funciona sin conexión y los datos se guardan solo en tu dispositivo.

## Funciones
- **Hoy:** las máquinas de tu rutina del día, con series de kg × repeticiones y lo que hiciste la última vez.
- **Iconos:** cada ejercicio tiene un pictograma minimalista (se elige por el nombre; los desconocidos usan una mancuerna).
- **Cómo se hace:** toca el icono de un ejercicio para ver una animación de 3 segundos en bucle y una pista de técnica (orientativa; ante dudas, pide ayuda a un monitor).
- **Rutina:** asigna máquinas a cada día de la semana.
- **Máquinas:** añade, renombra y borra.
- **Progreso:** gráficas por máquina de mejor peso, volumen y 1RM estimado.
- **Historial:** mejor peso y sesiones por máquina, también de máquinas borradas (sus registros no se eliminan).
- **Copia de seguridad:** exporta, copia como texto y restaura copias validadas. En web usa compartir/descarga según el navegador; en APK usa los plugins nativos indicados abajo. La app avisa si llevas más de 7 días sin copia.
- **Tema:** negro con acento morado oscuro.

## Usarla en el móvil
1. Activa GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
2. Abre `https://ariadnamoya-ops.github.io/GymLog-Local/` en el móvil.
3. **iPhone (Safari):** Compartir → Añadir a pantalla de inicio.
   **Android (Chrome):** menú ⋮ → Instalar app.

## Crear o actualizar el APK de Android (Capacitor)
Ejecuta estos comandos desde la carpeta del proyecto. Si ya tienes el proyecto Capacitor creado, no repitas `npx cap init` ni `npx cap add android`.

```bash
npm init -y
npm i @capacitor/core @capacitor/cli @capacitor/android @capacitor/filesystem @capacitor/share
npx cap init GymLog com.ariadnamoya.gymlog --web-dir=www
mkdir -p www
cp index.html manifest.webmanifest sw.js *.png www/
npx cap add android
npx cap sync android
npx cap open android
```

**Cada vez que cambies `index.html`, `sw.js`, el manifiesto o los iconos:** copia los archivos actualizados a `www/` y ejecuta `npx cap sync android` antes de generar un APK nuevo. Si tu proyecto ya existe, instala los plugins con `npm i @capacitor/filesystem @capacitor/share` y ejecuta `npx cap sync android`.

La copia nativa busca `Filesystem` y `Share` expuestos en `window.Capacitor.Plugins`. Si el proyecto usa una versión de Capacitor que no expone ese puente global, importa y registra ambos plugins en el punto de entrada JavaScript de tu proyecto; una página HTML sin empaquetar no puede importar directamente los módulos npm. En ese caso, prueba también la opción «Copiar texto» como alternativa.


## Iconos
`icon-192.png`, `icon-512.png` y `apple-touch-icon.png` son reemplazables por los tuyos con el mismo nombre.

## Datos
Los datos se guardan en `localStorage` del navegador o WebView. La app intenta pedir almacenamiento persistente, pero el navegador puede no concederlo ni garantizar que los datos nunca se borren. Exporta copias periódicamente y guarda una fuera del dispositivo.
