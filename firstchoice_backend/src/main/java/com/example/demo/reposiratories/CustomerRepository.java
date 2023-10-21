package com.example.demo.reposiratories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("select c from Customer c")
	public List<Customer>getAllCustomers();
	
	@Query(value="select * from customer where l_id= :id", nativeQuery=true)
	public Customer getCustomerByid(int id);
}
