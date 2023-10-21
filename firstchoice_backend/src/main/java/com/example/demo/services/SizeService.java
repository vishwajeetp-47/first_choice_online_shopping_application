package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.Size;
import com.example.demo.reposiratories.SizeReposiratory;

@Service
public class SizeService {
	@Autowired
	SizeReposiratory ssrepo;
	
	public Size getSize(int id)
	{
		return ssrepo.findById(id).get();
	}
	
	public java.util.List<Size> allsize() {
		return ssrepo.findAll();
}

}
