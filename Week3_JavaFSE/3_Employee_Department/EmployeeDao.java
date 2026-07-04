package com.cognizant.springlearn.dao;

import java.util.ArrayList;

public class EmployeeDao {

    private static ArrayList<Employee>
    EMPLOYEE_LIST;

    public ArrayList<Employee>
    getAllEmployees() {

        return EMPLOYEE_LIST;
    }
}