var test = require('./test-module');

document.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM content loaded');

    test('Test module loaded');
});
