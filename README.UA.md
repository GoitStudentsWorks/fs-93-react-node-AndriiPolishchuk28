Проєкт Water-Tracker-APP це веб-застосунок, який дозволяє користувачам стежити за своїм щоденним вживанням води.
Застосунок має наступні функціональні компоненти: Головна сторінка, Журнал води та Налаштування.
Застосунок адаптований до десктопу, планшету та мобілки.Реалізувана логіка приватних та публічних маршрутів.

[image](https://github.com/AndriiPolishchuk28/water-tracker-frontend/assets/136389095/00b6bf30-1cb7-4bb8-823c-a0673d3fc192)

## Встановлення та запуск проекту

Для того, щоб розгорнути цей проект локально, виконайте наступні кроки:

### Клонування репозиторію

Спочатку клонуйте репозиторій на свій локальний комп'ютер:

```sh
git clone https://github.com/AndriiPolishchuk28/water-tracker-frontend.git

Встановлення залежностей
Перейдіть до каталогу проекту та встановіть необхідні залежності:

cd water-tracker-frontend
npm install

Запуск проекту
Запустіть проект у режимі розробника:

npm start

Ця команда запустить локальний сервер розробки і відкриє проект у вашому браузері.

Будівництво для продакшну
Якщо ви хочете зібрати проект для продакшну, використовуйте команду:

npm run build

Це створить оптимізовану версію проекту у папці build.

Деплоймент
Для розгортання проекту на GitHub Pages, ви можете використати команду:

npm run deploy

Переконайтеся, що у вашому package.json файлі вказано правильний homepage.

Додаткова інформація
Для детальнішої інформації та інших команд, будь ласка, зверніться до розділу “scripts” у файлі package.json.


 ## Залежності

Вимагає наступних залежностей:

- `@emotion/react`: ^11.11.4
- `@emotion/styled`: ^11.11.5
- `@mui/material`: ^5.15.15
- `@reduxjs/toolkit`: ^2.2.3
- `@testing-library/jest-dom`: ^5.16.3
- `@testing-library/react`: ^12.1.4
- `@testing-library/user-event`: ^13.5.0
- `axios`: ^1.6.8
- `formik`: ^2.4.5
- `react`: ^18.1.0
- `react-dom`: ^18.2.0
- `react-helmet`: ^6.1.0
- `react-modal`: ^3.16.1
- `react-redux`: ^9.1.0
- `react-router-dom`: ^6.22.3
- `react-scripts`: 5.0.1
- `react-toastify`: ^10.0.5
- `reactjs-popup`: ^2.0.6
- `redux`: ^5.0.1
- `redux-persist`: ^6.0.0
- `styled-components`: ^6.1.8
- `styled-react-modal`: ^3.1.1
- `web-vitals`: ^2.1.3
- `yup`: ^1.4.0

Для встановлення цих залежностей запустіть наступну команду у вашому каталозі проекту:

```sh
npm install


Скрипти
У проекті визначені наступні скрипти:

start: Запускає проект у режимі розробника.
build: Створює оптимізовану версію проекту для продакшну.
test: Запускає тести.
eject: Видаляє одноразову конфігурацію і скрипти.
ESLint Конфігурація
Проект використовує ESLint для забезпечення якості коду:

JSON

"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest"
  ]
}

Browserslist
Визначає підтримувані браузери для розробки та продакшну:

JSON

"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
Домашня сторінка
Проект має домашню сторінку, доступну за адресою:

https://AndriiPolishchuk28.github.io/water-tracker-frontend/


## Проєкт створили

Цей проєкт був створений завдяки зусиллям талановитої команди розробників. Кожен член команди вніс унікальний вклад у розробку та дизайн проекту.

- **AndriiPolishchuk28** - 
- **SerhiiOberemchuk** - 
- **IrynaYrrr** - 
- **acrcane** - 
- **OksanaDrobakha** -
- **andea13** -  
- **KoshJR ** - 
- **Ninylka ** - 
- **Krislv4nk** -


Ми також хочемо подякувати спільноті розробників за їхні поради та підтримку у створенні цього проекту.