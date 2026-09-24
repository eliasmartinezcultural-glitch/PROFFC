# YO FUTBOLISTA — DRM

Versión: 1.0 CORE  
Estado: DEVELOPMENT LOCK / CORE

Este archivo contiene la constitución maestra del producto.

Principios absolutos:
- El equipo es el centro.
- El jugador tiene identidad dentro del equipo.
- Claridad > cantidad.
- Mucha profundidad detrás, mucha claridad delante.
- Mobile-first.
- GitHub Pages.
- HTML/CSS/JavaScript en la primera etapa.
- No inventar datos profesionales.
- No copiar propiedad intelectual de otras marcas.
- No destruir una versión funcional para agregar funciones.
- Auditar, probar, corregir y recién después bloquear.

Arquitectura conceptual:
CLUB → EQUIPO → UNIDAD → JUGADOR
OBSERVAR → COMPRENDER → ENTRENAR → APLICAR → REVISAR → MEJORAR

Navegación:
CLUB / EQUIPO / ENTRENAR / MI FÚTBOL / MATCHDAY / HISTORIA

Experiencia:
MI JUGADOR + MI VESTUARIO + MI EQUIPO + MI PARTIDO + NUESTRA HISTORIA

Antes de cada cambio estructural:
1. preservar versión estable;
2. trabajar en rama de desarrollo;
3. implementar;
4. probar 320/360/390/430/768/1024/1280/1440;
5. corregir;
6. verificar GitHub Pages;
7. comparar;
8. bloquear si está estable.

No introducir inicialmente backend, Vercel, chat, marketplace, economía virtual, apuestas, rankings humillantes ni complejidad que no aporte a la experiencia.

Objetivo emocional:
“Esto parece profesional.”
“Esto es mi equipo.”


## v1.2 — Sistema de dominio
La interfaz consume un modelo de dominio separado de la presentación.

### Capas
- **DATA:** club, temporada, plantel, staff, arquetipos, modelo táctico, perfiles, biblioteca de entrenamiento, partidos, estadísticas y procedencia.
- **ENGINE:** referencias, selección de contexto activo, normalización, snapshot y validación.
- **APP:** únicamente presenta el estado y conserva la navegación existente.
- **STYLES:** capa visual independiente.

### Principios estructurales
1. Una sola fuente de verdad para los datos.
2. Las relaciones se hacen mediante IDs, no mediante textos duplicados.
3. Temporada es una entidad: permite historial y evolución futura.
4. Jugador, perfil y evaluación son entidades separables.
5. Modelo táctico define principios y roles reutilizables.
6. Entrenamiento enlaza equipo → unidad → jugador.
7. Partido enlaza temporada → rival → convocatoria → formación → misión.
8. Estadística incorpora procedencia para impedir que una estimación parezca medición profesional.
9. La UI no debe contener lógica de negocio crítica.
10. Esta capa no agrega nuevas interacciones: prepara profundidad estructural para futuras versiones.


## v1.3 — Dominio futbolístico profundo
Esta versión profundiza el sistema interno sin agregar nuevas interacciones visibles.

### Modelo de fútbol
- **Unidades:** arquero, defensa, mediocampo y ataque.
- **Zonas:** tercio defensivo, tercio medio, tercio final, carril central, intervalos y bandas.
- **Fases:** inicio, progresión, finalización, organización defensiva, presión y transiciones.
- **Comportamientos:** recibir, escanear, apoyar, cubrir, presionar, fijar, conectar y finalizar.
- **Principios:** cada principio posee identidad propia, fases y unidades relacionadas.
- **Roles tácticos:** conectan posición → fase → comportamiento → principio.
- **Modelo táctico:** puede describir forma base, forma con balón y forma sin balón.
- **Jugador:** ahora pertenece a una unidad y su perfil relaciona comportamientos, principios y zonas.
- **Entrenamiento:** relaciona temporada → fases → comportamientos → principios → unidades → jugador.
- **Partido:** incorpora plan colectivo, tareas por unidad, principios y estructura post-partido.
- **Desarrollo:** prepara dimensiones y tipos de evidencia sin inventar mediciones.

### Motor
El ENGINE expone consultas reutilizables para que la futura aplicación no tenga que repetir lógica:
- club / temporada;
- jugador / unidad;
- zonas / fases / comportamientos / principios;
- perfil del jugador;
- contexto táctico del jugador;
- entrenamientos relacionados;
- plan de partido;
- historial.

### Integridad
La validación ahora controla:
1. una única temporada activa;
2. referencias de unidades;
3. posiciones válidas;
4. números de camiseta sin duplicados;
5. arquetipos existentes;
6. perfiles vinculados;
7. principios, fases, comportamientos y zonas existentes;
8. roles tácticos completos;
9. formaciones con principios existentes;
10. entrenamientos con referencias válidas;
11. capitán y misiones de partido válidos;
12. tareas del plan asignadas a unidades existentes;
13. estructura post-partido preparada.

### Regla de producto
**La interfaz no se expande por tener más datos.**
La profundidad se construye detrás de la pantalla. Cuando llegue una futura capa de interacción, deberá consumir este dominio en lugar de volver a crear lógica paralela.

### Estado v1.3
- Interacción visible nueva: **ninguna**.
- Profundidad estructural: **ampliada**.
- Fuente de verdad: data.js.
- Motor: engine.js.
- Presentación: sin cambio conceptual.
