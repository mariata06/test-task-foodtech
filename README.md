## [Гайд по работе со сборкой](/GUIDE.md) 📕

## Краткая инструкция по работе
Для начала работы у вас должент быть установлен **Node.js 16**

### Основные команды для работы
- Установка - `npm i`
- Запуск локального сервера без минификаций - `npm start`
- Запуск локального сервера c минификациями, <br>
данный вариант не используется в разработке, <br>
он нужен только для тестов производительности <br>
на локальном хосте  - `npm run dev`
- Сборка проекта, минификация скриптов <br>
и оптимизация изображений перед деплоем на прод - `npm run build`
- Сборка проекта, без минификации <br>
и оптимизация изображений перед деплоем на прод - `npm run nomin`
- Запуск тестирования на соответствия кодгайдам - `npm test`
- Создание webp изображений в директории source - `npm run webp`
- Создание avif изображений в директории source - `npm run avif`
- Оптимизация картинок (png, svg, jpg) - `npm run optimize`

### Вся разработка ведётся в директории `source`
### Итоговый код попадает в директорию `build`

### Работа с экшенами
Для работы экшенов при создании репозитория нужно обязательно в разделе Actions -> General выбрать чекбокс "Allow GitHub Actions to create and approve pull requests" ([Скриншот](https://cln.sh/v99g2JdV))

Директория build добавлена в файл gitigonre. Для создания папки build на проекте настроены экшены.
Для работы с ними на сайте гитхаба необходимо зайти во вкладку **********************************Actions********************************** и выполнить следующие действия:
1. Выбрать экшн, который нужно запустить. В сборке настроено два типа экшенов - build и production. Build - собирает только билд проекта, без исходников. Production - собирает билд проекта и исходные файлы.
2. Нажать на кнопку `Run workflow`. В выпадающем списке убедиться, что экшн будет запущен из ветки master и нажать зеленую кнопку `Run workflow`.
3. После этого во вкладке Actions мы можем посмотреть на процесс выполнения нашего экшена. Когда экшн отработает корректно, напротив его названия появится зеленый значок, это означает что ошибок при его выполнении нет и он отработал корректно. После этого в списке веток репозитория должна появиться ветка `build` или `production`, в которой будет лежать наш собранный проект.

Страницы:
статья - https://66d6c0c56e9fc3dc9b225721--musical-semolina-aae7a6.netlify.app/
главная - https://66d6be977698c3d07c47eeba--benevolent-marigold-bc2184.netlify.app/
