-- Scenario1:
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (SELECT AccountID, Balance 
              FROM Accounts 
              WHERE AccountType = 'SAVINGS') LOOP
    UPDATE Accounts
    SET Balance = Balance + (acc.Balance * 0.01)
    WHERE AccountID = acc.AccountID;
  END LOOP;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/

-- Scenario2:
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  dept_id IN NUMBER,
  bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * bonus_percent / 100)
  WHERE DepartmentID = dept_id;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Bonuses applied to employees in Department ' || dept_id);
END;
/

-- Scenario3:
CREATE OR REPLACE PROCEDURE TransferFunds (
  from_acc IN NUMBER,
  to_acc IN NUMBER,
  amount IN NUMBER
) IS
  from_balance NUMBER;
BEGIN
  SELECT Balance INTO from_balance
  FROM Accounts
  WHERE AccountID = from_acc
  FOR UPDATE;
  IF from_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;
  UPDATE Accounts
  SET Balance = Balance - amount
  WHERE AccountID = from_acc;
  UPDATE Accounts
  SET Balance = Balance + amount
  WHERE AccountID = to_acc;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Transferred ' || amount || ' from Account ' || from_acc || ' to Account ' || to_acc);
END;
/