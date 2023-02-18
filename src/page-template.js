// create team function with team array passed in
const create_team_function = team => {

    // create the manager html function with manager object passed in as input parameter
    // - return template literal replacing name, role, id, email, office number with getXXX methods from manager object
    const create_manager_html_function = manager => {
        return `
            <div class="card col-4">
                <div class="card-header">
                    <h1 class="card-title text-center">${manager.getRole()}</h1>
                    <h2 class="text-center">${manager.getName()}</h2>
                </div>
                <div class="card-body">
                    <p class="text-center">Employee ID: ${manager.getID()}</p>
                    <p class="text-center">Office Number: ${manager.getOfficeNumber()}</p>
                    <a href="mailto:${manager.getEmail()}">
                        <p class="text-center">
                            Email: ${manager.getEmail()}
                        </p>
                    </a>
                </div>
            </div>
        `;
    };

    // create the html function for engineers with engineer object passed in as input parameter
    // - return template literal replacing name, role, id, email, github name with getXXX methods from engineer object
    const create_engineer_html_function = engineer => {
        return `
            <div class="card col-4">
                <div class="card-header">
                    <h1 class="card-title text-center">${engineer.getRole()}</h1>
                    <h2 class="text-center">${engineer.getName()}</h2>
                </div>
                <div class="card-body">
                    <p class="text-center">Employee ID: ${engineer.getID()}</p>
                    <a href="https://github.com/${engineer.getGithub()}">
                    <p class="text-center">
                        GitHub Link: ${engineer.getGithub()}
                    </p>
                    </a>
                    <a href="mailto:${engineer.getEmail()}">
                        <p class="text-center">
                            Email: ${engineer.getEmail()}
                        </p>
                    </a>
                </div>
            </div>
        `;
    };

    // create the html function for interns with intern object passed in as input parameter
    // - return template literal replacing name, role, id, email, school name with getXXX methods from intern object
    const create_intern_html_function = intern => {
        return `
            <div class="card col-4">
                <div class="card-header">
                    <h1 class="card-title text-center">${intern.getRole()}</h1>
                    <h2 class="text-center">${intern.getName()}</h2>
                </div>
                <div class="card-body">
                    <p class="text-center">Employee ID: ${intern.getID()}</p>
                    <p class="text-center">School: ${intern.getSchool()}</p>
                    <a href="mailto:${intern.getEmail()}">
                        <p class="text-center">
                            Email: ${intern.getEmail()}
                        </p>
                    </a>
                </div>
            </div>
        `;
    };

    // create an empty employee html array to store employee html for manager, engineers, interns
    const html = [];

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Manager" via the employee's get role method and assign the new manager array returned from filter method to a new variable
    const newManagerArray = team.filter(employee => employee.getRole() === "Manager");

    // make call to map method on the new manager array to call create manager html function and assign the new manager html array returned from map method to a new variable
    const newManagerHtmlArray = newManagerArray.map(create_manager_html_function);

    // make call to join method on the new manager html array to convert it to html string and assign it to a new variable
    const newManagerHtmlString = newManagerHtmlArray.join("");

    // push the new manager html string to the employee html array
    // html.push(newManagerHtmlString);

    // option - you can use chained array methods to avoid create new variables

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Engineer" via the employee's get role method and assign the new engineer array returned from filter method to a new variable
    const newEngineerArray = team.filter(employee => employee.getRole() === "Engineer");

    // make call to map method on the new engineer array to call create engineer html function and assign the new engineer html array returned from map method to a new variable
    const newEngineerHtmlArray = newEngineerArray.map(create_engineer_html_function);

    // make call to join method on the new engineer html array to convert it to html string and assign it to a new variable
    const newEngineerHtmlString = newEngineerHtmlArray.join("");

    // push the new engineer html string to the employee html array

    // html.push(newEngineerHtmlString);
    // option - you can use chained array methods to avoid create new variables
    html.push(
    );

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Intern" via the employee's get role method and assign the new intern array returned from filter method to a new variable
    const newInternArray = team.filter(employee => employee.getRole() === "Intern");

    // make call to map method on the new intern array to call create intern html function and assign the new intern html array returned from map method to a new variable
    const newInternHtmlArray = newInternArray.map(create_intern_html_function);

    // make call to join method on the new intern html array to convert it to html string and assign it to a new variable
    const newInternHtmlString = newInternHtmlArray.join("");

    // push the new intern html string to the employee html array
    // html.push(newInternHtmlString);

    // option - you can use chained array methods to avoid create new variables
    html.push(
        newManagerHtmlString,
        newEngineerHtmlString,
        newInternHtmlString
    );

    // call join method on employee html array to convert it to html string and return it to the caller
    return html.join("");

}

// export function to generate entire page with team array passed in as input parameter from index.js
// - return template literal for entire html replacing team member html with returned value from create-team-function via template literal varaible expression
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href='../dist/style.css'>

</head>

<body>
    <header>
        <br>
        <h1 class="text-center" id="page-title">Team</h1>
        <br>
    </header>

    <div class="container-fluid" id="render">
        <div class = "row d-flex justify-content-around">
           ${create_team_function(team)}
        </div>
    <div>
    

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

</html>
    `;
};