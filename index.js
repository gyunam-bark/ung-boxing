import Game from './game.mjs';

async function main() {
  const game = new Game();
  await game.run();
}

main();