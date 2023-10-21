package com.example.demo.reposiratories;



import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Product;
@Transactional
@Repository

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query("select p from Product p")
	public List<Customer>getAllProduct();
	
	@Modifying
	@Query("update Product set p_image= :file where p_id= :id")
	public int uploadImage(int id, byte [] file);
	
	@Query(value="select * from products where v_id= :id", nativeQuery=true)
	public List<Product>getProductsforv(int id);
	
	@Query(value="select * from products where v_id= :id AND quantity=0", nativeQuery=true)
	public List<Product>getOutOfStock(int id);
	

}
