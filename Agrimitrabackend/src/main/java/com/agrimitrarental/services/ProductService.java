package com.agrimitrarental.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.agrimitrarental.daos.ProductRepository;
import com.agrimitrarental.entities.Product;
import com.agrimitrarental.models.ProductDTO;

@Service
public class ProductService {

	@Autowired private ProductRepository brepo;
	@Autowired private VariantService vsrv;
	
	public void saveProduct(ProductDTO dto) {
		Product bike=new Product();
		if(brepo.existsById(dto.getId())) {			
			bike=brepo.getById(dto.getId());
		}		
		BeanUtils.copyProperties(dto, bike);
		bike.setVariant(vsrv.findById(dto.getVarid()));
		brepo.save(bike);
	}
	
	public void updateProduct(Product bk) {
		brepo.save(bk);
	}
	
	public List<Product> listAll(){
		return brepo.findAll(Sort.by(Direction.DESC, "createdon"));
	}
	
	public Product findById(String id) {
		return brepo.getById(id);
	}
	
	public List<Product> filterProduct(int id){
		System.out.println("Filter id "+id);
		if(id==1)
			return brepo.findByStatus("Available");
		else
			return brepo.findByStatus("Not Available");
	}
	
	public List<Product> listVariantProduct(int varid){
		return brepo.findByVariantAndStatus(vsrv.findById(varid),"Available");
	}
	
	public void deleteProduct(String id) {
		if(brepo.existsById(id)) {
			brepo.delete(brepo.getById(id));
		}
	}	
}
