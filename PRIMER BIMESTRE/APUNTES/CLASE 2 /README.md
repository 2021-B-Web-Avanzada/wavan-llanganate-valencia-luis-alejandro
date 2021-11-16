# Clase 2

### Objetivos
-  Comprender cómo funcionan los sistemas de control de versiones para manejar herramientas con Git. 
-  Utilizar un servidor y un cliente Git como GitHub y GitKraken respectivamente.  
-  Crear un repositorio para aplicar los conocimientos aprendidos (commits, ramas, manejo de conflictos, entre otros). 
### Desarrollo

Creamos un nuevo archivo con:
```
touch archivo.txt
```

Existen archivos que no queremos que sean considerados para esto es necesario que creemos un archivo gitignore. Este archivo de texto le dice a Git qué archivos o carpetas ignorar en un proyecto [[1]](#1).
```
.gitignore
```
Dentro de este archivo hacemos referencia al siguiente directorio:
```
.idea/
```
## Esquema de trabajo
Contamos con una copia del repositorio remoto en nuestra máquina, esto se lo conoce como **repositorio local**. En ambos repositorios trabajamos sobre la rama principal o main.

![image](https://user-images.githubusercontent.com/20259832/141987710-7118f576-5b8e-4495-9bdb-b8d4fafb28c1.png)

Sobre este esquema podemos realizar las siguientes acciones:

- *push:* se utiliza para cargar el contenido del repositorio local en un repositorio remoto.
- *pull:* utilizado para actualizar la versión local de un repositorio desde un control remoto.
- *fetch:* descarga confirmaciones, archivos y referencias desde un repositorio remoto a su repositorio local.

Enviamos los cambios empleando:
```
git push origin main
```



### Bibliografia:
<a id="1">[1]</a> https://www.freecodecamp.org/espanol/news/gitignore-explicado-que-es-y-como-agregar-a-tu-repositorio/#:~:text=gitignore%20%2C%20es%20un%20archivo%20de,carpetas%20ignorar%20en%20un%20proyecto.&text=gitignore%20generalmente%20se%20coloca%20en,todos%20tus%20repositorios%20de%20Git.
