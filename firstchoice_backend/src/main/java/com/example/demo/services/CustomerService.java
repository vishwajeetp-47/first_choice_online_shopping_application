package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.reposiratories.CustomerRepository;

@Service
public class CustomerService {
	@Autowired
	CustomerRepository crepo;
	
	public Customer saveCustomer(Customer c) 
	{
		return crepo.save(c);
	}
	
	public List<Customer>getAll(){
		return crepo.findAll();
	}
	public Customer getCustomerbyId(int id)
	{
		return crepo.getCustomerByid(id);
	}
	public Customer getCustomer(int c_id)
	{
		return crepo.findById(c_id).get();
	}
}
