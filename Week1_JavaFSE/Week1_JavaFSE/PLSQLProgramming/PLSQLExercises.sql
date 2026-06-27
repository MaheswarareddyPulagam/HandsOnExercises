
# Exercise 1: Control Structures

## Scenario 1: Discount for Senior Customers

BEGIN
    FOR cust IN (
        SELECT CustomerID, DOB
        FROM Customers
    )
    LOOP
        IF FLOOR(MONTHS_BETWEEN(SYSDATE, cust.DOB) / 12) > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

        END IF;
    END LOOP;

    COMMIT;
END;
/

## Scenario 2: VIP Customers

ALTER TABLE Customers
ADD IsVIP VARCHAR2(5);

BEGIN
    FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

        END IF;
    END LOOP;

    COMMIT;
END;
/

## Scenario 3: Loan Reminder

BEGIN
    FOR loan_rec IN (
        SELECT CustomerID, EndDate
        FROM Loans
        WHERE EndDate <= SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan due for Customer ID '
            || loan_rec.CustomerID
        );
    END LOOP;
END;
/

# Exercise 2: Error Handling

CREATE OR REPLACE PROCEDURE SafeTransferFunds(
    from_acc NUMBER,
    to_acc NUMBER,
    amount NUMBER
)
IS
    balance_amount NUMBER;
BEGIN

    SELECT Balance
    INTO balance_amount
    FROM Accounts
    WHERE AccountID = from_acc;

    IF balance_amount < amount THEN
        RAISE_APPLICATION_ERROR(
            -20001,
            'Insufficient Funds'
        );
    END IF;

    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = from_acc;

    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = to_acc;

    COMMIT;

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;

        DBMS_OUTPUT.PUT_LINE(
            'Error: ' || SQLERRM
        );
END;
/

# Exercise 3: Stored Procedures

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

# Exercise 4: Functions

CREATE OR REPLACE FUNCTION CalculateAge(
    dob DATE
)
RETURN NUMBER
IS
    age NUMBER;
BEGIN

    age := FLOOR(
        MONTHS_BETWEEN(SYSDATE, dob) / 12
    );

    RETURN age;
END;
/

# Exercise 5: Triggers

CREATE OR REPLACE TRIGGER
UpdateCustomerLastModified
BEFORE UPDATE ON Customers
FOR EACH ROW
BEGIN
    :NEW.LastModified := SYSDATE;
END;
/

# Exercise 6: Cursors

DECLARE

    CURSOR trans_cursor IS
        SELECT *
        FROM Transactions
        WHERE EXTRACT(MONTH FROM TransactionDate)
            = EXTRACT(MONTH FROM SYSDATE);

BEGIN

    FOR trans_rec IN trans_cursor
    LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Transaction ID: '
            || trans_rec.TransactionID
        );

    END LOOP;
END;
/

# Exercise 7: Packages

CREATE OR REPLACE PACKAGE CustomerManagement AS

    PROCEDURE AddCustomer(
        cid NUMBER,
        cname VARCHAR2
    );

    FUNCTION GetBalance(
        cid NUMBER
    ) RETURN NUMBER;

END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

    PROCEDURE AddCustomer(
        cid NUMBER,
        cname VARCHAR2
    )
    IS
    BEGIN

        INSERT INTO Customers(
            CustomerID,
            Name
        )
        VALUES(
            cid,
            cname
        );

    END;

    FUNCTION GetBalance(
        cid NUMBER
    )
    RETURN NUMBER
    IS
        bal NUMBER;
    BEGIN

        SELECT Balance
        INTO bal
        FROM Customers
        WHERE CustomerID = cid;

        RETURN bal;
    END;

END CustomerManagement;
/
