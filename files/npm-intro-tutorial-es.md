# **Guía para Principiantes: Cómo Empezar con npm**

#### [**#**](#qué_es_npm) ¿Qué es npm?
<div id='qué_es_npm'>
npm (Node Package Manager) es el administrador de paquetes predeterminado para el entorno de ejecución JavaScript Node.js. Permite a los desarrolladores compartir, descargar y gestionar bibliotecas (también llamadas paquetes) que pueden incorporarse fácilmente en sus proyectos.

<img class='blog-c' src='https://res.cloudinary.com/benjamincrozat-com/image/fetch/c_scale,f_webp,q_auto,w_1200/https://github.com/benjamincrozat/content/assets/3613731/527efaf4-30dd-4066-8f8b-1012c05f904d' alt='leer_un_archivo_nodejs'>

Esta guía te ayudará a configurar npm y cubrirá los conceptos básicos para principiantes.
</div>

### [**#**](#instalar_node.js_y_npm) Paso 1: Instalar Node.js y npm

<div id='instalar_node.js_y_npm'>
npm viene incluido con Node.js, por lo que al instalar Node.js, también obtendrás npm. Sigue estos pasos:

1. **Descargar Node.js**:
   - Ve al [sitio web oficial de Node.js](https://nodejs.org/).
   - Descarga la versión recomendada LTS (Long Term Support).
   
2. **Instalar Node.js**:
   - Ejecuta el instalador y sigue los pasos de instalación.
   - Después de la instalación, verifica las versiones de Node.js y npm usando estos comandos en tu terminal o consola de comandos:
     ```bash
     node -v
     npm -v
     ```
   - Deberías ver las versiones de Node.js y npm listadas.
</div>

### [**#**](#crear_un_nuevo_proyecto) Paso 2: Crear un Nuevo Proyecto
<div id='crear_un_nuevo_proyecto'>
Ahora que tienes Node.js y npm instalados, vamos a crear un nuevo proyecto y usar npm para gestionar dependencias.

1. **Crear una carpeta de proyecto**:
   - En tu terminal, navega al directorio donde deseas crear tu proyecto y ejecuta:
     ```bash
     mkdir mi-primer-proyecto-npm
     cd mi-primer-proyecto-npm
     ```

2. **Inicializar npm**:
   - Ejecuta el siguiente comando dentro de la carpeta:
     ```bash
     npm init
     ```
   - Se te pedirá que respondas varias preguntas (nombre, versión, descripción, etc.). Puedes presionar `Enter` para omitirlas y usar las opciones predeterminadas o personalizarlas.

   - Después de este paso, se creará un archivo `package.json` en tu directorio de proyecto. Este archivo es importante porque contiene información sobre tu proyecto y realiza un seguimiento de las dependencias.
</div>

### [**#**](#instalar_paquetes) Paso 3: Instalar Paquetes
<div id='instalar_paquetes'>
npm facilita la instalación de bibliotecas de terceros (llamadas paquetes).

1. **Instalar un paquete**:
   - Para instalar un paquete (por ejemplo, `lodash`), usa el siguiente comando:
     ```bash
     npm install lodash
     ```

   - Esto:
     - Instalará `lodash` y lo guardará en el directorio `node_modules` (una carpeta que contiene todas las dependencias de tu proyecto).
     - Agregará el paquete como dependencia en el archivo `package.json`.

2. **Instalar un paquete globalmente**:
   - Si deseas instalar un paquete de manera global (para que pueda usarse en todos los proyectos en tu máquina), agrega la bandera `-g`:
     ```bash
     npm install -g nodemon
     ```
</div>

### [**#**](#usar_paquetes_en_tu_código) Paso 4: Usar Paquetes en tu Código
<div id='usar_paquetes_en_tu_código'>
Para usar un paquete en tu código, simplemente utiliza `require`. Por ejemplo, si instalaste `lodash`:

1. Crea un nuevo archivo JavaScript (`index.js`):
   ```js
   const lodash = require('lodash');

   const array = [1, 2, 3, 4, 5];
   console.log(lodash.reverse(array));
   ```

2. Ejecuta tu archivo:
   ```bash
   node index.js
   ```

Deberías ver la salida del arreglo invertido: `[5, 4, 3, 2, 1]`.
</div>

### [**#**](#gestionar_dependencias) Paso 5: Gestionar Dependencias
<div id='gestionar_dependencias'>
#### Ver Paquetes Instalados
Puedes ver una lista de todos los paquetes instalados ejecutando:
```bash
npm list
```

#### Eliminar un Paquete
Para desinstalar un paquete, ejecuta:
```bash
npm uninstall <nombre-del-paquete>
```

Esto eliminará el paquete de la carpeta `node_modules` y actualizará tu archivo `package.json` para reflejar el cambio.

#### Instalar Paquetes desde `package.json`
Si clonas un proyecto con un archivo `package.json` existente y necesitas instalar sus dependencias, ejecuta:
```bash
npm install
```

Esto instalará todas las dependencias listadas en `package.json`.
</div>

### [**#**](#usar_scripts_de_npm) Paso 6: Usar Scripts de npm
<div id='usar_scripts_de_npm'>
Puedes definir scripts personalizados en el archivo `package.json` para automatizar tareas como ejecutar pruebas o iniciar un servidor.

1. Abre tu archivo `package.json` y agrega una sección `scripts` si aún no está presente:
   ```json
   "scripts": {
     "start": "node index.js",
     "test": "echo \"Error: no se especificaron pruebas\" && exit 1"
   }
   ```

2. Para ejecutar el script `start`, usa:
   ```bash
   npm start
   ```

Puedes agregar más scripts para automatizar diferentes flujos de trabajo, como linteo, pruebas y compilación.
</div>

### [**#**](#actualizar_paquetes) Paso 7: Actualizar Paquetes
<div id='actualizar_paquetes'>

1. **Verificar paquetes desactualizados**:
   ```bash
   npm outdated
   ```

2. **Actualizar un paquete específico**:
   ```bash
   npm update <nombre-del-paquete>
   ```

3. **Actualizar npm**:
   ```bash
   npm install npm@latest -g
   ```
</div>

### [**#**](#conclusión) Conclusión
<div id='conclusión'>
Con estos conceptos básicos, estás listo para empezar a usar npm en tus proyectos. Puedes explorar la [documentación oficial de npm](https://docs.npmjs.com/) para conocer funciones más avanzadas, como gestionar versiones, trabajar con archivos de bloqueo y publicar tus propios paquetes.
</div>
