# autopass vault

Vault de contraseñas P2P para sincronizar con la app mobile.

## Requisitos

- Node.js
- Pear CLI (`npm i pear -g`)

## Poner el vault online

```powershell
cd C:\Users\pablo\DEV\projects\autopass-invite
npm install
node serve.js
```

Esto inicia el vault y genera un **pairing invite**. El vault se guarda en `C:\Users\pablo\.autopass-vault`.

El invite se imprime en la terminal:

```
INVITE: yryh1jg7u7jfaf5okxj3dk66itycmuin51rtef17d931suuhfqijszqsu4q43rq3kdjbf8xccet81kt9orsrp7wbnrrapjs3yfo5z6izth
```

Usa ese invite en la app mobile para emparejarse.

**Importante:** Deja la terminal abierta mientras uses la app mobile. Si la cierras, el vault deja de estar disponible en la red P2P.

## Después de reiniciar el PC

```powershell
cd C:\Users\pablo\DEV\projects\autopass-invite
node serve.js
```

Cada vez que ejecutes `node serve.js` se genera un nuevo pairing invite. El vault y los datos persisten en `~/.autopass-vault`.

## Contraseñas de ejemplo

Si el vault está vacío, se agregan automáticamente:

| Username | Password | Website |
|---|---|---|
| alice@example.com | p@ssw0rd1 | example.com |
| bob@test.org | s3cret!23 | test.org |
