/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // Базовый URL-адрес сборки вашего приложения. Аналог опции webpack output.publicPath
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/otus/1',
    // Каталог, в котором при запуске build будут создаваться файлы сборки для production.
    outputDir: 'dist',
    // Каталог (относительно outputDir) для хранения сгенерированных статических ресурсов (js, css, img, fonts).
    assetsDir: 'assets',
    // Путь к сгенерированному index.html (относительно outputDir).
    indexPath: 'index.html',
    // Генерируемые статические ресурсы содержат хэши в именах файлов для лучшего управления кэшированием.
    filenameHashing: true,
    // Сборка приложения в многостраничном режиме (MPA).
    pages: undefined,
    /*{
        index: {
            // у каждой «страницы» должна быть соответствующая точка входа (entry) в виде JavaScript-файла
            entry: 'src/index/main.js',
            // исходный шаблон
            template: 'public/index.html',
            // в результате будет dist/index.html
            filename: 'index.html',
            // когда используется опция title, то <title> в шаблоне
            // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // все фрагменты, добавляемые на этой странице, по умолчанию
            // это извлечённые общий фрагмент и вендорный фрагмент.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },*/
    // Выполнять ли линтинг кода при сохранении во время разработки с помощью eslint-loader.
    lintOnSave: false,
    // Использование сборки Vue которая содержит компилятор шаблонов.
    runtimeCompiler: true,
    // Transpiling is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction.
    transpileDependencies: [],
    // Использование source maps для production сборки. https://habr.com/ru/post/509250/
    productionSourceMap: true,
    // https://developer.mozilla.org/ru/docs/Web/HTML/Attributes/crossorigin
    crossorigin: undefined,
    // https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
    integrity: false,
    // https://cli.vuejs.org/ru/guide/webpack.html
    configureWebpack: config => { },
    chainWebpack: config => {
        config.module.rule('vue').use('vue-loader').tap(options => {
            // изменение настроек...
            return options
        })
    },
    // https://cli.vuejs.org/ru/guide/css.html
    css: {
        // По умолчанию, только файлы заканчивающиеся на *.module.[ext] обрабатываются как CSS-модули.
        // Установка в значение false позволит вам убрать .module из имён файлов и обрабатывать все *.(css|scss|sass|less|styl(us)?) файлы как CSS-модули.
        requireModuleExtension: false,
        // Извлечение CSS из ваших компонентов в отдельный CSS-файл (вместо инлайна в JavaScript и динамического внедрения).
        extract: process.env.NODE_ENV === 'production' ? true : false,
        // Использование source maps для CSS
        sourceMap: process.env.NODE_ENV === 'production' ? false : true,
        // Передача настроек в загрузчики относящиеся к CSS.
        // https://cli.vuejs.org/ru/guide/css.html#передача-настроек-в-загрузчики-пре-процессоров
        loaderOptions: {
            //css: {
            // эти настройки будут переданы в css-loader
            //},
            //postcss: {
            // эти настройки будут переданы в postcss-loader
            //}
        },
    },
    // Поддерживаются все настройки для webpack-dev-server. https://webpack.js.org/configuration/dev-server/
    devServer: {},
    // Использовать ли thread-loader для транспиляции Babel или TypeScript.
    // Не используйте parallel в комбинации с не-сериализуемыми опциями загрузчика, такими как регулярные выражения, даты и функции.
    parallel: require('os').cpus().length > 1,
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // https://cli.vuejs.org/ru/core-plugins/pwa.html
    pwa: {},
    // Этот объект не проходит никакой валидации своей структуры, поэтому можно его использовать для передачи произвольных параметров сторонним плагинам.
    pluginOptions: {},
}
