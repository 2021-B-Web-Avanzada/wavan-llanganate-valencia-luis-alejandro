# Clase 2 - Manejo de commits, ramas y conflictos

### Objetivos
-  Comprender como trabajar con git con repositorios remotos y locales.
-  Aprender a crear y utilizar ramas, y su importancia en un esquema de trabajo colaborativo con git. 
-  Comprender cómo realizar pull requests utilizando GitHub correctamente y solucionar conflictos al fusionar ramas .
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
**Esquema de trabajo**

Contamos con una copia del repositorio remoto en nuestra máquina, esto se lo conoce como **repositorio local**. En ambos repositorios trabajamos sobre la rama principal o main.

<p align="center">
  <img src="https://user-images.githubusercontent.com/20259832/141987710-7118f576-5b8e-4495-9bdb-b8d4fafb28c1.png">
</p>

Sobre este esquema podemos realizar las siguientes acciones:

- *push:* se utiliza para cargar el contenido del repositorio local en un repositorio remoto.
- *pull:* utilizado para actualizar la versión local de un repositorio desde un control remoto.
- *fetch:* descarga confirmaciones, archivos y referencias desde un repositorio remoto a su repositorio local.

Enviamos los cambios empleando:
```
git push origin main
```

**Del repositorio remoto al local, y viceversa**

A continuación creamos una archivo `resta.txt` desde nuestro repositorio remoto utilizando GitHub, y añadimos estos cambios a nuestro repositorio remoto.

<p align="center">
  <img src="https://user-images.githubusercontent.com/20259832/141990145-8526490e-fb0a-40cd-b395-566fb19a6091.png">
</p>

Luego creamos otro archivo desde local:
```
echo "multiplicacion" > multiplicacion.txt
```

Una vez hecho esto primero realizamos un pull, luego podríamos hacemos un commit de merge, no obstante en mi caso he preferido hacer la fusión con Fast-fordward.

<p align="center">
  <img width="700px;" src="https://user-images.githubusercontent.com/20259832/141991778-02c4d7a5-a4b3-41db-b376-b979c3ca1441.png">
</p>

Luego de esto finalmente podremos hacer un push de este cambio a nuestro repositorio remoto.

<p align="center">
  <img width="700px;" src="https://user-images.githubusercontent.com/20259832/141992244-c3c478b4-67e3-4058-b7c0-bcbc133195e9.png">
</p>

**Merge Conflicts**

Generamos un conflicto primero añadiendo un cambio desde el respositorio remoto:
<p align="center">
  <img width="600px;" src="https://user-images.githubusercontent.com/20259832/141993450-9b45d9be-d4e7-461d-a45e-d664fe547246.png">
</p>

Realizamos un cambio a este mismo archivo desde el repositorio local y hacemos un commit de ello:
<p align="center">
  <img width="650px;" src="https://user-images.githubusercontent.com/20259832/141994391-58075b00-9fee-4063-af0e-5831e1b26523.png">
</p>

Si queremos hacer un pull con lo cambios tendremos un problema debido a que hay cambios en el repositorio remoto:
<p align="center">
  <img width="700px;" src="https://user-images.githubusercontent.com/20259832/141994535-31bf20e5-ab7f-48db-ad0d-990d425a27a1.png">
</p>

Así también, cuando traemos estos cambios con el pull, podemos notar que existe un conflicto en `resta.txt`
<p align="center">
  <img width="550px;" src="https://user-images.githubusercontent.com/20259832/141994746-7e7ce1df-6f7f-4eac-b245-72b27407c1b5.png">
</p>

Ahora nuestro archivo resta.txt se verá como:
```
resta
<<<<<<< HEAD
pepito
=======
juanita
>>>>>>> main
```

Los cambios locales están sobre la línea `===` y los cambios por debajo son los cambios remotos. En este caso, manualmente solucionamos este conflicto y haremos un commit y un push.

<p align="center">
  <img width="500px;" src="https://user-images.githubusercontent.com/20259832/141995556-bc74553b-d79f-44ae-abbe-0bda75608605.png">
</p>

**Workflow desde otra rama**

Creamos una rama de desarrollo desde GitHub:
<p align="center">
  <img width="350px;" src="https://user-images.githubusercontent.com/20259832/141996824-abd24a35-949e-4d3f-bd99-7976348604fb.png">
</p>

A esta rama le llamaremos `develop`, por lo tanto al aplicar el comando `git pull` podemos observar como se actualiza y se integra esta rama que creamos en GitHub.

<p align="center">
  <img width="600px;" src="https://user-images.githubusercontent.com/20259832/141997571-f21c1124-4e8b-49ff-af6b-f78fa2dc2738.png">
</p>

Con fines prácticos creamos un archivo `division.txt` y subimos este cambio al repositorio remoto.

<p align="center">
  <img width="600px;" src="https://user-images.githubusercontent.com/20259832/141997934-a3ce6e8e-7d2b-4ae8-a162-0bd953d9bde7.png">
</p>

<p align="center">
  <img width="600px;" src="https://user-images.githubusercontent.com/20259832/141998192-2251872a-b99e-4b3f-8612-797caf2aaa73.png">
</p>

Creamos un pull request para fusionar la rama `develop` con la principal y notamos que existen conflictos por resolver.

<p align="center">
  <img width="600px;" src="https://user-images.githubusercontent.com/20259832/141998925-10a32ec7-b2ea-4d3c-b66d-fab40e58f5a0.png">
</p>

Dentro del mismo GitHub tenemos la opción de `resolve conflicts` en donde se visualizará en cuadro de texto para resolver manualmente los conflictos. Luego de esto es posible hacer el merge como se ve a continuación.

<p align="center">
  <img width="600px;" src="https://user-images.githubusercontent.com/20259832/141999041-59292633-401f-43e9-8db3-89834ab8b8bc.png">
</p>

### Conclusiones
- Trabajar con ramas es una buena práctica ya que nos permite realizar modificaciones al código de manera independiente sin afectar otros espacios de trabajos. Y cuando, finalmente consideremos que los cambios estén listos, poder aplicar `pull requests` para integrar los cambios a una rama específica.
- Se pueden presentar tanto conflictos en el repositorio local como en GitHub, para ambos casos será importante resolver los conflictos de forma manual.


### Bibliografia:
<a id="1">[1]</a> https://www.freecodecamp.org/espanol/news/gitignore-explicado-que-es-y-como-agregar-a-tu-repositorio/#:~:text=gitignore%20%2C%20es%20un%20archivo%20de,carpetas%20ignorar%20en%20un%20proyecto.&text=gitignore%20generalmente%20se%20coloca%20en,todos%20tus%20repositorios%20de%20Git.
