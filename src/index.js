/* ### Global ### */
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

function arrFromTable(data) {
  const remap = data.split(/\r\n/g).map(t => t.split(' | '));
  const [header, separator, ...rows] = remap;
  return { header, rows };
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
    None: '#fff'
  };
  return language ? (colors[language] || colors.Default) : colors.None;
}


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
  const data = await get('api.github.com/users/jsi1v4/repos?per_page=6&sort=pushed');
  if (data) {
    onSuccess(JSON.parse(data));
  }
}

async function getResume(onSuccess) {
  const data = await get('raw.githubusercontent.com/jsi1v4/jsi1v4/master/topics/resume.md');
  if (data) onSuccess(data);
}

async function getLinks(onSuccess) {
  const data = await get('raw.githubusercontent.com/jsi1v4/jsi1v4/master/topics/links.md');
  if (data) {
    const { header, rows } = arrFromTable(data);
    const links = [];
    for (let i = 0; i < header.length; i++) {
      const metadata = rows[0][i].match(/[\[\(](.*?)[\]\)]/g);
      if (metadata) {
        const title = header[i];
        const text = metadata[0].replace(/[\[\]]/g, '');
        const href = metadata[1].replace(/[\(\)]/g, '');
        links.push({ title, text, href });
      }
    }
    onSuccess(links);
  }
}

async function getInterests(onSuccess) {
  const data = await get('raw.githubusercontent.com/jsi1v4/jsi1v4/master/topics/interests.md');
  if (data) {
    const { header, rows } = arrFromTable(data);
    const links = [];
    for (let i = 0; i < header.length; i++) {
      const metadata = rows[0][i].match(/[\(](.*?)[\)]/g);
      if (metadata) {
        const title = header[i];
        const img = metadata[0].replace(/[\(\)]/g, '');
        const href = metadata[1].replace(/[\(\)]/g, '');
        links.push({ title, img, href });
      }
    }
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

  document.onwheel = (e) => {
    if (e.deltaY < 0) { // to up
      goUp();
    } else { // to down
      goDown();
    }
  }

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
  }
}


/* ### DOM changes ### */
function initDOM() {
  document.querySelector('#profile-img').onclick = () => {
    goTop();
    playUp();
  }
  document.querySelector('#theme-toggle').onclick = () => {
    toggleTheme();
    playToggle();
  }
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
  document.querySelector('#theme-toggle-icon').className = `nav__btn__icon fa fa-moon-o`;
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

function changeProfile({ avatar_url, name }) {
  document.querySelector('#profile-img').setAttribute('src', avatar_url);
  document.querySelector('#profile-img').setAttribute('title', name);
  document.querySelector('#profile-img').classList.add('fadein');
  document.querySelector('#profile-caption').innerHTML = `I'm ${name}`;
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
  const list = document.querySelector('#contact-list');
  const item = list.firstElementChild;
  links.forEach(t => {
    const newItem = item.cloneNode(true);
    newItem.querySelector('#contact-list-link').setAttribute('href', t.href);
    newItem.querySelector('#contact-list-icon').className = `contact__icon fa fa-${t.title}`;
    newItem.querySelector('#contact-list-text').innerHTML = t.text;
    list.appendChild(newItem);
  });
  item.remove();
}

function changeInterests(interests) {
  const list = document.querySelector('#about-list');
  const item = list.firstElementChild;
  interests.forEach(t => {
    const newItem = item.cloneNode(true);
    newItem.querySelector('#about-list-link').setAttribute('href', t.href);
    newItem.querySelector('#about-list-title').innerHTML = t.title;
    newItem.querySelector('#about-list-img').setAttribute('src', t.img);
    newItem.querySelector('#about-list-img').setAttribute('title', t.title);
    list.appendChild(newItem);
  });
  item.remove();
}

function changeProjects(projects) {
  const list = document.querySelector('#projects-list');
  const item = list.firstElementChild;
  projects.forEach(t => {
    const newItem = item.cloneNode(true);
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
async function main() {
  initTheme();
  initDOM();
  goTop(); // reset view
  // init finish after profile request data
  await getProfile(changeProfile, changeProfileError);
  getResume(changeResume);
  getInterests(changeInterests);
  getLinks(changeLinks);
  getProjects(changeProjects);
  setScrollKeybind();
}

window.onload = main;
