package com.company.hr_api.repository;

import com.company.hr_api.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // JpaRepository gives us all the standard database methods for free
}