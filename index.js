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
                const departmentQuestions = [
                  {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of the department:',
                  },
                ];
                inquirer
                  .prompt(departmentQuestions)
                  .then((answers) => {
                    const { name } = answers;
              
                    pool.query('INSERT INTO departments SET ?', { name }, (err, results) => {
                      if (err) {
                        console.error(err);
                        return;
                      }
              
                      console.log(`Department "${name}" has been added with ID ${results.insertId}`);
                      mainMenu();
                    });
                  });
                break;
            case 'Add a role':
                    const roleQuestions = [
                      {
                        type: 'input',
                        name: 'title',
                        message: 'Enter the title of the role:',
                      },
                      {
                        type: 'input',
                        name: 'salary',
                        message: 'Enter the salary of the role:',
                      },
                      {
                        type: 'input',
                        name: 'department_id',
                        message: 'Enter the department ID of the role:',
                      },
                    ];
                    inquirer
                      .prompt(roleQuestions)
                      .then((answers) => {
                        const { title, salary, department_id } = answers;
                  
                        pool.query(
                          'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
                          [title, salary, department_id],
                          (err, results) => {
                            if (err) {
                              console.error(err);
                              return;
                            }
                  
                            console.log(`Role "${title}" has been added with ID ${results.insertId}`);
                            mainMenu();
                          }
                        );
                      });
                break;  
                case 'Add an employee':
                    const employeeQuestions = [
                      {
                        type: 'input',
                        name: 'first_name',
                        message: 'Enter the first name of the employee:',
                      },
                      {
                        type: 'input',
                        name: 'last_name',
                        message: 'Enter the last name of the employee:',
                      },
                      {
                        type: 'input',
                        name: 'role_id',
                        message: 'Enter the role ID of the employee:',
                      },
                      {
                        type: 'input',
                        name: 'manager_id',
                        message: 'Enter the manager ID of the employee:',
                      },
                    ];
                    inquirer
                      .prompt(employeeQuestions)
                      .then((answers) => {
                        const { first_name, last_name, role_id, manager_id } = answers;
                  
                        pool.query(
                          'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
                          [first_name, last_name, role_id, manager_id],
                          (err, results) => {
                            if (err) {
                              console.error(err);
                              return;
                            }
                  
                            console.log(`Employee "${first_name} ${last_name}" has been added with ID ${results.insertId}`);
                            mainMenu();
                          }
                        );
                      });
                    break;
                  
                    case 'Update an employee role':
                        // Get a list of all employees
                        pool.query('SELECT * FROM employees', (err, results) => {
                          if (err) {
                            console.error(err);
                            return;
                          }
                      
                          // Create an array of choices for the user to select from
                          const employeeChoices = results.map((employee) => ({
                            name: `${employee.first_name} ${employee.last_name}`,
                            value: employee.id,
                          }));
                      
                          // Prompt the user to select an employee to update
                          inquirer
                            .prompt({
                              type: 'list',
                              name: 'employeeId',
                              message: 'Select an employee to update:',
                              choices: employeeChoices,
                            })
                            .then((employeeAnswer) => {
                              // Prompt the user to enter the new role ID for the selected employee
                              inquirer
                                .prompt({
                                  type: 'input',
                                  name: 'newRoleId',
                                  message: 'Enter the new role ID:',
                                })
                                .then((roleAnswer) => {
                                  const { employeeId } = employeeAnswer;
                                  const { newRoleId } = roleAnswer;
                      
                                  // Update the employee's role in the database
                                  pool.query(
                                    'UPDATE employees SET role_id = ? WHERE id = ?',
                                    [newRoleId, employeeId],
                                    (err, results) => {
                                      if (err) {
                                        console.error(err);
                                        return;
                                      }
                      
                                      console.log(`Employee's role has been updated`);
                                      mainMenu();
                                    }
                                  );
                                });
                            });
                        });
                        break;
                      
          case 'Exit':
            console.log('Goodbye!');
            process.exit();
        }
      });
  }
  
  // Start the application by displaying the main menu
  mainMenu();