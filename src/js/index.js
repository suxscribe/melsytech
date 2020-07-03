import '@babel/polyfill';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import cssVars from 'css-vars-ponyfill';
import objectFitImages from 'object-fit-images';

window.UIkit = UIkit; // fix not difined bug

cssVars({
  // Options...
});

// loads the Icon plugin
UIkit.use(Icons);

document.addEventListener('DOMContentLoaded', () => {});
