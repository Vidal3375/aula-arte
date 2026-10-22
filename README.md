# 🏛️ Aula de Arte

App web gratuita para que los alumnos repasen Historia del Arte jugando.
Funciona en **iPhone, iPad y Android** (y en el ordenador), se puede **añadir a la pantalla de inicio** como una app más y, una vez abierta, **funciona sin conexión**.

**Primera actividad: El arte griego** (temario PAU, Comunitat Valenciana).

---

## Qué incluye

- **5 juegos**: Identifica la obra · Etapas · Rasgos de estilo · Contexto histórico · Repaso mezclado.
- **3 niveles de dificultad**:

  | Nivel | Preguntas de texto | Preguntas con imagen (se crean solas) |
  | --- | --- | --- |
  | Básico | 32 | ¿Qué obra es? · ¿Cuál de estas 4 imágenes es…? · ¿Arcaico, clásico o helenístico? |
  | Normal | 45 | Las mismas, pero con obras parecidas como opciones falsas · ¿Quién es el autor? · ¿De qué etapa (5 etapas)? |
  | Extremo | 37 | ¿De cuándo es? · ¿Dónde está? · ¿Qué rasgo de estilo la describe? · Autoría |

- Tras cada respuesta, **explicación** sacada de tus apuntes. En las preguntas de órdenes, partes del templo, teatro y postura aparece además el **esquema** correspondiente.
- Al final: nota, estrellas, **lista de fallos** y botón para **repetir solo los fallos**.
- **Fichas de las 14 obras** del listado PAU, con foto ampliable, datos y frase clave.
- Partidas de 10 o 20 preguntas. Las preguntas y las respuestas se barajan en cada partida.
- Récord por juego y nivel guardado **solo en el dispositivo del alumno**. No se envía ningún dato a ningún sitio y no hace falta registrarse.

---

## Cómo publicarla gratis en GitHub Pages (paso a paso)

Solo hay que hacerlo una vez. Tardarás unos 15 minutos.

### 1. Crea una cuenta en GitHub
Entra en <https://github.com> y pulsa **Sign up**. Es gratis. Elige bien tu **nombre de usuario**: aparecerá en la dirección de la app.

### 2. Crea un repositorio (la «carpeta» donde vivirá la app)
1. Arriba a la derecha pulsa **+** → **New repository**.
2. En **Repository name** escribe: `aula-arte`
3. Marca **Public** (GitHub Pages gratis necesita que sea público).
4. Pulsa **Create repository**.

### 3. Sube los archivos
1. En la página del repositorio, pulsa el enlace **uploading an existing file** (o **Add file → Upload files**).
2. Abre en el Finder la carpeta `aula-arte` y **selecciona todo lo que hay dentro** (`index.html`, `estilos.css`, `sw.js`, las carpetas `datos`, `img`, `js`, los iconos…). Arrástralo a la ventana de GitHub.
   ⚠️ Arrastra el **contenido** de la carpeta, no la carpeta `aula-arte` entera. `index.html` tiene que quedar en la portada del repositorio.
3. Espera a que terminen de subir y pulsa **Commit changes** (el botón verde de abajo).

### 4. Activa GitHub Pages
1. En el repositorio, pulsa **Settings** (arriba, con una rueda dentada).
2. En el menú de la izquierda, pulsa **Pages**.
3. En **Source** elige **Deploy from a branch**.
4. En **Branch** elige **main** y la carpeta **/ (root)**. Pulsa **Save**.
5. Espera 1 o 2 minutos y recarga la página. Arriba aparecerá la dirección de tu app:

   **`https://TU-USUARIO.github.io/aula-arte/`**

### 5. Compártela con tus alumnos
- Copia la dirección y pégala en Aules, Classroom, el correo…
- O proyéctala como **código QR**: en Chrome, abre la app, pulsa el icono de compartir de la barra de direcciones → **Crear código QR**.

---

## Cómo la instalan los alumnos

**iPhone y iPad (Safari)**
1. Abrir la dirección en **Safari**.
2. Pulsar el botón **Compartir** (el cuadrado con la flecha hacia arriba).
3. Elegir **Añadir a pantalla de inicio** → **Añadir**.

La propia app muestra este aviso a quien la abre en un iPhone o iPad.

