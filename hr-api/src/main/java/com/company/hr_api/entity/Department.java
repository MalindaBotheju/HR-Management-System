package com.company.hr_api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // The name of the department (e.g., "Engineering")
    // nullable = false means it CANNOT be empty. unique = true means no duplicate names!
    @Column(nullable = false, unique = true)
    private String name;

    // A short description of what the department does
    private String description;

}