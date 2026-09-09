#!/usr/bin/env node
'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const open = require('open');


const email = 'riyasinghrathore.work@gmail.com';
const website = 'https://riyasinghrathore.github.io';
const github = 'https://github.com/RiyaSinghRathore';
const linkedin = 'https://www.linkedin.com/in/riya-singh-rathore'; 
const stackexchange = 'https://stackexchange.com/users/1729'; 

// clear the screen for a clean entrance
process.stdout.write('\x1Bc');

const card = boxen(
  [
    chalk.bold.hex('#7ee787')('Riya Singh Rathore'),
    '',
    `${chalk.gray('Work:')}      Software Engineer`,
    `${chalk.gray('Web:')}       ${chalk.cyan(website)}`,
    `${chalk.gray('GitHub:')}    ${chalk.cyan(github)}`,
    `${chalk.gray('LinkedIn:')}  ${chalk.cyan(linkedin)}`,
    `${chalk.gray('Email:')}     ${chalk.cyan(email)}`,
    '',
    chalk.gray("I live in the terminal, so let's connect from here too."),
    chalk.gray('Tip: cmd/ctrl-click a link to open it directly.'),
  ].join('\n'),
  {
    margin: 1,
    padding: 1,
    borderStyle: 'round',
    borderColor: 'green',
    title: 'npx riyasinghrathore',
    titleAlignment: 'center',
  }
);

console.log(card);

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      { name: `Send me an ${chalk.green('email')}`, value: 'email' },
      { name: `View my ${chalk.green('GitHub')}`, value: 'github' },
      { name: `Connect on ${chalk.green('LinkedIn')}`, value: 'linkedin' },
      { name: `Visit my ${chalk.green('website')}`, value: 'website' },
      { name: `Browse my ${chalk.green('Stack Exchange')}`, value: 'stackexchange' },
      { name: 'Just exit', value: 'exit' },
    ],
  },
];

inquirer.prompt(questions).then((answer) => {
  switch (answer.action) {
    case 'email':
      open(`mailto:${email}`);
      console.log(`\n${chalk.green('done')} opening your mail client. Say hi!\n`);
      break;
    case 'github':
      open(github);
      console.log(`\n${chalk.green('done')} opening GitHub in your browser.\n`);
      break;
    case 'linkedin':
      open(linkedin);
      console.log(`\n${chalk.green('done')} opening LinkedIn in your browser.\n`);
      break;
    case 'website':
      open(website);
      console.log(`\n${chalk.green('done')} opening my website in your browser.\n`);
      break;
    case 'stackexchange':
      open(stackexchange);
      console.log(`\n${chalk.green('done')} opening Stack Exchange in your browser.\n`);
      break;
    default:
      console.log(chalk.green('\nThanks for stopping by!\n'));
  }
});
