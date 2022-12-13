# Rancid Tomatillos API

This is the repo for the server created for use with the [Rancid Tomatillos Project](https://github.com/sam-rice/rancid-tomatillos). The server is built on Node.js/Express, and is currently deployed via Netlify.


## API Reference

#### Base URL

```http
  https://rancid-tomatillos-api.netlify.app/.netlify/functions/
```

#### Get all movies

```http
  GET api/v1/movies
```

#### Get single movie details

```http
  GET api/v1/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of movie to fetch |

#### Get single movie YouTube videos

```http
  GET api/v1/movies/${id}/videos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of movie to fetch |


