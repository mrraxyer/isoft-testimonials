# Aplicación Testimonios

**Ingeniería de Software** — TecNM en Celaya  
Hecho por: Rafael Abonce García

## Descripción General

Carrusel interactivo de testimonios construido con React + Vite. Muestra testimonios de clientes uno a la vez con navegación manual (anterior/siguiente/aleatorio) y reproducción automática cada 5 segundos que se reinicia cuando el usuario interactúa.

## Características

- **Navegación Circular** — Último → Primero, Primero → Último con envolvimiento
- **Autoplay** — Avanza automáticamente cada 5 segundos
- **Controles de Usuario** — Botones Anterior, Siguiente, Aleatorio
- **Diseño Responsivo** — Mobile-first, se adapta a pantallas de 480px+
- **Accesible** — aria-labels en todos los elementos interactivos
- **Interfaz Pulida** — Variables CSS para temas, sombras suaves

## Estructura del Proyecto

```
src/
├── main.jsx              Punto de entrada — monta la aplicación React
├── App.jsx               Gestión de estado, lógica autoplay, layout principal
├── data.js               8 testimonios (array estático)
├── index.css             Reset CSS
├── styles.css            Estilos de componentes + variables
└── components/
    ├── Testimonial.jsx   Componente presentacional de tarjeta
    └── Controls.jsx      Botones de navegación con iconos lucide-react
```

## Componentes

### `App.jsx`
**Responsabilidad:** Gestión de estado, orquestación de autoplay, lógica de navegación.

**Estado:**
- `index` — Índice del testimonio actual (0-7)
- `autoplayRef` — Referencia a `setInterval` para rotación cada 5 segundos

**Funciones Clave:**
- `next()` / `prev()` / `random()` — Actualiza índice con envolvimiento circular
- `handleUserAction(fn)` — Limpia intervalo de autoplay, ejecuta acción, reinicia intervalo
- `useEffect` — Inicializa autoplay al montar, limpia al desmontar

**Renderiza:**
- `<Testimonial item={testimonios[index]} />`
- `<Controls onPrev onNext onRandom />`
- Contador: `{index + 1} / {length}`

### `Testimonial.jsx`
**Responsabilidad:** Tarjeta presentacional — muestra un testimonio.

**Props:**
- `item` — Objeto con `{ nombre, cargo, texto, foto }`

**Renderiza:**
- Avatar circular (90×90px)
- Nombre (h3)
- Título/rol (p)
- Texto de testimonial entrecomillado e itálico (p)

**Nota:** Sin estado, sin lógica. Puramente presentacional.

### `Controls.jsx`
**Responsabilidad:** Interfaz de navegación — tres botones interactivos.

**Props:**
- `onPrev()` — Callback cuando se hace clic en anterior
- `onNext()` — Callback cuando se hace clic en siguiente
- `onRandom()` — Callback cuando se hace clic en aleatorio

**Iconos:** lucide-react
- `ChevronLeft` (◀ anterior)
- `ChevronRight` (▶ siguiente)
- `Dice1` (🎲 aleatorio)

**Nota:** Sin lógica. Solo renderiza botones y llama las props.

### `data.js`
**Responsabilidad:** Array estático de testimonios.

8 elementos, cada uno con:
- `id` — Identificador único
- `nombre` — Nombre de la persona
- `cargo` — Título/rol del trabajo
- `texto` — Cita del testimonio
- `foto` — URL del avatar (pravatar.cc)

Exportado por defecto: `export default testimonios;`

## Estilos

Todos los estilos en `src/styles.css`.

**Variables CSS:**
- `--bg: #f7f7fb` — Fondo de página
- `--card: #fff` — Fondo de tarjeta/botón
- `--accent: #4f46e5` — Color hover de botones
- `--muted: #666` — Color de texto secundario

**Clases Clave:**
- `.app` — Contenedor centrado 420px
- `.testimonial-card` — Contenedor de tarjeta con sombra
- `.testimonial-photo` — Avatar circular
- `.controls` — Fila flex de botones
- `.counter` — Texto pequeño mostrando posición

**Responsivo:** `@media (max-width: 480px)` — `.app` ancho 100%, relleno reducido

## Cómo Funciona

1. **Carga Inicial**
   - App monta, `useEffect` inicia `setInterval(5000)`
   - Primer testimonio mostrado (index=0)

2. **Usuario Hace Clic en Botón**
   - Handler llama `handleUserAction(actionFn)`
   - Limpia intervalo actual
   - Ejecuta acción (anterior/siguiente/aleatorio)
   - Reinicia intervalo a 5000ms

3. **Autoplay Cada 5 Segundos**
   - `setIndex(i => (i + 1) % length)`
   - Envuelve a 0 al final

4. **Navegación Circular**
   - `prev`: `(i - 1 + length) % length` asegura sin negativos
   - `next`: `(i + 1) % length` envuelve en length
   - `random`: Elige índice nuevo, evita el actual

## Comenzar

### Instalar Dependencias
```bash
npm install
```

### Ejecutar Servidor de Desarrollo
```bash
npm run dev
```
Abre `http://localhost:5173`

### Construir para Producción
```bash
npm run build
```
Salida en `dist/`

## Tecnologías

- **React 19** 
- **Vite 8** 
- **lucide-react** 
- **CSS3**
