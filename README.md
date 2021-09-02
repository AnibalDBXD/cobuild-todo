## Requisitos

Cumplido: ✅ <br />
Hecho pero con una alternativa: ⚠️ <br />
No cumplido: ⛔ <br />

Esta sera un Task List con login y un CRUD de Tasks:
- Create task: ✅
- Edit task: ✅
- Delete task: ✅
- Marcar un Task como listo: ✅.

Para el test necesitamos que la aplicacion sea con React y que se conecte a la plataforma 8base.com: ✅.

- La aplicacion en React puede hacerse con CRA, Next o GatsbyJs: ✅.
- El login se puede hacerse con la cuenta que provecto de 8base (AWS Cognito): ⚠️ -> **Firebase**
- Para el frontend se pueden usar cualquier libreria de componentes para React.
- Para la funcion de MARCAR COMO COMPLETADO se require que sea a traves de un Cloud Function de la plataforma: Un Webhook o un resolver: ⚠️ -> **GraphQL PUT**
- Se requiere que se implemente al menos 3 Unit Tests, y 1 Test E2E ( preferiblemente con cypress): <br />
E2E: ✅ <br />
Unit: ⚠️ -> **Testing library**

Elementos a Evaluar:

- Funcionalidad
- Estructura del codigo
- Documentacion
- Pruebas

## Iniciar projecto:

1. `git clone https://github.com/AnibalDBXD/cobuild-todo.git`
2. `cd cobuild-todo`
3. `npm install`
4. `npm run dev`

## Tests
- `npm run test`

⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️ <br />
Si los tests de TODO fallan podria ser por este error:
```
GraphQL error:
You’ve hit the FREE TIER API limit of 10 consecutive requests.
This will reset in 120-seconds.
To remove this limit, upgrade your workspace to the Developer plan at https://app.8base.com/settings/billing
```
Este error ocurre por limitacion gratuita de 8base, puedes esperar los 120s y correr los tests de TODO uno por uno (`it.only(() => ...)`)
