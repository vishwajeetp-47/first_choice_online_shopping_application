package com.example.demo.reposiratories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Query("select l from Login l where uid = :uid and pwd = :pwd ")
	public Optional<Login> getLogin(String uid,String pwd);
	
	@Query(value="select a from Login a WHERE a.l_id=?1")
	Login getUser(int l_id);

	@Query("select l from Login l where l_id = :l_id")
	public Login getAdminByUId(@Param("l_id") Login l_id);
	
	@Modifying
	@Query("update Login set status = 1 where l_id = ?1 ")
	public int updateVendor(int l_id);
	
	@Modifying
	@Query("update Login set status = 0 where l_id = ?1 ")
	public int updateRejectVendor(int l_id);
	
}
