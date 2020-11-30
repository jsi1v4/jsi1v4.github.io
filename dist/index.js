"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* ### Global ### */
var PROTOCOL = window.location.protocol;
var PAGELEN = document.querySelectorAll('[id^="page"]').length - 1;
var PAGE = 0;
var THEME = 'dark';
/* ### Utils ### */

function get(_x) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(PROTOCOL, "//").concat(url));

          case 2:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", response.text());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get.apply(this, arguments);
}

function arrFromTable(data) {
  var remap = data.split(/\r\n/g).map(function (t) {
    return t.split(' | ');
  });

  var _remap = _toArray(remap),
      header = _remap[0],
      separator = _remap[1],
      rows = _remap.slice(2);

  return {
    header: header,
    rows: rows
  };
}

function languageColor(language) {
  var colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572a5',
    Rust: '#dea584',
    Shell: '#89e051',
    Clojure: '#db5855',
    Default: '#e34c26',
    None: '#fff'
  };
  return language ? colors[language] || colors.Default : colors.None;
}
/* ### Data ### */


function getProfile(_x2, _x3) {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(onSuccess, onError) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return get('api.github.com/users/jsi1v4');

          case 2:
            data = _context2.sent;

            if (data) {
              onSuccess(JSON.parse(data));
            } else {
              onError();
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getProfile.apply(this, arguments);
}

function getProjects(_x4) {
  return _getProjects.apply(this, arguments);
}

function _getProjects() {
  _getProjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(onSuccess) {
    var data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return get('api.github.com/users/jsi1v4/repos?per_page=6&sort=pushed');

          case 2:
            data = _context3.sent;

            if (data) {
              onSuccess(JSON.parse(data));
            }

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getProjects.apply(this, arguments);
}

function getResume(_x5) {
  return _getResume.apply(this, arguments);
}

function _getResume() {
  _getResume = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(onSuccess) {
    var data;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return get('raw.githubusercontent.com/jsi1v4/jsi1v4/master/topics/resume.md');

          case 2:
            data = _context4.sent;
            if (data) onSuccess(data);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getResume.apply(this, arguments);
}

function getLinks(_x6) {
  return _getLinks.apply(this, arguments);
}

function _getLinks() {
  _getLinks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(onSuccess) {
    var data, _arrFromTable, header, rows, links, i, metadata, title, text, href;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return get('raw.githubusercontent.com/jsi1v4/jsi1v4/master/topics/links.md');

          case 2:
            data = _context5.sent;

            if (data) {
              _arrFromTable = arrFromTable(data), header = _arrFromTable.header, rows = _arrFromTable.rows;
              links = [];

              for (i = 0; i < header.length; i++) {
                metadata = rows[0][i].match(/[\[\(](.*?)[\]\)]/g);

                if (metadata) {
                  title = header[i];
                  text = metadata[0].replace(/[\[\]]/g, '');
                  href = metadata[1].replace(/[\(\)]/g, '');
                  links.push({
                    title: title,
                    text: text,
                    href: href
                  });
                }
              }

              onSuccess(links);
            }

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getLinks.apply(this, arguments);
}

function getInterests(_x7) {
  return _getInterests.apply(this, arguments);
}
/* ### Navigation ### */


function _getInterests() {
  _getInterests = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(onSuccess) {
    var data, _arrFromTable2, header, rows, links, i, metadata, title, img, href;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return get('raw.githubusercontent.com/jsi1v4/jsi1v4/master/topics/interests.md');

          case 2:
            data = _context6.sent;

            if (data) {
              _arrFromTable2 = arrFromTable(data), header = _arrFromTable2.header, rows = _arrFromTable2.rows;
              links = [];

              for (i = 0; i < header.length; i++) {
                metadata = rows[0][i].match(/[\(](.*?)[\)]/g);

                if (metadata) {
                  title = header[i];
                  img = metadata[0].replace(/[\(\)]/g, '');
                  href = metadata[1].replace(/[\(\)]/g, '');
                  links.push({
                    title: title,
                    img: img,
                    href: href
                  });
                }
              }

              onSuccess(links);
            }

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getInterests.apply(this, arguments);
}

function goTop() {
  PAGE = 0;
  goUp();
}

function goUp() {
  if (--PAGE < 0) {
    PAGE = 0;
  }

  if (PAGE === 0) {
    changePhotoState(false);
  }

  document.querySelector("#page".concat(PAGE)).scrollIntoView();
}

function goDown() {
  if (++PAGE > PAGELEN) {
    PAGE = PAGELEN;
  }

  if (PAGE !== 0) {
    changePhotoState(true);
  }

  var page = document.querySelector("#page".concat(PAGE));
  page.classList.add('fadein');
  page.scrollIntoView();
}

function setScrollKeybind() {
  // let startScreenY = 0;
  // document.ontouchstart = (e) => {
  //   e.preventDefault();
  //   startScreenY = e.changedTouches[0].screenY;
  // };
  // document.ontouchend = (e) => {
  //   e.preventDefault();
  //   const endScreenY = e.changedTouches[0].screenY;
  //   if (startScreenY < endScreenY) { // to up
  //     goUp();
  //   } else { // to down
  //     goDown();
  //   }
  // };
  document.onwheel = function (e) {
    if (e.deltaY < 0) {
      // to up
      goUp();
    } else {
      // to down
      goDown();
    }
  };

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38: // arrow up

      case 87:
        // key w
        goUp();
        break;

      case 40: // arrow down

      case 83:
        // key s
        goDown();
        break;

      case 116:
        // key F5
        location.reload();
        break;

      case 68:
        // key D
        e.ctrlKey && setDarkmode();
        break;

      case 76:
        // key L
        e.ctrlKey && setLightmode();
        break;
    }
  };
}
/* ### DOM changes ### */


function initDOM() {
  document.querySelector('#profile-img').onclick = function () {
    goTop();
    playUp();
  };

  document.querySelector('#theme-toggle').onclick = function () {
    toggleTheme();
    playToggle();
  };
}

function initTheme() {
  switch (THEME) {
    case 'light':
      setLightmode();
      break;

    case 'dark':
      setDarkmode();
      break;
  }
}

function toggleTheme() {
  switch (THEME) {
    case 'light':
      THEME = 'dark';
      setDarkmode();
      break;

    case 'dark':
      THEME = 'light';
      setLightmode();
      break;
  }
}

function setDarkmode() {
  document.body.className = 'darkmode';
  document.querySelector('#theme-toggle-icon').className = "nav__btn__icon fa fa-moon-o";
}

function setLightmode() {
  document.body.className = 'lightmode';
  document.querySelector('#theme-toggle-icon').className = 'nav__btn__icon fa fa-sun-o';
}

function playToggle() {
  document.querySelector('#sound-toggle').play();
}

function playUp() {
  document.querySelector('#sound-up').play();
}

function changeProfile(_ref) {
  var avatar_url = _ref.avatar_url,
      name = _ref.name;
  document.querySelector('#profile-img').setAttribute('src', avatar_url);
  document.querySelector('#profile-img').setAttribute('title', name);
  document.querySelector('#profile-img').classList.add('fadein');
  document.querySelector('#profile-caption').innerHTML = "I'm ".concat(name);
}

function changeProfileError() {
  document.querySelector('#profile-img').setAttribute('src', 'https://raw.githubusercontent.com/jsi1v4/jsi1v4/master/assets/error.png');
  document.querySelector('#profile-img').classList.add('fadein');
  document.querySelector('#profile-caption').innerHTML = 'Opss... we had a problem!';
}

function changePhotoState(fixed) {
  if (fixed) {
    document.querySelector('#profile-img').classList.add('intro__photo__img--fixed');
  } else {
    document.querySelector('#profile-img').classList.remove('intro__photo__img--fixed');
  }
}

function changeResume(text) {
  document.querySelector('#about-resume').innerHTML = text;
}

function changeLinks(links) {
  var list = document.querySelector('#contact-list');
  var item = list.firstElementChild;
  links.forEach(function (t) {
    var newItem = item.cloneNode(true);
    newItem.querySelector('#contact-list-link').setAttribute('href', t.href);
    newItem.querySelector('#contact-list-icon').className = "contact__icon fa fa-".concat(t.title);
    newItem.querySelector('#contact-list-text').innerHTML = t.text;
    list.appendChild(newItem);
  });
  item.remove();
}

function changeInterests(interests) {
  var list = document.querySelector('#about-list');
  var item = list.firstElementChild;
  interests.forEach(function (t) {
    var newItem = item.cloneNode(true);
    newItem.querySelector('#about-list-link').setAttribute('href', t.href);
    newItem.querySelector('#about-list-title').innerHTML = t.title;
    newItem.querySelector('#about-list-img').setAttribute('src', t.img);
    newItem.querySelector('#about-list-img').setAttribute('title', t.title);
    list.appendChild(newItem);
  });
  item.remove();
}

function changeProjects(projects) {
  var list = document.querySelector('#projects-list');
  var item = list.firstElementChild;
  projects.forEach(function (t) {
    var newItem = item.cloneNode(true);
    newItem.querySelector('#projects-repo-link').setAttribute('href', t.html_url);
    newItem.querySelector('#projects-repo-title').innerHTML = t.name;
    newItem.querySelector('#projects-repo-description').innerHTML = t.description;
    newItem.querySelector('#projects-repo-lang').innerHTML = t.language;
    newItem.querySelector('#projects-repo-stars').innerHTML = t.stargazers_count;
    newItem.querySelector('#projects-repo-langcolor').style.backgroundColor = languageColor(t.language);
    list.appendChild(newItem);
  });
  item.remove();
}
/* ### Run ### */


function main() {
  return _main.apply(this, arguments);
}

function _main() {
  _main = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            initTheme();
            initDOM();
            goTop(); // reset view
            // init finish after profile request data

            _context7.next = 5;
            return getProfile(changeProfile, changeProfileError);

          case 5:
            getResume(changeResume);
            getInterests(changeInterests);
            getLinks(changeLinks);
            getProjects(changeProjects);
            setScrollKeybind();

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _main.apply(this, arguments);
}

window.onload = main;