<p align="center"># Laravel-Vue SPA </p>

<a href="https://github.com/iamdamith/laravel-vue-spa/actions"><img src="https://github.com/iamdamith/laravel-vue-spa/workflows/tests/badge.svg" alt="Build Status"></a>

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
