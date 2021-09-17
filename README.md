# prueba-tecnica

He usado la idea de la plantilla, retoqué algunos detalles que me parecen mas estéticos y agregé alguna funcionalidad extra a la tabla de pacientes. Tuve algunos contratiempos, pero realicé alternativas.

No me ha dado tiempo a realizar todas las funcionalidades, queda por desarrollar la barra de búsqueda principal, vista de tarjetas, las opciones de número de elementos por página, visionado de modal de paciente y descarga de ficha en PDF.
Algunos de estos componentes son independientes para mejorar su maquetación, así que deben comunicarse entre ellos y eso requiere tiempo de programación.

Los estilos SASS están creados en caso de necesidad, ya que algunos no tienen clases.

Lista de tareas
----------------

- Preparando el repositorio y el template del proyecto (10min)

- Maquetación de la plantilla con algunas funcionalidades responsivas (3h 30min)

- Probando json remoto con axios, problemas con axios, descartado (2h)

- Problema con la estructura de pacientes.json por defecto, he tenido que retocarlo (20min)

- Programando en la lista, chips dinamicas en los estados, listas en las acciones y buscador de 
pacientes, me ocasiona problemas mostrar busquedas tanto por nombre como por apellido, solo 
funciona una u otra opción debido al formato del json al no tener un campo fullName (3h)

- Botón de exportación de CSV, queda retocar la exportación para que muestre datos completos (30min)

- Ventana nuevo paciente con clases SASS (1h)

- Botones formulario nuevo paciente, quedaría hacer reglas de validación (10min)

- Estilizando página (30min)

- Organizando proyecto y limpiando código (10min)

## Project setup
```
npm install
```
