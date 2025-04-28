import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import Potion from './items/potion.mjs';
import Scroll from './items/scroll.mjs';

const TYPE_POTION = 0;
const TYPE_SCROLL = 1;

const typeList = [TYPE_POTION, TYPE_SCROLL];

const COMMAND_OPEN = 'open';
const COMMAND_USE = 'use';
const COMMAND_QUIT = 'quit';

const potionData = {
  names: ['cat', 'dog', 'bear'],
  liter: 10,
  effects: ['health restoration', 'mana regeneration', 'strength boost']
};

const scrollData = {
  names: ['rose', 'sunflower', 'rotus'],
  skills: ['torch', 'ice spike', 'lightning strike']
};

export default class Game {
  #item;
  #readlineInterface;

  constructor() {
    this.#item = null;
    this.#readlineInterface = readline.createInterface({ input, output });
  }

  #getRandomData(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  #getRandomItem() {
    const type = this.#getRandomData(typeList);

    switch (type) {
      case TYPE_POTION:
        {
          const name = this.#getRandomData(potionData.names);
          const liter = parseFloat((Math.random() * potionData.liter).toFixed(1));
          const effect = this.#getRandomData(potionData.effects);
          return new Potion(name, liter, effect);
        }
      case TYPE_SCROLL:
        {
          const name = this.#getRandomData(scrollData.names);
          const skill = this.#getRandomData(scrollData.skills);
          return new Scroll(name, skill);
        }
    }
  }

  async run() {
    for (; true;) {
      const command = await this.#readlineInterface.question('>');

      switch (command) {
        case COMMAND_OPEN:
          {
            this.#item = this.#getRandomItem();
            this.#item.look();
            console.log(`-----------------------------------------------------`);
            console.log(``);
            break;
          }
        case COMMAND_USE:
          {
            if (this.#item !== null) {
              this.#item.use();
              this.#item = null;
              console.log(``);
            } else {
              console.log(`no item to use. please open new box.`);
              console.log(``);
            }
            break;
          }
        case COMMAND_QUIT:
          {
            this.#readlineInterface.close();
            return;
          }

        default:
          {
            console.log(`unkonown command. use 'open', 'use', 'quit'.`);
          }
      }
    }
  }
}