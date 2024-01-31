import createHTMLElement from '../utils/createHTMLElement';

export default class ThemeSwitch {
  constructor(parent) {
    this.createView(parent);
  }

  createView(parent) {
    // чекбокс
    this.switchElem = createHTMLElement('label', 'switch', parent);
    this.inputTheme = createHTMLElement('input', 'input-theme', this.switchElem);
    this.inputTheme.type = 'checkbox';
    this.slider = createHTMLElement('span', 'slider', this.switchElem);

    this.inputTheme.addEventListener('change', () => {
      // console.log('change');
      document.body.classList.toggle('dark-theme');
    });
  }
}
