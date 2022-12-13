# Rancid Tomatillos API

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
</p>

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


