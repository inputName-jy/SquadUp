// 1.
// import manager, engineer, intern files with require()
// import inquirer with require()
// import path with require()
// import fs with require()

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// 2.
// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html

const renderHtml = require('./src/page-template');

// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
const distFolder = path.resolve(__dirname, 'dist');

// create variable to hold the path to team.html using path lib join method
const teamHtmlPath = path.join(distFolder, 'team.html');

// 4.
// create an empty employee memeber array variable to store the employee members, manager, engineers, and interns
const employees = [];

// create an empty employee id array to store the employee ids
const employeeIds = [];

// 5.
// print user of usage
console.log(`
=====================================================
===             Build your team here!             ===
=== 'npm run reset' to restart and build new team ===
=====================================================
`);

// 6.
// make call to create manager function to start the main process
createManager();

// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function
function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the manager name: ',
            validate: nameData => {
                if(nameData){
                    return true;
                }else{
                    return `Please enter the manager's name!`;

                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the manager id: ',
            validate: idData => {
                if(typeof parseInt(idData) === 'number' && idData > 0 && !employeeIds.includes(idData)){
                    return true;
                }else{
                    return 'Please enter a valid id number!'
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the manager email: ',
            validate: emailData => {
                if(emailData){
                    return true;
                }else{
                    return `Please enter the manager's email address!`
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the manager office number: ',
            validate: officeNumberData => {
                if(typeof parseInt(officeNumberData) === 'number' && officeNumberData > 0){
                    return true;
                }else{
                    return 'Please enter a valid office number!';

                }
            }
        }
    ])
    .then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        employeeIds.push(id);
        createTeam();
    });
}


// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'EmployeeType',
            message: 'Choose the type of employee to add to the team: ',
            choices: ['Engineer', 'Intern', 'End team building']
        }
    ])
    .then(choice => {
        const {EmployeeType} = choice;
        if(EmployeeType === 'Engineer'){
            addEngineer();
        }else if(EmployeeType === 'Intern'){
            addIntern();
        }else{
            buildTeam();
        }
    });

}

// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer name: ',
            validate: nameData => {
                if(nameData){
                    return true;
                }else{
                    return `Please enter the engineer's name!`
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer id: ',
            validate: idData => {
                if(typeof parseInt(idData) === 'number' && idData > 0 && !employeeIds.includes(idData)){
                    return true;
                }else{
                    return 'Please enter a valid id number!'
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer email: ',
            validate: emailData => {
                if(emailData){
                    return true;
                }else{
                    return `Please enter the engineer's email address!`
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `Enter the engineer's github username: `,
            validate: githubData => {
                if(githubData){
                    return true;
                }else{
                    return `Please enter the engineer's github username!`
                }
            }
        }
    ])
    .then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        employeeIds.push(id);
        createTeam();
    });

}

// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern name: ',
            validate: nameData => {
                if(nameData){
                    return true;
                }else{
                    return `Please enter the intern's name!`
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern id: ',
            validate: idData => {
                if(typeof parseInt(idData) === 'number' && idData > 0 && !employeeIds.includes(idData)){
                    return true;
                }else{
                    return 'Please enter a valid id number!'
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern email: ',
            validate: emailData => {
                if(emailData){
                    return true;
                }else{
                    return `Please enter the intern's email address!`
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `Enter the intern's school: `,
            validate: schoolData => {
                if(schoolData){
                    return true;
                }else{
                    return `Please enter the intern's school!`
                }
            }
        }
    ])
    .then(({name, id, email, school}) => {
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        employeeIds.push(id);
        createTeam();
    });
}


// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable
function buildTeam() {
    fs.access(distFolder, err => {
        if (err) {
            fs.mkdir(distFolder, err => {
                if (err) {
                    console.log(err);
                }else{
                    fs.writeFile(teamHtmlPath, renderHtml(employees), err => {
                        if (err) {
                            console.log(err);
                        }else{
                            console.log('Team profile created successfully!');
                        }
                    });
                }
            });
        } else {
            fs.writeFile(teamHtmlPath, renderHtml(employees), err => {
                if (err) {
                    console.log(err);
                }else{
                    console.log('Team profile created successfully!');
                }
            });
        }
    });
};