**Android (Chrome)**
1. Abrir la dirección en **Chrome**.
2. Pulsar el botón **Instalar** que aparece en la app, o el menú **⋮** → **Instalar aplicación** (o **Añadir a pantalla de inicio**).

Después se abre desde su icono, a pantalla completa, y funciona sin internet.

---

## Cómo cambiar o añadir preguntas

Todo el contenido está en un solo archivo: **`datos/arte-griego.js`**. No hace falta tocar nada más.

**Desde la web de GitHub (lo más fácil):**
1. En el repositorio, entra en la carpeta `datos` y abre `arte-griego.js`.
2. Pulsa el **lápiz** ✏️ (Edit this file).
3. Busca el final de la lista de preguntas, copia un bloque como este y cambia el texto:

```js
    {
      tema: "estilo",
      nivel: "normal",
      texto: "¿Qué orden tiene el capitel con dos espirales (volutas)?",
      correcta: "Jónico",
      incorrectas: ["Dórico", "Corintio", "Toscano"],
      explicacion: "El capitel es la clave para distinguir los órdenes. Volutas = jónico.",
      esquema: "ordenes"
    },
```

- `tema`: `"estilo"`, `"etapas"` o `"contexto"` (decide en qué juego sale).
- `nivel`: `"basico"`, `"normal"` o `"extremo"`.
- `correcta`: la respuesta buena. `incorrectas`: tres respuestas falsas. La app las baraja.
- `esquema` es opcional: `"templo"`, `"ordenes"`, `"teatro"` o `"postura"`.
- Cuidado con las **comillas** y con la **coma** que separa un bloque `{ … }` del siguiente.

4. Pulsa **Commit changes**.
5. **Importante:** abre también `sw.js`, cambia `aula-arte-v1` por `aula-arte-v2` (y la próxima vez, `v3`…) y guarda. Así los móviles que ya tienen la app instalada descargan la versión nueva.

Las preguntas con imagen se crean solas a partir de la lista `obras` del mismo archivo. Si corriges un dato de una obra (fecha, autor, rasgo…), las preguntas se actualizan.

---

## Cómo probarla en tu ordenador antes de subirla

Abre la app **Terminal**, entra en la carpeta y arranca un pequeño servidor:

```bash
cd ~/"Documents/Mesa de trabajo de Claude/aula-arte" && python3 -m http.server 8000
```

Abre <http://localhost:8000> en el navegador. Para pararlo, pulsa `Ctrl + C` en la Terminal.
(Si abres `index.html` con doble clic también funciona, pero sin el modo sin conexión.)

---

## Qué hay en cada archivo

| Archivo o carpeta | Para qué sirve |
| --- | --- |
| `index.html` | La página principal |
| `estilos.css` | Colores y diseño |
| `js/app.js` | Cómo funciona el juego (no hace falta tocarlo) |
| `datos/arte-griego.js` | **Las obras y las preguntas** |
| `img/griego/` | Fotos de las 14 obras (reducidas para que carguen rápido) |
| `img/esquemas/` | Esquemas del templo, los órdenes, el teatro y la postura |
| `manifest.webmanifest` | Nombre e icono al instalarla |
| `sw.js` | Guarda la app en el móvil para usarla sin conexión |
| `icon*.png`, `icon.svg` | Iconos |

---

## Próximos pasos

- **Nueva actividad (por ejemplo, Arte romano):** copiar `datos/arte-griego.js` como `datos/arte-romano.js`, cambiar `"arte-griego"` por `"arte-romano"` en la línea `window.ACTIVIDADES[...]`, poner sus obras y preguntas, sus fotos en `img/romano/`, y añadir una línea `<script src="datos/arte-romano.js"></script>` en `index.html`.
- **Versión nativa (App Store / Google Play):** el contenido ya está separado del diseño, así que las obras y preguntas se podrán reutilizar tal cual.

---

## Créditos

Contenido elaborado a partir de los apuntes de clase de Historia del Arte (2.º Bachillerato) y del listado de obras de la PAU de la Comunitat Valenciana.

Fotografías de Wikimedia Commons (autores y licencias en la pantalla **Créditos** de la app y en `datos/arte-griego.js`). Las licencias CC BY y CC BY-SA obligan a citar al autor, y la app lo hace.
