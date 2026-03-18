import { logger } from './node';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  logger.success('This is a success message');
  logger.warning('This is a warning message');
  logger.error('This is an error message');
  logger.info('This is an info message');

  let step = logger.start('This is first step message...');
  await sleep(1000);
  step.error('This is an error message');
  step = logger.start('This is second step message...');
  await sleep(1000);
  step.update('This is update message, retrying...');
  await sleep(1000);
  step.success('This is a success message');
}

main();
