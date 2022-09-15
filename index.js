const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const managers = [];
const engineers = [];
const interns = [];

function startApp() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the managers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the managers Office Number?'
            },
        ])
        .then(function (answers) {
            console.log(answers);
            const { name, id, email, officeNumber } = answers;
            managers.push(new Manager(name, id, email, officeNumber));
            appMenu();
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the engineers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the engineers email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineers Github?'
            },
        ])
        .then(function (answers) {
            const { name, id, email, github } = answers;
            engineers.push(new Engineer(name, id, email, github));
            console.log(engineers);
            appMenu();
        });
};

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is the Interns name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'what is the Interns id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'what is the Interns email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'what is the Interns School?'
            },
        ])
        .then(function (answers) {
            console.log(answers);
            const { name, id, email, school } = answers;
            interns.push(new Intern(name, id, email, school));
            console.log(interns);
            appMenu();
        }); 
};

function appMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamoptions',
            message: 'Which type of employee would you like to add?',
            choices: ['Intern', 'Engineer', 'None']
        },
    ]).then((response) => {
        switch (response.teamoptions) {
            case 'Intern':
                createIntern();
                break;
            case 'Engineer':
                createEngineer();
                break;
            default:
                fs.writeFileSync('./dist/team.html', generateHTML({ managers, engineers, interns }));
                console.log('+++++++');
                console.log({managers, engineers, interns} )
                return;
        }
    }); 
}

startApp(); 