export default class Item {
  #name;

  constructor(name) {
    this.#checkName(name);
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#checkName(value);
    this.#name = value;
  }

  look() {
    console.log(`=====================================================`);
    console.log(`name:${this.name}`);
    console.log(`-----------------------------------------------------`);
  }

  use() {
    console.log(`nothing happens!`);
  }

  #checkName(name) {
    if (typeof name !== 'string') {
      throw new Error(`[error] item.mjs : name must be string!`);
    }
  }
}