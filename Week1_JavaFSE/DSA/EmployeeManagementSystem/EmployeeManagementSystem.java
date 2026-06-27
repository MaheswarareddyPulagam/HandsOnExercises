class Employee {

    int employeeId;
    String name;

    Employee(int employeeId, String name) {
        this.employeeId = employeeId;
        this.name = name;
    }
}

public class EmployeeManagementSystem {

    public static void main(String[] args) {

        Employee[] employees = new Employee[3];

        employees[0] = new Employee(1, "John");
        employees[1] = new Employee(2, "Sam");
        employees[2] = new Employee(3, "David");

        for (Employee e : employees) {
            System.out.println(e.employeeId + " " + e.name);
        }
    }
}
