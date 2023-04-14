const mysql = require('mysql2');
const inquirer = require('inquirer');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Baxter123!',
  database: 'humanresources_db'
});

function mainMenu() {
    inquirer
      .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View all departments':
            pool.query('SELECT * FROM departments', (err, results) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.table(results);
                mainMenu();
              });
            break;
          case 'View all roles':
            pool.query('SELECT * FROM roles', (err, results) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.table(results);
                mainMenu();
              });
            break;
          case 'View all employees':
            pool.query('SELECT * FROM employees', (err, results) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.table(results);
                mainMenu();
              });
            break;
          case 'Add a department':
            // TODO: Handle add a department option
            break;
          case 'Add a role':
            // TODO: Handle add a role option
            break;
          case 'Add an employee':
            // TODO: Handle add an employee option
            break;
          case 'Update an employee role':
            // TODO: Handle update an employee role option
            break;
          case 'Exit':
            console.log('Goodbye!');
            process.exit();
        }
      });
  }
  
  // Start the application by displaying the main menu
  mainMenu();