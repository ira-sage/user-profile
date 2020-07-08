# приложение Профиль пользователя

## Варианты запуска:

### Без Docker
```sh
npm ci && npm run build && npm start
```

### С использованием Docker

```sh
docker image build -t user_profile .

docker container run -d -p 3000:3000 user_profile
```
## Будет доступно по адресу
```
http://localhost:3000/
```
