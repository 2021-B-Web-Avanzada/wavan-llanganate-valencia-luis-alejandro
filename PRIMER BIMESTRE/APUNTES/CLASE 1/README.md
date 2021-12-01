# Clase 1 - Git y GitHub

### Objetivos
-  Comprender cómo funcionan los sistemas de control de versiones para manejar herramientas con Git. 
-  Utilizar un servidor y un cliente Git como GitHub y GitKraken respectivamente.  
-  Crear un repositorio para aplicar los conocimientos aprendidos (commits, ramas, manejo de conflictos, entre otros). 
### Desarrollo

**GitHub Student Developer Pack**

Es una suite estudiantil de GitHub para universidades del mundo, que consiste en disponer múltiples servicios, plataformas y software gratuito para estudiantes. Para acceder a ello es necesario completar un formulario con tu correo institucional [[1]](#1).

**Clonar Repositorio**

Para clonar el repositorio del curso haré uso particularmente de `GitHub CLI`, una interfaz de línea de comandos de GitHub construida con Golang y que nos dispone de múltiples comandos para hacer estas actividades [[2]](#2).

Para empezar es necesario autenticarse, preferible hacerlo con tu `ssh key` o un `token`:
```
gh auth
```

Luego de esto aplicamos el siguiente comando para clonar un repositorio:
```
gh repo clone git@github.com:2021-B-Web-Avanzada/wavan-llanganate-valencia-luis-alejandro.git
```

**Sistema de Control de Versiones**

Un control de versiones es un sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo, de modo que sea posible recuperar versiones específicas más adelante [[3]](#3).

Se pueden mencionar las siguientes característas:
- Versionador: permite registrar historial archivos
- Hay dos tipos:

  **Centralizados**

  Deben estar conectados al servidor para realizar cambios, el problema se en que sin no hay internet un cliente no podría trabajar con el servidor.
  <p align="center">
  <img src="https://user-images.githubusercontent.com/20259832/141118904-3d883060-7b2c-468a-8b23-7bd8bcf01e88.png">
</p>

  **Distribuidos**

  Se realiza un copia local del repositorio y estos cambios luego deberán ser enviados al servidor, y viceversa.
  
  En el año 2000 apareció BitKeeper, un sistema de control de versiones distribuido, en el que cada cliente mantiene su propia copia completa del repositorio y puede trabajar sin estar conectado al servidor. BitKeeper era un programa comercial, pero permitía su uso en proyectos de software libre. Entre 2002 y 2005, BitKeeper se utilizó en el desarrollo del kernel Linux, pero en 2005 BitKeeper revocó la licencia que había concedido a los programadores del kernel. Aunque para entonces ya había sistemas de control de versiones distribuidos libres (Monotone, darcs), Linus Torvalds decidió crear un nuevo programa, Git, que se publicó en abril de 2005 [[4]](#4).

### Servidores de Git
Aloja aplicaciones web que los usuarios de la red pueden utilizar sin necesidad de su propia copia.

Ejemplo: Bitbucket, GitHub, GitLab


### Clientes de Git
Proporciona una gran funcionalidad, realiza la mayor parte del procesamiento de datos y operaciones por sí mismo, de manera local, y se comunica con el servidor.

Ejemplo: Git client, GitKraken, Sourcetree, GitHub Desktop


### Branches
La ramificación significa que se aparta de la línea principal de desarrollo y continúa trabajando sin meterse con esa línea principal [[5]](#5).

Existen algunos comandos útiles en la terminal que puedes aplicar para ramificación:
- Para crear una rama.
```
git branch [nombre de tu rama]
```
- Cambiarte a una rama
```
git checkout [nombre de tu rama]
```
- Listar todas las ramas remotas y locales
```
git branches -a
```

### Commits
- Es posible hacer operaciones en los archivos: agregar, eliminar y editar.
- Un commit es una operación que envía los últimos cambios en el código fuente al repositorio.
- "Un commit es como una pequeña foto en el tiempo".
- Para un commit es necesario establecer el nombre y su correo electrónico. Estos no se verifican exclusivamente, por ello la necesidad de firmar los commits.
<p align="center">
  <img src="https://user-images.githubusercontent.com/20259832/141123954-e9af33cc-e970-4a78-b6c9-3b1bb6fe9de4.png">
</p>
Existen algunos comandos útiles en la terminal que puedes aplicar para commits:
- Creación de commits con firma GPG

```
git commit -S -m [mensaje]
```
- Visualizar los commits realizados con firmas
```
git log --show-signature
```


### Conclusiones
- Los sistemas de control de versiones nos permiten tener un histórico del desarrollo de un proyecto y de esta manera obtener un flujo de trabajo entre equipos más ordenado. 
- La selección de un cliente o servidores Git dependerá mucho de las funcionalidades adicionales y el entorno con el que se trabaje. 
- La mayor ventaja de Git es su arquitectura puesto que es posible trabajar con el desarrollo de un proyecto tanto localmente como en línea. 
- Es importante saber manejar los diferentes conflictos sobre todo cuando se busque ramificar y fusionar en un repositorio. 

### Bibliografia:
<a id="1">[1]</a>  https://education.github.com/pack

<a id="2">[2]</a> https://cli.github.com/

<a id="3">[3]</a> https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones

<a id="4">[4]</a> https://www.mclibre.org/consultar/informatica/lecciones/git.html

<a id="4">[5]</a> https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell#:~:text=A%20branch%20in%20Git%20is,to%20one%20of%20these%20commits.&text=As%20you%20start%20making%20commits,is%20not%20a%20special%20branch.
