![QuickStart](./quickstart.png)

# QuickStart DockerCompose LEMP PHP-MVC Scss Webpack 5

QuickStart is a project from [ScorpioCoding.com](https://scorpiocoding.com)
which creates cool startup applications for others to use. This current project
has been a long time in the making. So how you enjoy.

This project is a:

- Docker Compose LEMP Stack with PHP, MySql, PhpMyAdmin and has a PHP-MVC frame
  work.
- The PHP-MVC framework is home grown and totally independent.
- Uses standard PHP as Templating in the version of phtml files.
- Webpack development area that auto injects files into your project.
- Webpack + Sass + Postcss and a few more handle the Scss => Css conversion /
  minify

The whole idee of this project is to create a starter template for projects.

If you wish to try it out grabe a fork and enjoy. Please feel free to add any
issues/request/questions you may have in to github issues section.

---

### A few things to note:

Open Ports:

- ports : 9580 => http://localhost:9580 => app
- ports : 9581 => http://localhost:9581 => phpMyAdmin

Closed Ports:

- ports : 9000 => php poort not externally needed
- ports : 9586 => MySql if needed can be opened

---

### Webpack-PurgeCss-Plugin 5.0 error

Webpack-PurgeCss-Plugin is stil version 4.1.3 due to the fact version 5.0 give's
an error:

```
PurgeCss IS NOT A CONSTRUCTOR
```

---

## HOW To use

1. Clone the repo

```
https://github.com/denOldTimer/qs-dc-lemp-mvc-webpack-base.git
```

2. Change directory => development

```
cd development
```

3. Run npm install

```
npm install
```

4. Run Webpack from the Development Directory Once to initiate

```
npm start
```

5. Run Webpack for development | browser-sync kicks in

```
npm run watch
```

6. Start developing.

---

## Developing

Activate Docker Compose

- open a terminal in the root directory where the docker compose file is.
- run the command :

```
docker compose up -d --build
```

Runs the docker compose in detached mode and is always running.  
So when finish developing for the day do NOT forget to `down` everything.  
To shut it down when need to, use the command:

```
docker compose down
```

Create entry points in `webpack.common.js` for example: About

```
"site/about": [
      path.resolve(__dirname, "../src/site/js/about.js"),
      path.resolve(__dirname, "../src/site/scss/about.scss"),
      path.resolve(__dirname, "../src/site/views/about.phtml"),
    ],
```

Create the 3 about files in the `src` directory

```
/src/site/js/about.js
/src/site/scss/about.scss
/src/site/views/about.phtml
```

Create The `About.php` Controller, just copy, paste and rename the Home
Controller

Run Webpack

```
npm start
```

or

```
npm run watch
```

Open your favourite browser and go to localhost:9580 and refresh 'F5'.  
 Sorry no hot reloading.
