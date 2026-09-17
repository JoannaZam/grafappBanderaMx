# Prompts generados en ChatGpt 

## Promt 1:
Hola ChatGPT. Necesito desarrollar una **interfaz web interactiva de la Bandera de México** para una actividad escolar. Quiero que el resultado tenga un diseño **moderno, elegante, limpio y formal**, pero que siga siendo visualmente atractivo.

### Estructura del proyecto
El proyecto debe estar dividido en **tres archivos independientes**:
-   `index.html` → estructura de la página.
-   `estilos.css` → todo el diseño y estilos visuales.
-   `script.js` → toda la funcionalidad e interacción.
- 
No quiero colocar CSS ni JavaScript directamente dentro del HTML. Todo debe estar correctamente separado.

### Bandera de México
La parte principal de la interfaz debe mostrar una **Bandera de México horizontal**, dividida en tres franjas verticales:

🟢 Verde | ⚪ Blanco | 🔴 Rojo
En la franja blanca, justo en el centro, debe colocarse el **escudo oficial de la Bandera de México**. Yo puedo proporcionar/subir la imagen del escudo para utilizarla, por lo que debe prepararse la interfaz para utilizar **esa imagen exacta**.

**Importante:** únicamente la imagen del escudo debe tener control de transparencia. La franja blanca debe permanecer completamente blanca.

### Controles interactivos
Debe haber **tres controles deslizantes (**`******range******`**)**, uno para cada parte de la bandera:

**1. Verde — “Esperanza”**
-   Debe controlar únicamente el color verde.
-   En **0%** debe mostrarse el tono verde más oscuro.
-   Al aumentar el porcentaje, el verde debe hacerse progresivamente más claro/intenso.
-   En **100%** debe mostrarse el tono verde más intenso y claro.
-   Debe mostrarse el código hexadecimal del color actual.
    
**2. Blanco — “Unidad”**
-   Este control NO debe modificar el color blanco.
-   Debe controlar exclusivamente la **transparencia del escudo**.
-   En **0%**, el escudo debe ser completamente transparente/invisible.
-   En **100%**, el escudo debe mostrarse completamente visible.
-   La franja blanca debe permanecer siempre en color blanco.
-   Debe mostrarse el porcentaje actual de transparencia/visibilidad.

**3. Rojo — “Sangre de nuestros héroes nacionales”**
-   Debe controlar únicamente el color rojo.
-   En **0%** debe mostrarse el tono rojo más oscuro.
-   Al aumentar el porcentaje, el rojo debe hacerse progresivamente más claro/intenso.
-   En **100%** debe mostrarse el tono rojo más intenso y claro.
-   Debe mostrarse el código hexadecimal del color actual.

### Diseño visual
Quiero que la interfaz tenga un estilo:
-   Moderno
-   Elegante
-   Profesional
-   Limpio
-   Formal
-   Fácil de entender
-   Con buena distribución de espacios
-   Adaptable a computadora y celular

**No quiero un fondo demasiado decorado.** Prefiero un fondo sencillo y formal, por ejemplo, blanco, gris muy claro o un degradado muy sutil. Se pueden utilizar pequeños detalles relacionados con México, pero sin saturar la interfaz.
Los controles pueden estar dentro de **tarjetas modernas con bordes redondeados, sombras suaves y una apariencia profesional**.
La bandera debe ser el elemento principal y tener un tamaño grande, centrado y visualmente destacado.

### Datos institucionales
Debajo de la bandera debe aparecer una sección de **“Datos institucionales”** con la siguiente información:
-   Instituto: **Instituto Tecnológico de Pachuca**
-   Carrera: **Ingeniería en Sistemas Computacionales**
-   Docente: **Luis Alejandro Santana Valdez**
-   Nombre de los alumnos: **[colocar nombres del equipo]**
-   Número de control de cada alumno: **[colocar números de control]**
-   Fecha: **[colocar fecha]**
    
Como somos un equipo, debe existir espacio para colocar **varios alumnos y sus respectivos números de control**, de una manera ordenada y visualmente agradable.

### Funcionalidad
El JavaScript debe hacer que los controles funcionen **en tiempo real**, sin necesidad de recargar la página.
Cada vez que mueva un control:
-   El verde debe cambiar únicamente en la franja verde.
-   El rojo debe cambiar únicamente en la franja roja.
-   La transparencia debe afectar únicamente al escudo.
-   Los valores mostrados en pantalla deben actualizarse automáticamente.

El código debe estar **bien organizado, comentado y ser fácil de entender para un estudiante**, evitando hacerlo innecesariamente complicado.

### Referencia visual
Quiero que la distribución general sea similar a la imagen que adjunto: los tres controles en la parte superior, la bandera grande debajo y los datos institucionales al final.
Sin embargo, quiero que el resultado se vea **más moderno, elegante y profesional que la referencia**, manteniendo un fondo sencillo y formal.

**Importante:** no agregues elementos que no sean necesarios. La prioridad es que la bandera, los controles y los datos institucionales sean los protagonistas de la interfaz.
Al finalizar, proporciona los tres archivos completos por separado:
1.  `index.html`
2.  `estilos.css`
3.  `script.js`

y explica brevemente dónde debo colocar la imagen del escudo y cómo modificar los nombres y números de control de los integrantes del equipo.

## Promt 2:
Esta perfecto, solo le hace falta tener mas vida, podemos mejorar algunas cosas... los colores verde y rojo pueden llegar a un tono aun muchisimo mas intenso, el tamaño de la vandera esta muy grande, para los datos instutucionales le podemos agregar un pequeño espacio para los logos de la escuela


## Promt 3:
Ese diseño es muy lindo, yo podria agregar las imagenes para el escudo de la bandera y los logos de la escuela, ademas podria modificar los datos institucionales. ahora me podrias gener los codigos para que lo pueda realizar? serian para `index.html` , `estilos.css` y `script.js` porfis
