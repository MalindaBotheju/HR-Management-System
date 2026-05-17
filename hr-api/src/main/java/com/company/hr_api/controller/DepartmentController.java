package com.company.hr_api.controller;

import com.company.hr_api.entity.Department;
import com.company.hr_api.service.DepartmentService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentService service;

    public DepartmentController(DepartmentService service) {
        this.service = service;
    }

    @PostMapping
    public Department createDepartment(@RequestBody Department department) {
        return service.saveDepartment(department);
    }

    @GetMapping
    public List<Department> getAllDepartments() {
        return service.getAllDepartments();
    }

    // NEW: PUT request to update
    @PutMapping("/{id}")
    public Department updateDepartment(@PathVariable Long id, @RequestBody Department department) {
        return service.updateDepartment(id, department);
    }

    // NEW: DELETE request to remove
    @DeleteMapping("/{id}")
    public String deleteDepartment(@PathVariable Long id) {
        service.deleteDepartment(id);
        return "Department deleted successfully!";
    }
}