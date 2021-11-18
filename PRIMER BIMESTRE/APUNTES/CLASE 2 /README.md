# Clase 2

### Objetivos
-  Comprender cómo funcionan los sistemas de control de versiones para manejar herramientas con Git. 
-  Comprender el uso de gitignore para 
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
### Esquema de trabajo
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

### Del repositorio remoto al local, y viceversa

A continuación creamos una archivo `resta.txt` desde nuestro repositorio remoto utilizando GitHub, y añadimos estos cambios a nuestro repositorio remoto.

![image](https://user-images.githubusercontent.com/20259832/141990145-8526490e-fb0a-40cd-b395-566fb19a6091.png)

Luego creamos otro archivo desde local:
```
echo "multiplicacion" > multiplicacion.txt
```

Una vez hecho esto primero realizamos un pull, luego podríamos hacemos un commit de merge, no obstante en mi caso he preferido hacer la fusión con Fast-fordward.
![image](https://user-images.githubusercontent.com/20259832/141991778-02c4d7a5-a4b3-41db-b376-b979c3ca1441.png)

Luego de esto finalmente podremos hacer un push de este cambio a nuestro repositorio remoto.
![image](https://user-images.githubusercontent.com/20259832/141992244-c3c478b4-67e3-4058-b7c0-bcbc133195e9.png)


### Bibliografia:
<a id="1">[1]</a> https://www.freecodecamp.org/espanol/news/gitignore-explicado-que-es-y-como-agregar-a-tu-repositorio/#:~:text=gitignore%20%2C%20es%20un%20archivo%20de,carpetas%20ignorar%20en%20un%20proyecto.&text=gitignore%20generalmente%20se%20coloca%20en,todos%20tus%20repositorios%20de%20Git.