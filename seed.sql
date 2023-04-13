INSERT INTO departments (name) VALUES
  ('Sales'),
  ('Marketing'),
  ('Finance'),
  ('Engineering');

INSERT INTO roles (title, salary, department_id) VALUES
  ('Sales Manager', 80000.00, 1),
  ('Sales Representative', 50000.00, 1),
  ('Marketing Manager', 90000.00, 2),
  ('Marketing Coordinator', 60000.00, 2),
  ('Finance Manager', 100000.00, 3),
  ('Financial Analyst', 75000.00, 3),
  ('Software Engineer', 100000.00, 4),
  ('UI/UX Designer', 90000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL),
  ('Jane', 'Smith', 2, 1),
  ('Bob', 'Johnson', 3, NULL),
  ('Sara', 'Lee', 4, 3),
  ('Mike', 'Jones', 5, NULL),
  ('Karen', 'Lee', 6, 5),
  ('David', 'Nguyen', 7, 4),
  ('Emily', 'Chen', 8, 7);
