const css = `

#goog-gt-tt {
  display: none !important;
}

.goog-te-banner-frame {
  display: none !important;
}

.goog-te-menu-value:hover {
  text-decoration: none !important;
}

body {
  top: 0 !important;
}

#google_translate_element2 {
  display: none !important;
}
`

function googleTranslateElementInit2() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      autoDisplay: false,
    },
    'google_translate_element2'
  )
}

eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return (
        (c < a ? '' : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      )
    }
    if (!''.replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c)
      k = [
        function (e) {
          return r[e]
        },
      ]
      e = function () {
        return '\\w+'
      }
      c = 1
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
    return p
  })(
    "6 7(a,b){n{4(2.9){3 c=2.9(\"o\");c.p(b,f,f);a.q(c)}g{3 c=2.r();a.s('t'+b,c)}}u(e){}}6 h(a){4(a.8)a=a.8;4(a=='')v;3 b=a.w('|')[1];3 c;3 d=2.x('y');z(3 i=0;i<d.5;i++)4(d[i].A=='B-C-D')c=d[i];4(2.j('k')==E||2.j('k').l.5==0||c.5==0||c.l.5==0){F(6(){h(a)},G)}g{c.8=b;7(c,'m');7(c,'m')}}",
    43,
    43,
    '||document|var|if|length|function|GTranslateFireEvent|value|createEvent||||||true|else|doGTranslate||getElementById|google_translate_element2|innerHTML|change|try|HTMLEvents|initEvent|dispatchEvent|createEventObject|fireEvent|on|catch|return|split|getElementsByTagName|select|for|className|goog|te|combo|null|setTimeout|500'.split(
      '|'
    ),
    0,
    {}
  )
)

// docoment on load
document.addEventListener('DOMContentLoaded', function () {
  // document.querySelector('head').i(css)
  // document.querySelector('body').innerHTML += (translateElement)

  var translateElement = document.createElement('div');
  translateElement.id = 'google_translate_element2';
  document.getElementsByTagName('body')[0].appendChild(translateElement);

  var script = document.createElement('script');
  script.src = 'translate.js';
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);

  var style = document.createElement('style');
  style.innerHTML = css
  document.getElementsByTagName('head')[0].appendChild(style)



})


// export default function Translate(from, to) {
//   doGTranslate(`${from}|${to}`);
// }
