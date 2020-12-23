<h1 align="center">Create HTML boilerplate</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.3.0-green.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%5E10.18-green.svg" />
</p>

<p>Привет! Спасибо за то что используете наш Create HTML boilerplate.</p>
<p>
  Данная сборка вдохновлена проектом с хабра и многими часами вёрстки и
  разработки. Здесь специально нет ничего лишнего и только набор базовых
  файлов, чтобы было понятно как построить базовую структуру проекта
</p>
<ul>
  <li>HTML</li>
  <li>SCSS</li>
  <li>JS</li>
  <li>Шрифты</li>
  <li>Картинки и т.д.</li>
</ul>

## Файловая структура

```
myApp
├── .github
│   ├── bug_report.md              - шаблон для создания issue
│   └── feature_request.md         - шаблон для создания запроса на улучшение
├── source
│   ├── fonts                      - папка с подключаемыми шрифтами
│   ├── html                       – HTML
│   │   ├── includes/              – блоки
│   │   └── views/                 – страницы
│   ├── img                        - изображения
│   ├── js                         - JavaScript
│   ├── root                       - файлы, которые будут лежать в корне проекта
│   │   └── manifest.json          - базовая информация о сайте для браузера
│   ├── scss                       - стили проекта
│   │   ├── font-face.scss         - подключение шрифтов
│   │   ├── global.scss            - глобальные стили
│   │   ├── style.scss             – подключение всех стилей проекта
│   │   └── variables.scss         - SCSS переменные (цвета, размеры, шрифты)
│   └── vendors
│       └── normalize-css/
│           └── normalize.min.css  - нормализация стилей по умолчанию
├── webpack
│   └── webpack.config.js          - конфиг для webpack
├── .editorconfig                  - настройки редактора кода
├── .eslintrc.js                   - настройки JS линтера
├── .gitattributes
├── .gitignore                     - файлы/папки игнорируемые Git
├── .prettierrc                    - настройки Prettier
├── .stylelintrc.js                - настройки Stylelint
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Зависимости

- node ^10

## Что под капотом

- Webpack
- SCSS
- JS с Babel
- Stylelint, Eslint
- Prettier – для автоформатирования

## Установка

```sh
npm i
```

## Запуск

```sh
npm start
```

## Авторы

👤 **[Webtime.Studio](https://github.com/webtime-studio)**

- [Павел Клочков @ckomop0x](https://github.com/ckomop0x)
- [Тина Кузьменко @tinakuzmenko](https://github.com/tinakuzmenko)

## Show your support

Поставьте нам звёздочку ⭐️ если этот проект помог вам!
