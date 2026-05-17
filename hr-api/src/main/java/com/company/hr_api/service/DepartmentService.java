package com.company.hr_api.service;

import com.company.hr_api.entity.Department;
import com.company.hr_api.repository.DepartmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DepartmentService {

    private final DepartmentRepository repository;

    public DepartmentService(DepartmentRepository repository) {
        this.repository = repository;
    }

    public Department saveDepartment(Department department) {
        return repository.save(department);
    }

    public List<Department> getAllDepartments() {
        return repository.findAll();
    }

    // NEW: Update an existing department
    public Department updateDepartment(Long id, Department departmentDetails) {
        Department existingDepartment = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Department not found with id: " + id));

        existingDepartment.setName(departmentDetails.getName());
        existingDepartment.setDescription(departmentDetails.getDescription());

        return repository.save(existingDepartment);
    }

    // NEW: Delete a department
    public void deleteDepartment(Long id) {
        repository.deleteById(id);
    }
}