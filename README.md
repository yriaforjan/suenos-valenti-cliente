# 🧘 SUEÑOS VALENTI - Sesiones Interactivas de Supraconciencia

[![Status](https://img.shields.io/badge/Status-Pendiente%20de%20Revisión-orange.svg)](https://github.com/yriaforjan/css-lab)

## 🌟 Descripción del Proyecto

Aplicación web moderna para reservar sesiones espirituales de consciencia, construida con `React` y diseñada para ofrecer una experiencia intuitiva de exploración y reserva de servicios de transformación personal.

## 📋 Características Principales

* **Catálogo de Sesiones**: Explora 15 sesiones espirituales únicas con imágenes y precios
* **Carrito de Compras**: Gestión completa de reservas con persistencia local
* **Temas Personalizables**: Interfaz adaptable entre modo claro y oscuro 
* **Diseño Responsivo**: Experiencia optimizada para móviles y escritorio
* **Navegación Fluida**: Routing sin recargas de página

---

## 🛠️ Stack Tecnológico

El proyecto está construido utilizando las últimas versiones del ecosistema de React para garantizar un rendimiento óptimo y una arquitectura escalable.

### Core Framework & Library
| Tecnología | Versión | Propósito |
| :--- | :--- | :--- |
| **React** | 19.2.0 | Biblioteca base para la creación de interfaces de usuario mediante componentes. |
| **Vite** | 7.2.4 | Tooling de última generación que ofrece Hot Module Replacement (HMR) ultra rápido. |
| **React Router** | 7.12.0 | Gestión de enrutamiento dinámico y navegación entre páginas (SPA). |

### Desarrollo y Calidad de Código
* **Linter Estricto:** Se utiliza **ESLint 9.39.1** con una configuración rigurosa para asegurar un código limpio, legible y libre de errores potenciales.
* **React Hooks Plugin:** Implementación de `eslint-plugin-react-hooks (v7.0.1)` para garantizar que las reglas de los Hooks se sigan estrictamente.
* **Fast Refresh:** Configuración con `@vitejs/plugin-react` para una experiencia de desarrollo ágil.

### Persistencia y Estilos
* **Web Storage API:** Uso de `localStorage` para la persistencia del carrito de compras y la preferencia de temas (Dark/Light).
* **CSS3 Moderno:** Arquitectura de estilos basada en **Variables CSS (Custom Properties)** para facilitar el cambio de temas y mantener la consistencia visual.

---

## 📋 Requisitos Previos

* **Node.js**: Versión 18 o superior.
* **npm**: Gestor de paquetes (incluido con Node.js).
* **Git**: Para la clonación del repositorio.

---

## 🚀 Instalación y Configuración

### Instalación

#### 1️⃣ Clonar el Proyecto
```bash
git clone https://github.com/yriaforjan/suenos-valenti-cliente.git
cd suenos-valenti-cliente
```

#### 2️⃣ Instalar Dependencias
```bash
npm install
```

#### 3️⃣ Iniciar Servidor de Desarrollo
```bash
npm run dev
```

### Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo con HMR (Vite). |
| `npm run build` | Construye la aplicación optimizada para producción. |
| `npm run lint` | Verifica la calidad del código y consistencia con ESLint. |
| `npm run preview` | Previsualiza localmente el build de producción. |

### Configuración

El proyecto utiliza una configuración estándar de última generación:

* **Vite**: Configurado con el plugin oficial de React para un desarrollo ágil
* **ESLint**: Implementa reglas estrictas para JavaScript y React, garantizando un código limpio
* **Módulos ES**: El proyecto está configurado como **ES modules** (`type: module`) para aprovechar las capacidades nativas de JavaScript moderno.

---

## 🗂️ Estructura del Proyecto

```text
suenos-valenti-cliente/  
├── public/  
│   ├── data/  
│   │   └── sessions.json          # Catálogo de sesiones
│   └── index.html                 # Template HTML  
├── src/  
│   ├── components/                # Componentes UI reutilizables  
│   │   ├── Card/                  # Tarjetas de sesión
│   │   ├── Header/                # Navegación principal
│   │   ├── Footer/                # Pie de página
│   │   └── MainLayout/            # Layout principal con slots
│   ├── pages/                     # Páginas (Componentes de ruta)
│   │   ├── Home/                  # Landing page
│   │   ├── Sessions/              # Catálogo interactivo
│   │   ├── Cart/                  # Gestión de reservas
│   │   └── Preferences/           # Ajustes de interfaz
│   ├── context/                   # Gestión de estado global (Arquitectura Separada)
│   │   ├── CartContext.js         # Definición del contexto del carrito
│   │   ├── CartProvider.jsx       # Lógica y proveedor del carrito
│   │   ├── ThemeContext.js        # Definición del contexto de tema
│   │   └── ThemeProvider.jsx      # Lógica y proveedor de tema
│   ├── services/                  # Capa de servicios
│   │   └── api.js                 # Abstracción de fetching de datos
│   ├── App.jsx                    # Configuración de React Router
│   └── main.jsx                   # Punto de entrada de la aplicación
├── package.json                   # Scripts y dependencias
├── vite.config.js                 # Configuración de empaquetado
└── README.md                      # Documentación del proyecto
```

### Organización por Responsabilidad

Para mantener un código mantenible y escalable, el proyecto se divide siguiendo el principio de separación de responsabilidades:

* **`components/`**: Elementos UI reutilizables con sus propios estilos CSS
* **`pages/`**: Componentes de ruta con lógica específica de cada página
* **`context/`**: Gestión de estado global con React Context API
* **`services/`**: Abstracción de llamadas a API y datos externos
* **`public/data/`**: Datos estáticos locales (catálogo de sesiones)

---

## 📄 Licencia

Este proyecto es **de carácter escolar y educativo**, desarrollado como parte de un trabajo de la asignatura *Desarrollo Web Entorno Cliente*.

---

## 👩🏼‍💻 Autor  
  
Desarrollado por **Yria Forján Oliveira**
