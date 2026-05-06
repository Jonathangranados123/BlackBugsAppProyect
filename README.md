# Black Bugs Proyect (Android)

Aplicación móvil para Black Bugs orientada a la visualización de catálogo (animales exóticos, alimento vivo y accesorios) y soporte del flujo de compra mediante agregado al carrito y navegación por categorías.

---

## Resumen ejecutivo

### Descripción
Black_BugsProyect es una app Android desarrollada para apoyar a la empresa Black Bugs en la presentación de su catálogo de productos y animales, mejorando la forma en que los clientes exploran opciones y agilizando el proceso previo a la compra.

### Problema identificado
La consulta de productos, precios y categorías suele ocurrir por canales manuales (mensajería/redes), lo que genera repetición de preguntas, pérdida de tiempo y dificultad para organizar el catálogo de forma visual y ordenada.

### Solución
La app centraliza el catálogo en una interfaz móvil con:
- Listado visual de artículos con imagen y precio.
- Navegación por categorías (Todos / Animales / Alimentos / Accesorios).
- Acción de “Agregar al carrito” con almacenamiento local en memoria.
- Navegación a módulos principales (Catálogo, Stock, Carrito, Contacto).

### Arquitectura
Estructura por capas simple:
- **ui/**: pantallas (Activities) y adaptadores (RecyclerView).
- **data/**: fuentes de datos (FakeCatalog) y almacenamiento en memoria (CartStore).
- **model/**: modelos de dominio (ej. CatalogItem, Category).
- **res/**: layouts XML, imágenes y recursos de UI (Material).

---

## Tabla de contenidos (ToC)
1. [Resumen ejecutivo](#resumen-ejecutivo)
2. [Requerimientos](#requerimientos)
3. [Instalación](#instalación)
4. [Configuración](#configuración)
5. [Uso](#uso)
6. [Contribución](#contribución)
7. [Roadmap](#roadmap)
8. [Producto](#producto)

---

## Requerimientos

### Servidores / Web / Bases de datos
- No requiere servidor para la ejecución actual (prototipo local).
- Catálogo alimentado por datos locales (FakeCatalog).
- Persistencia/BD (Room/SQLite o servicio remoto) considerada para roadmap.

### Paquetes adicionales
- AndroidX
- Material Components / Material3
- RecyclerView
- ConstraintLayout

### Versión de Java / Android
- **JDK:** 17 (recomendado para Android Studio y Gradle moderno)
- **Lenguaje:** Kotlin
- **IDE:** Android Studio
- **Build System:** Gradle (Kotlin DSL: `build.gradle.kts`)

---

## Instalación

### a) ¿Cómo instalar el ambiente de desarrollo?
1. Instalar **Android Studio**.
2. Configurar **Android SDK** desde Android Studio (SDK Manager).
3. Configurar **JDK 17** (o usar Embedded JDK en Android Studio).
4. Clonar el repositorio:
   ```bash
