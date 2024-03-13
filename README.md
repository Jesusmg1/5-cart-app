Para la web, se ha utilizado Vite y Node.js para usarlo como servidor local. EL IDE utilizado ha sido Visual Studio Code. El front-end con React 18.2 y el back-end con Spring Boot 3.2.

----React----
1. Abrimos el terminal y para crear la carpeta con lo que necesitamos para el proyecto, escribimos npm create vite y elegimos las opciones de React y JavaScript.
2. Abrimos el proyecto en Visual Studio Code. Abrimos el terminal y escribimos npm install, para que se instalen los modulos necesarios.
3. Escribimos en el terminal npm run dev para lanzar el servidor y poder visualizar la web.

----SpringBoot----
1. Abrimos el proyecto y ejecutamos, al hacerlo creara la BD en MYSQL directamente con los registros. Pd: Hay que cambiar en application.properties de spring.jpa.hibernate.ddl-auto=update
a spring.jpa.hibernate.ddl-auto=create para que cree todo y luego volver a dejarlo como estaba.
