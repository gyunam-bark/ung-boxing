import Item from './item.mjs';

export default class Potion extends Item {
  #liter;
  #effect;

  constructor(name, liter, effect) {
    super(name);
    this.#checkLiter(liter);
    this.#checkEffect(effect);
    this.#liter = liter;
    this.#effect = effect;
  }

  get liter() {
    return this.#liter;
  }

  set liter(value) {
    this.#checkLiter(value);
    this.#liter = value;
  }

  get effect() {
    return this.#effect;
  }

  set effect(value) {
    this.#checkEffect(value);
    this.#effect = value;
  }

  look() {
    super.look();
    console.log(`liter: ${this.liter}`);
    console.log(`effect: ${this.effect}`);
  }

  use() {
    console.log(`i drank a ${this.liter}L ${this.name} potion and it had a '${this.effect}' effect.`);
  }

  #checkLiter(liter) {
    if (typeof liter !== 'number') {
      throw new Error(`[error] potion.mjs : liter must be number!`);
    }
  }

  #checkEffect(effect) {
    if (typeof effect !== 'string') {
      throw new Error(`[error] potion.mjs : effect must be string!`);
    }
  }

}