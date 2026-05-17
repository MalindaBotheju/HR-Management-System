package com.company.hr_api.repository;

import com.company.hr_api.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
    // We don't need to write any code here! JpaRepository gives us everything for free.
}