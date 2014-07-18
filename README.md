Amaze UI Widget hbs helper
===============

[Amaze UI widget](http://amazeui.org/widgets) Handlebars partials and helpers.

### Usage
    
#### Install hbs and amui-hbs-helper.

```javascript
npm install hbs amui-hbs-helper --save
```
    
#### Config App
  
```javascript
var hbs = require('hbs');
var amuiHelper = require('amui-hbs-helper')(hbs);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
```

#### Use Amaze UI Partial

Now you can use Amaze UI Widget in your template:

```html
{{>slider data}}
```

You can run the example in `./example` folder.

```
cd example
npm install
npm start
```