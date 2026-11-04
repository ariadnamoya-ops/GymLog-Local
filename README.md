# 💪 GymLog - Tu Diario de Gimnasio

Una aplicación web progresiva (PWA) para registrar y hacer seguimiento de tus entrenamientos en el gimnasio. Simple, rápida y funciona sin conexión.

## ✨ Características

### 📊 Seguimiento de Entrenamientos
- **Registro de series**: Peso, repeticiones y notas por cada serie
- **Rutina semanal**: Planifica qué ejercicios hacer cada día
- **Historial completo**: Revisa todas tus sesiones anteriores
- **Récords personales**: Celebra automáticamente cuando superas tu mejor peso 🏆

### 📈 Análisis y Progreso
- **Gráficas de progreso**: 3 métricas (peso máximo, volumen, 1RM estimado)
- **Comparación de ejercicios**: Visualiza múltiples ejercicios en una gráfica
- **Resumen semanal**: Estadísticas de series, volumen y ejercicios únicos
- **Exportar a CSV**: Descarga tus datos para análisis avanzado

### 🎯 Herramientas de Entrenamiento
- **Temporizador de descanso**: 90 segundos con vibración al finalizar
- **Animaciones de ejercicios**: Aprende la técnica correcta
- **Plantillas de ejercicios**: Pre-llena pesos y repeticiones recomendadas
- **Superseries**: Agrupa ejercicios para entrenamientos más intensos
- **Notas por serie**: Registra cómo te sentiste o detalles técnicos

### 🎨 Experiencia de Usuario
- **Tema claro/oscuro**: Cambia según tu preferencia
- **Notificaciones toast**: Feedback visual sin interrupciones
- **Atajos de teclado**: Presiona Enter para añadir series rápidamente
- **Funciona offline**: Todos tus datos se guardan localmente
- **Sincronización entre pestañas**: Cambios se reflejan automáticamente

### 🔒 Seguridad y Datos
- **Copia de seguridad**: Exporta/importa tus datos en formato JSON
- **Validación estricta**: Protección contra datos corruptos
- **Sin servidor**: Tus datos nunca salen de tu dispositivo
- **Límites de seguridad**: Máximo 500 ejercicios, 100,000 registros

## 🚀 Instalación

### Opción 1: Uso Local
1. Descarga los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo para usar!

### Opción 2: GitHub Pages (Recomendado para móvil)
1. Sube los archivos a un repositorio de GitHub
2. Activa GitHub Pages en la configuración
3. Abre la URL en tu móvil
4. Toca "Añadir a la pantalla de inicio" para instalarlo como app

## 📱 Compatibilidad

- ✅ Chrome / Edge (Windows, Mac, Android)
- ✅ Safari (iOS, Mac)
- ✅ Firefox (todas las plataformas)
- ✅ Modo offline completo
- ✅ PWA instalable en móviles

## 🎓 Cómo Usar

### Primera vez
1. Ve a **Máquinas** y añade tus ejercicios favoritos
2. Ve a **Rutina** y planifica tu semana
3. En **Hoy** empieza a registrar tus series

### Registrar series
1. Introduce peso (kg) y repeticiones
2. Presiona **Enter** o clic en "Añadir serie"
3. Añade una nota opcional si quieres
4. ¡El récord personal se celebra automáticamente! 🏆

### Ver tu progreso
1. Ve a **Progreso** para ver gráficas de evolución
2. Cambia entre métricas: Peso, Volumen, 1RM
3. Usa "Comparar ejercicios" para ver varios a la vez

### Configurar temporizador
1. Toca **⏱ Descanso** junto al ejercicio
2. El temporizador cuenta 90 segundos
3. Vibra al terminar (en móviles)

## 🛠️ Características Técnicas

- **Tamaño**: ~70 KB (archivo único HTML)
- **Formato de datos**: JSON versionado (v2)
- **Almacenamiento**: localStorage (5 MB límite típico)
- **Compatibilidad PWA**: manifest.webmanifest + service worker
- **Animaciones**: Respeta prefers-reduced-motion
- **Accesibilidad**: ARIA labels y navegación por teclado

## 📦 Estructura de Datos

```json
{
  "version": 2,
  "theme": "dark",
  "machines": ["Press de banca", "Sentadilla", ...],
  "routine": [[], [], [], [], [], [], []],
  "logs": [
    {
      "d": "2026-11-04",
      "m": "Press de banca",
      "kg": 80,
      "r": 10,
      "note": "Buena forma"
    }
  ],
  "templates": {
    "Press de banca": {"kg": 60, "r": 12}
  },
  "supersets": [
    ["Press de banca", "Press inclinado"]
  ]
}
```

## 🔧 Personalización

### Cambiar ejercicios predeterminados
Edita la línea 73 en `index.html`:
```javascript
machines:["Tu ejercicio 1","Tu ejercicio 2",...]
```

### Ajustar límites
```javascript
const MAX_MACHINES=500;  // Máximo de ejercicios
const MAX_BACKUP_BYTES=5*1024*1024;  // Límite de backup
```

## 🐛 Solución de Problemas

**No guarda los cambios**
- Verifica que tu navegador permita localStorage
- Libera espacio (el límite suele ser 5-10 MB)
- Exporta una copia de seguridad por si acaso

**La gráfica no se muestra**
- Necesitas al menos 2 sesiones con el mismo ejercicio
- Verifica que los datos tengan fechas válidas

**El tema no cambia**
- Refresca la página
- Limpia la caché del navegador

**No se sincroniza entre pestañas**
- Solo funciona en el mismo navegador
- Las pestañas en modo incógnito están aisladas

## 📝 Changelog

### v2.0 (Noviembre 2026)
- ✅ Corrección de 8 bugs críticos
- ✅ Tema claro/oscuro con icono dinámico
- ✅ Notificaciones toast en lugar de alerts
- ✅ Soporte para Enter en campos de input
- ✅ Edición de días de descanso
- ✅ Estados vacíos con ilustraciones
- ✅ Limpieza automática de Blob URLs
- ✅ Detección correcta de récords personales
- ✅ Sincronización entre pestañas mejorada

### v1.0 (Octubre 2026)
- Lanzamiento inicial

## 🤝 Contribuir

Este es un proyecto de archivo único HTML para máxima portabilidad. Si quieres mejorarlo:

1. Mantén todo en un solo archivo `index.html`
2. Añade tests para funciones críticas
3. Documenta cambios en BUGS_FIXED.md
4. Incrementa el número de versión en el JSON

## 📄 Licencia

Libre para uso personal. No requiere atribución.

## 🙏 Créditos

- Diseño: Inspirado en apps de fitness modernas
- Iconos: SVG personalizados dibujados a mano
- Animaciones de ejercicios: Basadas en técnica de levantamiento estándar

---

**¿Preguntas o sugerencias?** Abre un issue en GitHub

commmit Trigger rebuild


**¡Disfruta tus entrenamientos!** 💪🔥
