package com.agrimitrarental.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrimitrarental.entities.Farmer;

@Repository
public interface FarmerRepository extends JpaRepository<Farmer, String> {

}
