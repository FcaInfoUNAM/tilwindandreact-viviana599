# Laboratorio React y tailwind

Este laboratorio tiene el objetivo demostrar como cargar un framwork de css a un proyecto de react

## Requisitos Previos

1. Vite
2. Crear una cuenta en [GitHub](https://github.com/).
3. Utilizar un codespace de git hub o un dev container con docker en tu computadora de forma local

---

## Instrucciones Paso a Paso

### 1. Creando un nuevo proyecto

1.1 Una vez iniciado el espacio de trabajo, hay que ejecutar los siguientes comandos:

```bash
npm create vite@latest tailwind-app -- --template react
```
esto creará una nueva carpeta llamada tailwind-app muévete a ese directorio
```
cd tailwind-app
```
> [!NOTE] 
> Si revisas el directorio, verás la estructura de un proyecto web.

1.2  Instalar los paquetes del proyecto y tailwind

``` bash
npm install
npm install tailwindcss @tailwindcss/vite
```
1.3 Agregar tailwind al proyecto

Agrega el pluging @tailwindcss/vite en la configuración de Vite . en el archivo vite.config.js

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // agrega esta linea
export default defineConfig({
  plugins: [
    tailwindcss(),// agrega tailwind al array de plugings
  ],
})
```

> [!TIP]
> Siempre que instales dependencias nuevas o archivos, debes instalarlos con el comando

Al instalar, deberás de ver un mensaje similar a este:
```
added 149 packages, and audited 150 packages in 1m

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

1.4 Ejecuta react en modo de desarrollo

```
npm run dev -- --host
```

> [!IMPORTANT]
> Se desplegará un pop up en la parte inferior derecha con el mensaje: La aplicación que se ejecuta en el puerto 5173 está disponible. 
> [Ver todos los puertos reenviados] (command:~remote.forwardedPorts.focus) [Abrir en el navegador] [Hacer público] Debes dar click en hacer público

> [!NOTE]
>Si no lograste darle click o no te apareció el pop up en la cinta de terminal, ve a la opción puertos, busca el puerto 5173, da click derecho, selecciona visibilidad de puerto y selecciona público

Abre el proyecto en el navegador web

### 2. Validación

2.1 Agrega un poco de contenido del tailwindcss
Abre el archivo ```my-app/src/App.jsx```

cambia el contenido por ql siguiente:

```js

import './App.css'

function App() {

  return (
    <>
    <div className="h-screen bg-orange-500 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white">¡Hola Tailwind CSS!</h1>
      <p className="mt-4 text-white">
        Tailwind CSS es increíblemente poderoso. ¡No puedo esperar para seguir explorándolo!
      </p>
    </div>
    </>
  )
}

export default App

```

2.2 valida que el sitio tenga un fondo naranja y texto centrado

### 3. Guardar los cambios

Guarda los cambios en el historial del repositorio con un commit:

```bash
cd ..
git add my-app
git commit -m "Mi primer proyecto de React"
git push origin main
```
 > [!TIP]
 > Documentación instalación tailwind: https://tailwindcss.com/docs/installation/using-vite

 > [!TIP]
 > Documentación ejemplos tailwind react: https://tailwindcss.com/plus/ui-blocks/preview

 ### 4. Reto

 Crea dos componentes utilizando tailwind: 
 1. Un navbar sencillo color naranja con tres elementos (iconos o enlaces)
 2. Una componebte card que tenga título texto y un botón en la parte inferior
 3. Implementalos en App.jsx
