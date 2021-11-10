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

  <img  style="display:block;
margin:auto;" src="https://user-images.githubusercontent.com/20259832/141118904-3d883060-7b2c-468a-8b23-7bd8bcf01e88.png">

  **Distribuidos**

  Se realiza un copia local del repositorio y estos cambios luego deberán ser enviados al servidor, y viceversa.
  
  En el año 2000 apareció BitKeeper, un sistema de control de versiones distribuido, en el que cada cliente mantiene su propia copia completa del repositorio y puede trabajar sin estar conectado al servidor. BitKeeper era un programa comercial, pero permitía su uso en proyectos de software libre. Entre 2002 y 2005, BitKeeper se utilizó en el desarrollo del kernel Linux, pero en 2005 BitKeeper revocó la licencia que había concedido a los programadores del kernel. Aunque para entonces ya había sistemas de control de versiones distribuidos libres (Monotone, darcs), Linus Torvalds decidió crear un nuevo programa, Git, que se publicó en abril de 2005 [[4]](#4).


  
### Conclusiones


### Bibliografia:
<a id="1">[1]</a>  https://education.github.com/pack

<a id="2">[2]</a> https://cli.github.com/

<a id="3">[3]</a> https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones

<a id="4">[4]</a> https://www.mclibre.org/consultar/informatica/lecciones/git.html
