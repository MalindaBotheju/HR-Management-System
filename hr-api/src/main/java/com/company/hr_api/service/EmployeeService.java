package com.company.hr_api.service;

import com.company.hr_api.entity.Employee;
import com.company.hr_api.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    // NEW: Update an existing employee
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee existingEmployee = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

        existingEmployee.setFirstName(employeeDetails.getFirstName());
        existingEmployee.setLastName(employeeDetails.getLastName());
        existingEmployee.setEmail(employeeDetails.getEmail());
        existingEmployee.setJobTitle(employeeDetails.getJobTitle());
        existingEmployee.setDepartment(employeeDetails.getDepartment());

        return repository.save(existingEmployee);
    }

    // NEW: Delete an employee
    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}