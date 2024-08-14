package com.agrimitrarental.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrimitrarental.entities.Product;
import com.agrimitrarental.entities.Variant;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {

	List<Product> findByVariantAndStatus(Variant variant,String status);
	List<Product> findByStatus(String status);
}
