--Scenario1:
BEGIN
  FOR cust_rec IN (SELECT CustomerID, Age, InterestRate FROM Customers) LOOP
    IF cust_rec.Age > 60 THEN
      UPDATE Customers
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = cust_rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Interest rates updated for senior customers.');
END;
/

-- Scenario2:
BEGIN
  FOR cust_rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
    IF cust_rec.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = cust_rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status updated for eligible customers.');
END;
/

-- Scenario3:
BEGIN
  FOR loan_rec IN (
    SELECT LoanID, CustomerID, DueDate 
    FROM Loans 
    WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || loan_rec.LoanID || ' for Customer ' || loan_rec.CustomerID || ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/