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
