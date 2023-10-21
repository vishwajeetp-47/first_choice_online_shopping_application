package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entities.Category;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.reposiratories.CategoryRepository;


@Service
public class CategoryService
{
	@Autowired
	private CategoryRepository categoryrepo;

	public Category registerCategory(Category category) 
	{
			return categoryrepo.save(category);
	}

	public java.util.List<Category> allCategory() {
				return categoryrepo.findAll();
	}
	
	public void deleteCategoryById(int c_id) {
        categoryrepo.deleteById(c_id);
    }

    public Category getCategory(int id)
    {
    	return categoryrepo.findById(id).get();
    }

}

