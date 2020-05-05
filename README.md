# Schat

Чат в реальном времени созданный с использованием firebase. 
### `Приложение находится в Beta!`
Ссылка - https://schat-a0111.web.app/
#  Журнал изменений

  - Отправка сообщений - [текст с эмодзи, изображения, голосовые сообщения]
  - Регистрация и авторизация
  - Поиск пользователей и создание диалога
  - Онлайн пользователя
  - Защищенный роутинг
  
### `Не реализовано:`
  - Нет правил/ограничений под выдачу данных
  - Удаление сообщений и диалогов
  - Установка аватарки пользователя
  - Верстка и адаптив
  - Отображение прочитано сообщение или нет
  
### WorkFlow
- Краткое описание Workflow диалогов
> Имеется контейнерная компонента `listDialogs`.
В ней происходит запрос за пользователями и диалогами, делается
фильтр массива диалогов и возвращается, лишь тот в котором
имеется `creator === uid` или `invited === uid`.После этого
map массива и передаем в компоненту где выводим. Прелоадер,
основывается на запросах в хуках, после возвращается контент.
Написаны допольнительные вспомогальтельные функции, которые
фильтром пробегаются по опредленному диалогу и достают имя пользователя
в чате, соответственно и отображает положение сообщения, основываясь
на этом. Также имеется вспомогательная функция которая проверяет,
онлайн пользователя, уже в профильтрованном массиве с диалогами,
ищет пользователя и проверяет его онлайн. Онлайн мы узнаем с помощью
конфигурации firebase, храним в realtime firebase, открывается
сессия, добавляется пользователь, когда сессия закрывается, он удаляется.
'Защита от чтение чужих диалогов', выполняется на основе того же
массива, где проверяются creator и invited, если нет соответствия, тогда
отображение не будет.
Все данные хранятся в redux.
- Краткое описание Workflow формы отправки сообщений
> Содержит в себе текстовой редактор, аудио рекордер, кнопки отправки 
сообщений. Реализован FLUX, при впечатывании текста, onChange достает
текст из `editorState[draft-js]`, после вызывается Action Creator,где
передаем текст. Когда имеется текст, пропадает иконка записи
голосового сообщения, когда нажимаем отправить сообщения, срабатывает
action creator, который упаковывает содержимое сообщения и отправляет
в firestore, тамже происходит dispact action creator, который отвечает
за submit текстового поля, когда мы оповестили обработчик о том, что
произошёл submit, мы затираем state который хранится в reducer, внутри
текстового редактора происходит componentDidUpdate который берет, новое
значение под форму. С остальными методами отправки практически также,
когда начинается голосовое сообщение, происходит dispatch, основываясь, на
этих данных скрывается текстовое поле и отображаются элементы управления
записью голосового сообщения, происходит визуализация, после когда происходит
отправка, возвращается изначальное состояние, компонента перерисовывается.
Когда происходит отправка изображения, устанавливается превью, которое
хранится в store, меняется отображение кнопки отправки. Более подробно,
можно посмотреть в `src\components\Messages\SendForm\SendFormMessages.jsx`

### Что используется для создания:
        "@ant-design/icons": "^4.0.6",
        "@testing-library/jest-dom": "^4.2.4",
        "@testing-library/react": "^9.5.0",
        "@testing-library/user-event": "^7.2.1",
        "@types/jest": "^25.2.1",
        "@types/node": "^13.11.1",
        "@types/react": "^16.9.34",
        "@types/react-dom": "^16.9.6",
        "@types/react-redux": "^7.1.7",
        "@types/react-router-dom": "^5.1.4",
        "antd": "^4.1.2",
        "classnames": "^2.2.6",
        "draft-js": "^0.11.5",
        "draft-js-emoji-plugin": "^2.1.3",
        "draft-js-plugins-editor": "^3.0.0",
        "emoji-mart": "^3.0.0",
        "firebase": "^7.14.0",
        "node-sass": "^4.13.1",
        "react": "^16.13.1",
        "react-audio-analyser": "^0.3.1",
        "react-dom": "^16.13.1",
        "react-redux": "^7.2.0",
        "react-redux-firebase": "^3.3.0",
        "react-router-dom": "^5.1.2",
        "react-scripts": "3.4.1",
        "recorder-js": "^1.0.7",
        "redux": "^4.0.5",
        "redux-firestore": "^0.13.0",
        "redux-thunk": "^2.3.0",
        "styled-components": "^5.1.0",
        "text-emoji-parser": "^1.0.8",
        "typescript": "^3.8.3"

### Временные скриншоты приложения
![demo](https://github.com/sieugene/Schat/blob/master/src/ghImages/1.png?raw=true)
![demo](https://github.com/sieugene/Schat/blob/master/src/ghImages/2.png?raw=true)
![demo](https://github.com/sieugene/Schat/blob/master/src/ghImages/3.png?raw=true)
![demo](https://github.com/sieugene/Schat/blob/master/src/ghImages/4.png?raw=true)

   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

