const { JSDOM } = require('jsdom');

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
