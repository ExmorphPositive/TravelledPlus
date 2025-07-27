let isDarkMode = false;  // track state

function toggleH2AndPColor() {
    const style = document.createElement('style');
    style.textContent = `
      main {
        background-color: ${isDarkMode ? '#ffffffff' : '#000000ff'} !important;
        transition: background-color 0.5s;
      }

      main h1 {
        color: ${isDarkMode ? '#2e2e2e' : '#cccccc'} !important;
        transition: color 0.5s;
      }

      main h2 {
        color: ${isDarkMode ? '#2e2e2e' : '#cccccc'} !important;
        transition: color 0.5s;
      }

      main h3 {
        color: ${isDarkMode ? '#2e2e2e' : '#cccccc'} !important;
        transition: color 0.5s;
      }

      main p {
        color: ${isDarkMode ? '#2e2e2e' : '#747474'} !important;
        transition: color 0.5s;
      }

      #darkModeButton p {
        color: ${isDarkMode ? '#747474' : '#2e2e2e'} !important;
        transition: color 0.5s;
      }

      #toc-section {
        background-color: ${isDarkMode ? '#f0f0f0' : '#181818'} !important;
        transition: background-color 0.5s;
      }

      #toc-section a {
        color: ${isDarkMode ? '#2e2e2e' : '#747474'} !important;
        transition: color 0.5s;
      }

      .list-main-heading li {
        background-image: url('${isDarkMode
            ? 'https://raw.githubusercontent.com/ExmorphPositive/CenterAssets-Pu/refs/heads/main/Images/BulletPoints/loading.png'
            : 'https://raw.githubusercontent.com/ExmorphPositive/CenterAssets-Pu/refs/heads/main/Images/BulletPoints/loading-inv.png'}') !important;
      }

      #key-takeaways-section li {
        color: ${isDarkMode ? '#2e2e2e' : '#747474'} !important;
        background-image: url('${isDarkMode
            ? 'https://raw.githubusercontent.com/ExmorphPositive/CenterAssets-Pu/refs/heads/main/Images/BulletPoints/pointing-finger.png'
            : 'https://raw.githubusercontent.com/ExmorphPositive/CenterAssets-Pu/refs/heads/main/Images/BulletPoints/pointing-finger-inv.png'}') !important;
        background-repeat: no-repeat !important;
        background-position: left top !important;
        background-size: 20px !important;
        padding-left: 25px !important;
        list-style-type: none !important;
        margin-bottom: 10px !important;
        transition: color 0.5s, background-image 0.5s;
      }

      #summary-section {
        background-color: ${isDarkMode ? '#f0f0f0' : '#181818'} !important;
        transition: background-color 0.5s;
      }

      .Extra001 {
        background-color: ${isDarkMode ? '#f0f0f0' : '#181818'} !important;
        color: ${isDarkMode ? '#2e2e2e' : '#6d8bf5'} !important;
        transition: color 0.5s, background-color 0.5s;
      }

      .Extra001 b {
        color: ${isDarkMode ? '#2e2e2e' : '#ffffff'} !important;
        transition: color 0.5s;
      }

      .faq-question,
      .faq-answer {
        color: ${isDarkMode ? '#2e2e2e' : '#747474'} !important;
        transition: color 0.5s;
      }

      .related-res-card {
        background-color: ${isDarkMode ? '#e6e6e6' : '#181818'} !important;
        transition: color 0.5s;
      }

      .related-res-link {
        color: ${isDarkMode ? '#2e2e2e' : '#747474'} !important;
        transition: color 0.5s;
      }
    `;

    // Remove old injected style if any
    const existing = document.getElementById('toggleColorStyle');
    if (existing) {
        existing.remove();
    }

    // Add new style
    style.id = 'toggleColorStyle';
    document.head.appendChild(style);

    // Flip state
    isDarkMode = !isDarkMode;

    // Update button text and class
    const button = document.getElementById('darkModeButton');
    const text = button.querySelector('p');
    if (isDarkMode) {
        text.textContent = 'Light Mode';
        button.classList.add('swapped');
    } else {
        text.textContent = 'Dark Mode';
        button.classList.remove('swapped');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('darkModeButton');
    if (button) {
        button.addEventListener('click', toggleH2AndPColor);
    }
});
