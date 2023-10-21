package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.entities.Vendor;
import com.example.demo.entities.VendorReg;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;
import com.example.demo.services.VendorServices;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class VendorController {
	@Autowired
	VendorServices vserv;
	@Autowired
	LoginService lserv;
	
	@Autowired
	RoleService rserv;
	
	@PostMapping("/regVendor")
	public Vendor regVendor(@RequestBody VendorReg vr)
	{
	
		Role r =rserv.getRole(2);
		Login l=new Login(vr.getUid(),vr.getPwd(),r,false);
		Login saved=lserv.save(l);
		
		Vendor v=new Vendor(vr.getV_name(),vr.getEmail(),vr.getContact(),vr.getAddress(),vr.getShop_licence_id(),saved);
		return vserv.saveVendor(v);
	}
	@GetMapping("/getVendor")
	public Vendor getVendor(@RequestParam("login_id") int id)
	{
		return vserv.getVendor(id);
	}
	@GetMapping("/getVendorbyid")
	public Vendor getVendorbyid(@RequestParam("login_id") int id)
	{
		return vserv.getVendorbyId(id);
	}
	@GetMapping("/getallvendor")
	public List<Vendor> getAll()
	{
		return vserv.getall();
	}

}
