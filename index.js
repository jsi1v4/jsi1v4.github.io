"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* ### Global ### */
var BRANCH = 'master';
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

var fillElement = function fillElement(id, collection, handle) {
  var listElement = document.querySelector(id);
  var anchor = listElement.firstElementChild;
  collection.forEach(function (item) {
    var el = anchor.cloneNode(true);
    handle(el, item);
    listElement.appendChild(el);
  });
  anchor.remove();
};
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
            if (data) onSuccess(JSON.parse(data));

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
            return get("raw.githubusercontent.com/jsi1v4/jsi1v4/".concat(BRANCH, "/topics/resume.md"));

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
    var data, rows, links;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return get("raw.githubusercontent.com/jsi1v4/jsi1v4/".concat(BRANCH, "/topics/links.md"));

          case 2:
            data = _context5.sent;

            if (data) {
              rows = data.split(/\r\n/g);
              rows.pop();
              links = rows.map(function (a) {
                return {
                  icon: a.match(/\[(.+)\]/g)[0].slice(1, -1),
                  href: a.match(/\((.+)\)/g)[0].slice(1, -1)
                };
              });
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
    var data, rows, interests;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return get("raw.githubusercontent.com/jsi1v4/jsi1v4/".concat(BRANCH, "/topics/interests.md"));

          case 2:
            data = _context6.sent;

            if (data) {
              rows = data.split(/\r\n/g);
              rows.pop();
              interests = rows.map(function (a) {
                return {
                  img: a.match(/(\[?\(.+\)\])/g)[0].slice(1, -2),
                  title: a.match(/(\[\w+\])/g)[0].slice(1, -1),
                  href: a.match(/(\)\]\(.+\))/g)[0].slice(3, -1)
                };
              });
              onSuccess(interests);
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
  document.onwheel = function (e) {
    if (e.deltaY < 0) {
      goUp();
    } else {
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
      name = _ref.name,
      bio = _ref.bio;
  document.querySelector('#profile-img').setAttribute('src', avatar_url);
  document.querySelector('#profile-img').setAttribute('title', name);
  document.querySelector('#profile-img').classList.add('fadein');
  document.querySelector('#profile-name').innerHTML = "I'm ".concat(name);
  document.querySelector('#profile-bio').innerHTML = bio;
}

function changeProfileError() {
  document.querySelector('#profile-img').classList.add('fadein');
  document.querySelector('#profile-title').innerHTML = 'Opss... we had a problem! Please refresh page.';
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
  fillElement('#contact-list', links, function (element, link) {
    element.querySelector('#contact-list-icon').className = "contact__icon fa fa-".concat(link.icon);
    element.querySelector('#contact-list-link').setAttribute('title', link.icon);
    element.querySelector('#contact-list-link').setAttribute('href', link.href);
  });
}

function changeInterests(interests) {
  fillElement('#about-list', interests, function (element, int) {
    element.querySelector('#about-list-link').setAttribute('href', int.href);
    element.querySelector('#about-list-item').setAttribute('src', int.img);
    element.querySelector('#about-list-item').setAttribute('title', int.title);
  });
}

function changeProjects(projects) {
  fillElement('#projects-list', projects, function (element, proj) {
    element.querySelector('#projects-repo-link').setAttribute('href', proj.html_url);
    element.querySelector('#projects-repo-title').innerHTML = proj.name;
    element.querySelector('#projects-repo-description').innerHTML = proj.description;
    element.querySelector('#projects-repo-lang').innerHTML = proj.language;
    element.querySelector('#projects-repo-stars').innerHTML = proj.stargazers_count;
    element.querySelector('#projects-repo-langcolor').style.backgroundColor = languageColor(proj.language);
  });
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
            getLinks(changeLinks);
            getResume(changeResume);
            getInterests(changeInterests);
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