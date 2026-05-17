package com.company.hr_api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    // unique = true ensures we can't accidentally hire two people with the exact same email
    @Column(nullable = false, unique = true)
    private String email;

    private String jobTitle;

    // --- THE MAGIC CONNECTION ---
    // Many Employees can belong to One Department.
    @ManyToOne
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

}