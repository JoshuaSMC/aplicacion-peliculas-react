# 🎬 Aplicación de Películas | React

Aplicación web desarrollada con **React** que permite buscar películas, ver detalles y explorar títulos populares a través de una interfaz moderna y dinámica.  
El proyecto fue creado para seguir practicando **consumo de APIs**, manejo de **componentes reutilizables** y navegación SPA con React Router.

---

## 🚀 Demo

🔗 **Deploy:** [Ver en Netlify](https://aplicacion-peliculas-react.netlify.app/)  
🔗 **Repositorio:** [GitHub](https://github.com/JoshuaSMC/aplicacion-peliculas-react)

---

## 🧠 Funcionalidades principales

✅ Búsqueda de películas en tiempo real.  
✅ Visualización de detalles: título, descripción, fecha de estreno y puntuación.  
✅ Carga dinámica de resultados usando **fetch** a una API pública (*The Movie Database - TMDB*).  
✅ Navegación entre páginas con **React Router**.  
✅ Diseño responsive optimizado para dispositivos móviles.  
✅ Indicadores visuales al cargar o no encontrar resultados.  

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso principal |
|-------------|---------------|
| ⚛️ **React.js** | Framework principal |
| 🌐 **API TMDB** | Fuente de datos de películas |
| 💅 **CSS3** | Estilos personalizados y diseño responsive |
| 🧭 **React Router DOM** | Navegación entre vistas |
| ⚡ **Vite** | Entorno de desarrollo rápido |

---

## 📁 Estructura del proyecto

src/
├── components/
│ ├── MovieCard.jsx
│ ├── MovieList.jsx
│ ├── SearchBar.jsx
│
├── pages/
│ ├── HomePage.jsx
│ ├── DetailPage.jsx
│
├── styles/
│ ├── movies-theme.css
│
├── App.jsx
└── main.jsx


---

## 🎨 Diseño visual

**Paleta de colores**
- 🎞️ **Azul profundo:** `#0f172a`  
- 💫 **Celeste claro:** `#38bdf8`  
- ⚫ **Negro carbón:** `#1e293b`  
- 🍿 **Amarillo acento:** `#facc15`  

**Tipografías**
- *Montserrat* — títulos  
- *Open Sans* — textos generales  

---

## 💡 Aprendizajes clave

Durante el desarrollo de esta app reforcé habilidades en:  
- Consumo y manejo de **APIs externas**.  
- Uso de **estados y hooks** (`useState`, `useEffect`).  
- Navegación entre componentes con **React Router**.  
- Diseño responsive adaptable a distintos dispositivos.  
- Creación de una interfaz limpia y enfocada en la experiencia del usuario.  

---

## ⚙️ Instalación y ejecución local

Si querés probar el proyecto en tu entorno local:

``bash
# Clonar el repositorio
git clone https://github.com/JoshuaSMC/aplicacion-peliculas-react.git

# Entrar en la carpeta del proyecto
cd aplicacion-peliculas-react

# Instalar dependencias
npm install

# Iniciar el entorno de desarrollo
npm run dev

Luego abrí http://localhost:5173
 en tu navegador 🚀

##🌱 Futuras mejoras

-🎬 Sección de películas favoritas (guardadas en localStorage).
-⭐ Sistema de puntuación de usuario.
-🎭 Filtro por género y año de estreno.
-🌙 Modo oscuro/claro.
-📱 Optimización de carga para dispositivos móviles.

👨‍💻 Autor

Desarrollado por Joshua SMC

📫 Front End Developer | React | JavaScript | HTML | CSS | UX/UI

⭐ Si te gustó este proyecto, podés dejar una estrella en el repositorio :)
