package com.agrimitrarental.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agrimitrarental.entities.Farmer;
import com.agrimitrarental.models.LoginDTO;
import com.agrimitrarental.services.FarmerService;

@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class FarmerController {

@Autowired FarmerService farmerService;
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Farmer cust) {
		if(farmerService.verifyUserId(cust.getUserid())) {
			return ResponseEntity.badRequest().body("Email already registered");
		}
		farmerService.registerFarmer(cust);
		return ResponseEntity.ok("Farmer registered successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> findAllFarmer() {
		List<Farmer> result = farmerService.allFarmer();
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Farmer user=farmerService.validate(dto.getUserid(),dto.getPwd());
		if(user!=null)
			return ResponseEntity.ok(user);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}
	
	@PostMapping("/update")
	public ResponseEntity<?> updateProfile(@RequestBody Farmer cust) {
		farmerService.updateProfile(cust);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}
