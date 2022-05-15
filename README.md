
# Weather App

An app to know the weather of any city just by entering its name in the search engine.


## API Reference

#### Get all items

```https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${api.key}
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(city, country)

Write city or country to bring the weather


## Authors

- [@FernandoAlarcon](https://www.linkedin.com/in/feralarcon1995/)


## Deployment

To deploy this project run

```bash
  npm start
```


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Demo

https://wheater-pg565xx31-feralarcon1995.vercel.app/

