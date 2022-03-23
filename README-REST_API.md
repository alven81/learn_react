## How to install REST (Representational State Transfer) API JSON fake server
-----
### 1. Чтобы начать работу с json-server вам потребуется его установить через Менеджер пакетов Node (npm).

```json
sudo npm install -g json-server'
```

### 2. Создайте JSON файл в котором приведите пример требуемого формата возвращаемых данных. К примеру, мне потребуется JSON данные о пользователе: идентификатор, имя, расположение и т.д.. Я создам файл info.json со следующим JSON кодом:
```json
{
    "users": [{
        "id": 1,
        "name": "roy",
        "location": "india"
    }, {
        "id": 2,
        "name": "sam",
        "location": "wales"
    }]
}
```

### 3. Запускаем сервер через командную строку, указывая файл info.json в качестве источника данных REST API, доступных по адресу http://localhost:3000.

```json
json-server info.json
```

### 4. Fetch request:

```javascript
Request:
fetch("http://localhost:3000/users")
    .then(res => res.json()
    .then(console.log))

Answer:
Promise {<pending>}
(2) [{…}, {…}]
0: {id: 1, name: 'roy', location: 'india'}
1: {id: 2, name: 'sam', location: 'wales'}
length: 2
[[Prototype]]: Array(0)
```

-----

Info from:

https://code.tutsplus.com/ru/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871
https://github.com/typicode/json-server