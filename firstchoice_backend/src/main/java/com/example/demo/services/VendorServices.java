package com.example.demo.services;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Vendor;
import com.example.demo.reposiratories.VendorReposiratory;

@Service
public class VendorServices {
	@Autowired
	VendorReposiratory vrepo;
	
	public Vendor saveVendor(Vendor v)
	{
		return vrepo.save(v);
	}
	
	public Vendor getVendor(int id)
	{
		return vrepo.findById(id).get();

	}
	
	public Vendor getVendorbyId(int id)
	{
		return vrepo.getVendorByid(id);
	}
	public List<Vendor> getall()
	{
		return vrepo.findAll();
		
	}

}
