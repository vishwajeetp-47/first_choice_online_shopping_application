package com.example.demo.reposiratories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Product;
import com.example.demo.entities.Vendor;
@Repository
public interface VendorReposiratory extends JpaRepository<Vendor, Integer> {

	@Query(value="select * from vendor where l_id= :id", nativeQuery=true)
	public Vendor getVendorByid(int id);
	
	@Query("select v from Vendor v")
	public List<Vendor>getallvendor();
}
