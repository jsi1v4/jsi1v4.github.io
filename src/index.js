/* ### Global ### */
const BRANCH = 'main';
const PROTOCOL = window.location.protocol;
const PAGELEN = document.querySelectorAll('[id^="page"]').length - 1;
let PAGE = 0;
let THEME = 'dark';

/* ### Utils ### */
async function get(url) {
  const response = await fetch(`${PROTOCOL}//${url}`);
  if (response.ok) {
    return response.text();
  }
}

function languageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572a5',
    Rust: '#dea584',
    Shell: '#89e051',
    Clojure: '#db5855',
    Default: '#e34c26',
    None: '#fff',
  };
  return language ? colors[language] || colors.Default : colors.None;
}

const fillElement = (id, collection, handle) => {
  const listElement = document.querySelector(id);
  const anchor = listElement.firstElementChild;
  collection.forEach((item) => {
    const el = anchor.cloneNode(true);
    handle(el, item);
    listElement.appendChild(el);
  });
  anchor.remove();
};

/* ### Data ### */
async function getProfile(onSuccess, onError) {
  const data = await get('api.github.com/users/jsi1v4');
  if (data) {
    onSuccess(JSON.parse(data));
  } else {
    onError();
  }
}

async function getProjects(onSuccess) {
  const data = await get(
    'api.github.com/users/jsi1v4/repos?per_page=6&sort=pushed'
  );
  if (data) onSuccess(JSON.parse(data));
}

async function getResume(onSuccess) {
  const data = await get(
    `raw.githubusercontent.com/jsi1v4/jsi1v4/${BRANCH}/topics/resume.md`
  );
  if (data) onSuccess(data);
}

async function getLinks(onSuccess) {
  const data = await get(
    `raw.githubusercontent.com/jsi1v4/jsi1v4/${BRANCH}/topics/links.md`
  );
  if (data) {
    const rows = data.split(/\r\n/g);
    rows.pop();
    const links = rows.map((a) => ({
      icon: a.match(/\[(.+)\]/g)[0].slice(1, -1),
      href: a.match(/\((.+)\)/g)[0].slice(1, -1),
    }));
    onSuccess(links);
  }
}

async function getInterests(onSuccess) {
  const data = await get(
    `raw.githubusercontent.com/jsi1v4/jsi1v4/${BRANCH}/topics/interests.md`
  );
  if (data) {
    const rows = data.split(/\r\n/g);
    rows.pop();
    const interests = rows.map((a) => ({
      img: a.match(/(\[?\(.+\)\])/g)[0].slice(1, -2),
      title: a.match(/(\[\w+\])/g)[0].slice(1, -1),
      href: a.match(/(\)\]\(.+\))/g)[0].slice(3, -1),
    }));
    onSuccess(interests);
  }
}

async function getTools(onSuccess) {
  const data = await get(
    `raw.githubusercontent.com/jsi1v4/jsi1v4/${BRANCH}/topics/tools.md`
  );
  if (data) {
    const rows = data.split(/\r\n/g);
    rows.pop();
    const links = rows.map((a) => ({
      label: a.match(/\[(.+)\]/g)[0].slice(1, -1),
      href: a.match(/\((.+)\)/g)[0].slice(1, -1),
    }));
    onSuccess(links);
  }
}

/* ### Navigation ### */
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
  document.querySelector(`#page${PAGE}`).scrollIntoView();
}

function goDown() {
  if (++PAGE > PAGELEN) {
    PAGE = PAGELEN;
  }
  if (PAGE !== 0) {
    changePhotoState(true);
  }
  const page = document.querySelector(`#page${PAGE}`);
  page.classList.add('fadein');
  page.scrollIntoView();
}

function setScrollKeybind() {
  document.onwheel = (e) => {
    if (e.deltaY < 0) {
      goUp();
    } else {
      goDown();
    }
  };

  document.onkeydown = (e) => {
    switch (e.keyCode) {
      case 38: // arrow up
      case 87: // key w
        goUp();
        break;
      case 40: // arrow down
      case 83: // key s
        goDown();
        break;
      case 116: // key F5
        location.reload();
        break;
      case 68: // key D
        e.ctrlKey && setDarkmode();
        break;
      case 76: // key L
        e.ctrlKey && setLightmode();
        break;
    }
  };
}

