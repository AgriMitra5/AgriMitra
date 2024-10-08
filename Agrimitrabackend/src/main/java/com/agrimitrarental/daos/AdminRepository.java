package com.agrimitrarental.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrimitrarental.entities.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {

}
