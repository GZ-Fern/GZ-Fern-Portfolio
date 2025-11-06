export class FontManager {
  constructor() {
    this.fonts = [
      'font-display',
      'font-serif',
      'font-handwriting',
      'font-mono',
      'font-sans',
    ];
  }

  getFonts() {
    return this.fonts;
  }

  getRandomFont() {
    return this.fonts[Math.floor(Math.random() * this.fonts.length)];
  }

  getRandomFontIndex() {
    return Math.floor(Math.random() * this.fonts.length);
  }

  getFontCount() {
    return this.fonts.length;
  }

  getFontByIndex(index) {
    return this.fonts[index];
  }
}

export class AnimationController {
  constructor(interval = 1500) {
    this.interval = interval;
    this.timerId = null;
  }

  start(callback) {
    this.stop();
    this.timerId = setInterval(callback, this.interval);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  setInterval(interval) {
    this.interval = interval;
  }
}

export class NameAnimator {
  constructor(name, fontManager) {
    this.name = name;
    this.fontManager = fontManager;
    this.letterFonts = this.initializeLetterFonts();
  }

  initializeLetterFonts() {
    return this.name.split('').map(() => this.fontManager.getRandomFontIndex());
  }

  getLetterFonts() {
    return this.letterFonts;
  }

  changeRandomLetter() {
    const randomIndex = Math.floor(Math.random() * this.name.length);
    this.letterFonts[randomIndex] = this.fontManager.getRandomFontIndex();
    return [...this.letterFonts];
  }
}
