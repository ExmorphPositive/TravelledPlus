const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Boldonse&display=swap';
fontLink.rel = 'stylesheet';

const fontStyle = document.createElement('style');
fontStyle.innerHTML = `
  .boldonse-regular {
    font-family: "Boldonse", system-ui;
    font-weight: 400;
    font-style: normal;
  }
`;

document.head.appendChild(fontLink);
document.head.appendChild(fontStyle);
