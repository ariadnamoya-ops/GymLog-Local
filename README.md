# GymLog

App web para registrar tus entrenos en el gimnasio: máquinas, pesos y repeticiones, con rutina semanal e historial. Funciona sin conexión y los datos se guardan solo en tu dispositivo.

## Funciones
- **Hoy:** las máquinas de tu rutina del día, con series de kg × repeticiones y lo que hiciste la última vez.
- **Iconos:** cada ejercicio tiene un pictograma minimalista (se elige por el nombre; los desconocidos usan una mancuerna).
- **Cómo se hace:** toca el icono de un ejercicio para ver una animación de 3 segundos en bucle y una pista de técnica (orientativa; ante dudas, pide ayuda a un monitor).
- **Rutina:** asigna máquinas a cada día de la semana.
- **Máquinas:** añade, renombra y borra.
- **Progreso:** gráficas por máquina de mejor peso, volumen y 1RM estimado.
- **Historial:** mejor peso y sesiones por máquina.
- **Copia de seguridad:** guarda una copia con un toque (menú compartir de iOS/Android), cópiala como texto o restáurala; la app te avisa si llevas más de 7 días sin copia.
- **Tema:** negro con acento morado oscuro.

## Usarla en el móvil
1. Activa GitHub Pages: *Settings → Pages → Deploy from a branch → `main` / `(root)`*.
2. Abre `https://ariadnamoya-ops.github.io/GymLog-Local/` en el móvil.
3. **iPhone (Safari):** Compartir → Añadir a pantalla de inicio.
   **Android (Chrome):** menú ⋮ → Instalar app.

## Crear el APK de Android (Capacitor)
```bash
npm init -y
npm i @capacitor/core @capacitor/cli @capacitor/android
npx cap init GymLog com.ariadnamoya.gymlog --web-dir=www
mkdir www && cp index.html manifest.webmanifest sw.js *.png www/
npx cap add android
npx cap open android   # Build → Build APK(s)
```

## Iconos
`icon-192.png`, `icon-512.png` y `apple-touch-icon.png` son reemplazables por los tuyos con el mismo nombre.

## Datos y recuperación
- Los datos se guardan en el dispositivo mediante `localStorage`; no se envían a ningún servidor.
- Las copias exportadas incluyen `version: 1` para facilitar futuras migraciones.
- Antes de importar una copia, GymLog comprueba la estructura de la rutina y valida las series (fecha, peso y repeticiones). Una copia no válida no sustituye los datos actuales.
- Si el almacenamiento existente está dañado, la app muestra un aviso y bloquea nuevos guardados para evitar sobrescribirlo accidentalmente. Restaura una copia válida para continuar.
- Si el navegador no permite guardar (por ejemplo, almacenamiento lleno), se muestra un aviso.
- **Importante:** borrar los datos del navegador puede eliminar los entrenamientos. Guarda copias externas periódicas y comprueba que puedes restaurarlas.

## Pruebas manuales recomendadas
1. Exporta una copia y vuelve a importarla; comprueba que rutina e historial siguen iguales.
2. Intenta importar un JSON sin `routine`, con una rutina de menos de siete días o con una serie de peso negativo/repeticiones cero; debe rechazarse sin reemplazar los datos actuales.
3. Prueba un peso decimal con coma, por ejemplo `62,5`, y repeticiones `8`.
4. Con el almacenamiento bloqueado o lleno, intenta guardar; la app debe mostrar un aviso.
5. Abre la app en modo avión después de haberla cargado previamente y registra una serie.

Estas comprobaciones automáticas y manuales son necesarias antes de considerar la fase de protección de datos completamente validada.
