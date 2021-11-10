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


### Conclusiones


### Bibliografia:
<a id="1">[1]</a>  https://education.github.com/pack
<a id="2">[2]</a> https://cli.github.com/
