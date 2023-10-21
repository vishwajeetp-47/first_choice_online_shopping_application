package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Brand;
import com.example.demo.entities.Category;
import com.example.demo.reposiratories.BrandReposiratory;

@Service
public class BrandService {
	@Autowired
    BrandReposiratory brepo;
	
	public List<Brand> allBrands() {
		return brepo.findAll();
    }
	public Brand getBrandById(int id)
    {
    	return brepo.findById(id).get();
    }
}
