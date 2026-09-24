# YO FUTBOLISTA — BLOQUEO v1.3

Estado: BLOQUEADO  
Commit base: aa12227c4c904b91b4ad6da12e3e40110e711fa9  
Fecha: 2026-09-24

## Queda congelado

### Estructura
- Modelo de dominio v1.3.
- DATA como fuente única de verdad.
- ENGINE como única capa de lógica de dominio.
- Relaciones club → temporada → equipo → unidad → jugador → fase → comportamiento → principio → entrenamiento → partido → desarrollo → historia.
- Sistema de validación e integridad.
- Modelo táctico y roles.
- Arquitectura GitHub Pages / HTML / CSS / JS.

### Funcionalidad
- Navegación existente.
- Club.
- Vestuario.
- Entrenar.
- Mi Fútbol.
- Matchday.
- Formación.
- Misión individual.
- Plantel.
- Mensajes.
- Entrenamiento visual.
- Secuencia previa al partido.
- Feedback existente.

## Regla desde ahora

No se modifica la arquitectura ni se agregan funcionalidades estructurales nuevas salvo que una auditoría demuestre una falla crítica.

El trabajo pasa a una nueva etapa:

**DATOS REALES → UBICACIÓN DEL PARTIDO → EXPERIENCIA DEL JUGADOR**

La interfaz puede evolucionar visual y experiencialmente, pero deberá consumir el modelo congelado.

## Datos reales

Todo dato que represente un hecho del club o partido debe tener procedencia y estado:

- confirmado;
- informado;
- pendiente;
- estimado.

No se deben presentar datos ficticios como si fueran reales.

Especialmente:
- rival;
- fecha;
- hora;
- cancha;
- ubicación;
- convocatoria;
- camiseta/número;
- formación;
- mensajes;
- estadísticas;
- resultados.

## Experiencia

La siguiente etapa no consiste en sumar pantallas por sumar.

Debe responder:

1. ¿Dónde estoy?
2. ¿Qué partido tenemos?
3. ¿Qué significa este partido para mi equipo?
4. ¿Cuál es mi lugar dentro del equipo?
5. ¿Qué tengo que hacer?
6. ¿Cómo llego preparado?
7. ¿Qué ocurrió después?

El objetivo es transformar datos reales del fútbol amateur en una experiencia digital de futbolista clara, humana y profesional.

## Regla de oro

**No tocar lo congelado para solucionar problemas de la nueva etapa.**

Si aparece una necesidad nueva, primero se resuelve con datos, contenido, configuración o presentación. Una modificación estructural requiere una nueva versión explícitamente aprobada.
