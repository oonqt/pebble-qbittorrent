require('pebblejs');
// const Cookie = require('tough-cookie').Cookie;
const UI = require('pebblejs/ui');
const Vector2 = require('pebblejs/lib/vector2');
const Settings = require('pebblejs/settings');
const ajax = require('pebblejs/lib/ajax');
const Feature = require('pebblejs/platform/feature');
const Clay = require('./clay');
const clayConfig = require('./config');

const clay = new Clay(clayConfig, null, { autoHandleEvents: false });

Pebble.addEventListener('showConfiguration', function() {
    Pebble.openURL(clay.generateUrl());
});

Pebble.addEventListener('webviewclosed', function(e) {
    if (!e || !e.response) return;

    const data = clay.getSettings(e.response);

    Settings.option(data);
});

const loadingScreen = new UI.Window({

});

const logoImage = new UI.Image({
    image: 'QBIT_LOGO',
    size: new Vector2(125, 125),
    position: new Vector2(25, 25)
});

loadingScreen.add(logoImage);

loadingScreen.show();