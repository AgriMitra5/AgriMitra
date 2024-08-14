package com.agrimitrarental.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrimitrarental.entities.Booking;
import com.agrimitrarental.entities.Farmer;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

	List<Booking> findByCustomer(Farmer customer);
}
