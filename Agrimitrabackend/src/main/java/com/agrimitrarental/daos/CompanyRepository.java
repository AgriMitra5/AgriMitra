package com.agrimitrarental.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrimitrarental.entities.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

}
