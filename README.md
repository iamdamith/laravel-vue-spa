<p align="center"># Laravel-Vue SPA </p>

[![Laravel](https://github.com/iamdamith/laravel-vue-spa/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/iamdamith/laravel-vue-spa/actions/workflows/tests.yml)

<p align="center">
<img src="https://i.imgur.com/sIwRc75.png">
</p>


## Features

- Laravel 10
- Vue + VueRouter + Pinia + Tailwind CSS + ESlint
- Pages with  custom layouts
- Login, register and Dashboard pages
- Authentication with JWT
- Tailwind UI

## Installation

- `composer create-project --prefer-dist iamdamith/laravel-vue-spa`
- Edit `.env` and set your database connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `npm install`

## Usage

#### Development

```bash
npm run dev
```

#### Production

```bash
npm run build
```
