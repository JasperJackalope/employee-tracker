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
  ('Ronald', 'Miller', 1, NULL),
  ('Josie', 'McCoy', 2, 1),
  ('Cindy', 'Mancini', 3, NULL),
  ('Melody', 'Valentine', 4, 3),
  ('Geri', 'Halliwell', 5, NULL),
  ('Katie', 'Cipriano', 6, 5),
  ('Valerie', 'Brown', 7, 4),
  ('Jason', 'Voorhees', 8, 7);
