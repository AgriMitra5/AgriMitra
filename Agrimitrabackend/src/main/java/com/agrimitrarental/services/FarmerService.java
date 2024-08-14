package com.agrimitrarental.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.agrimitrarental.daos.FarmerRepository;
import com.agrimitrarental.entities.Farmer;

@Service
public class FarmerService {

	@Autowired private FarmerRepository dao;
	
	public void registerFarmer(Farmer cust) {
		dao.save(cust);
	}
	
	public Farmer findByUserId(String userid) {
		return dao.getById(userid);
	}

	public List<Farmer> allFarmer() {
		// TODO Auto-generated method stub
		return dao.findAll(Sort.by(Direction.DESC, "createdon"));
	}

	public Farmer validate(String userid, String pwd) {
		Farmer cc=dao.getById(userid);
		if(cc!=null && cc.getPwd().equals(pwd)) {
			return cc;
		}
		return null;
	}
	
	public boolean verifyUserId(String userid) {
		// TODO Auto-generated method stub
		return dao.existsById(userid);
	}

	public void updateProfile(Farmer cust) {
		// TODO Auto-generated method stub
		if(cust.getPwd().equals("") || cust.getPwd()==null) {
			cust.setPwd(dao.getById(cust.getUserid()).getPwd());
		}
		dao.save(cust);	
	}
}
