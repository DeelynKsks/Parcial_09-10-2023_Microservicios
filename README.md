### Para ejecutar toda la aplicación en docker swarm tiene que seguir las siguientes instrucciones y ejecutar los siguientes comandos:

- Primero, debe iniciar docker swarm con el siguiente comando
  
  ```
    docker swarm init
  ```
- Luego tiene que acceder a la carpeta "cotizacion-dolar" y ejecutar el siguiente comando para crear la imagen con el dockerfile

  ```
    docker build -t cotizacion-dolar .
  ```
- Por último tiene que volver a la carpeta principal para ejecutar el docker-compose.yml con este comando

  ```
    docker stack deploy -c docker-compose.yml cotizacion-dolar
  ```

- Ahora tendrá que esperar un momento para que se terminen de iniciar los contenedores, puede monitorear eso con
  
  ```
    docker service ls
  ```
-- En replicas se mostrará el número de réplicas o contenedores a partir del docker swarm que estén corriendo, en un momento puede aparecer que 0
![image](https://github.com/DeelynKsks/Parcial_09-10-2023_Microservicios/assets/73413595/b5df5225-1537-46f6-882c-701015bb33f3)

-- Pero después están corriendo las 7 réplicas
![image](https://github.com/DeelynKsks/Parcial_09-10-2023_Microservicios/assets/73413595/8f1ecf3e-b16a-4189-8aae-286c6e1e4d86)

### Por último, acceda a http://localhost:3000 para observar los resultados
