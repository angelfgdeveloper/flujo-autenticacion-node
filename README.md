## Creacion de api basica para autenticacion

### Flujo basico de autenticaciín
- Autenticacion Basic
- Token con Bearer
- Rutas publicas y privadas

### Postman (Configuración de variables de entorno)

1. Ruta privada (GET) =>
```{{URL}}/api/private```

2. Bearer token => 
```{{TOKEN}}```

#### Obtenemos el Token con la autenticacion Basic

1. Ruta publica auth (POST) =>
```{{URL}}/api/token```

2. Respuesta de ejemplo ruta publica auth (POST) =>
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDM3MGI3MDcyNTllMWRhYmMzNThmNDkiLCJuYW1lIjoiVGVzdCIsImlhdCI6MTY4MTc3OTY1MiwiZXhwIjoxNjgxNzg2ODUyfQ.dniJcMkx_hmYsAB7vSMrGFqcnACO5TQb3Er_rwN1_Yo"
}
```

3. En el apartado de Tests añadimos el código para obtener el token y agregarlo a una variable de entorno =>
```
const token = pm.response.json().token;
pm.environment.set('TOKEN', token);
```

4. En este momento al obtener el token se incrustara en la variable de entorno del endpoint de ruta privada que esta al principio =>
```{{TOKEN}}```