/* ### DOM changes ### */
function initDOM() {
  document.querySelector('#profile-img').onclick = () => {
    goTop();
    playUp();
  };
  document.querySelector('#theme-toggle').onclick = () => {
    toggleTheme();
    playToggle();
  };
  document.querySelector('#tools-link').onclick = () => {
    openModalTools();
  };
  document.querySelector('#tools-modal-overlay').onclick = () => {
    closeModalTools();
  };
  document.querySelector('#tools-modal-close').onclick = () => {
    closeModalTools();
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
  document.querySelector(
    '#theme-toggle-icon'
  ).className = `nav__btn__icon fa fa-moon-o`;
}

function setLightmode() {
  document.body.className = 'lightmode';
  document.querySelector('#theme-toggle-icon').className =
    'nav__btn__icon fa fa-sun-o';
}

function playToggle() {
  document.querySelector('#sound-toggle').play();
}

function playUp() {
  document.querySelector('#sound-up').play();
}

function openModalTools() {
  document.querySelector('#tools-modal').style.display = 'flex';
  document.querySelector('#tools-modal').classList.add('fadein');
}

function closeModalTools() {
  document.querySelector('#tools-modal').style.display = 'none';
  document.querySelector('#tools-modal').classList.remove('fadein');
}

function changeProfile({ avatar_url, name, bio }) {
  document.querySelector('#profile-img').setAttribute('src', avatar_url);
  document.querySelector('#profile-img').setAttribute('title', name);
  document.querySelector('#profile-img').classList.add('fadein');
  document.querySelector('#profile-name').innerHTML = `I'm ${name}`;
  document.querySelector('#profile-bio').innerHTML = bio;
}

function changeProfileError() {
  document.querySelector('#profile-img').classList.add('fadein');
  document.querySelector('#profile-title').innerHTML =
    'Opss... we had a problem! Please refresh page.';
}

function changePhotoState(fixed) {
  if (fixed) {
    document
      .querySelector('#profile-img')
      .classList.add('intro__photo__img--fixed');
  } else {
    document
      .querySelector('#profile-img')
      .classList.remove('intro__photo__img--fixed');
  }
}

function changeResume(text) {
  document.querySelector('#about-resume').innerHTML = text;
}

function changeLinks(links) {
  fillElement('#contact-list', links, (element, link) => {
    element.querySelector(
      '#contact-list-icon'
    ).className = `contact__icon fa fa-${link.icon}`;
    element
      .querySelector('#contact-list-link')
      .setAttribute('title', link.icon);
    element.querySelector('#contact-list-link').setAttribute('href', link.href);
  });
}

function changeInterests(interests) {
  fillElement('#about-list', interests, (element, int) => {
    element.querySelector('#about-list-link').setAttribute('href', int.href);
    element.querySelector('#about-list-item').setAttribute('src', int.img);
    element.querySelector('#about-list-item').setAttribute('title', int.title);
  });
}

function changeProjects(projects) {
  fillElement('#projects-list', projects, (element, proj) => {
    element
      .querySelector('#projects-repo-link')
      .setAttribute('href', proj.html_url);
    element.querySelector('#projects-repo-title').innerHTML = proj.name;
    element.querySelector('#projects-repo-description').innerHTML =
      proj.description;
    element.querySelector('#projects-repo-lang').innerHTML = proj.language;
    element.querySelector('#projects-repo-stars').innerHTML =
      proj.stargazers_count;
    element.querySelector('#projects-repo-langcolor').style.backgroundColor =
      languageColor(proj.language);
  });
}

function changeTools(links) {
  fillElement('#tools-modal-list', links, (element, link) => {
    element
      .querySelector('#tools-modal-list-link')
      .setAttribute('title', link.label);
    element.querySelector('#tools-modal-list-text').innerHTML = link.label;
    element
      .querySelector('#tools-modal-list-link')
      .setAttribute('href', link.href);
  });
}

/* ### Run ### */
async function main() {
  initTheme();
  initDOM();
  goTop(); // reset view
  // init finish after profile request data
  await getProfile(changeProfile, changeProfileError);
  getLinks(changeLinks);
  getResume(changeResume);
  getInterests(changeInterests);
  getProjects(changeProjects);
  getTools(changeTools);
  setScrollKeybind();
}

window.onload = main;
