import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

window.UIkit = UIkit; // fix not difined bug

// loads the Icon plugin
UIkit.use(Icons);

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../svg/', true, /\.svg$/));

// document.addEventListener('DOMContentLoaded', () => {
//   UIkit.util.on('.header__dropdown', 'beforehide', function(e) {
//     // do something
//     console.log(e);
//     e.preventDefault();
//     e.target.classList.add('classssss');
//   });
// });
