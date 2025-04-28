import Item from './item.mjs';

export default class Scroll extends Item {
  #skill;

  constructor(name, skill) {
    super(name);
    this.#checkSkill(skill);
    this.#skill = skill;
  }

  get skill() {
    return this.#skill;
  }

  set skill(value) {
    this.#checkSkill(value);
    this.#skill = value;
  }

  look() {
    super.look();
    console.log(`skill: ${this.skill}`);
  }

  use() {
    console.log(`i use a ${this.name} scroll enchanted with '${this.skill}' skill.`);
  }

  #checkSkill(skill) {
    if (typeof skill !== 'string') {
      throw new Error(`[error] potion.mjs : effect must be string!`);
    }
  }

}