package com.example.demo.services;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Product;
import com.example.demo.reposiratories.ProductRepository;


@Service
public class ProductService {
	@Autowired
	ProductRepository prepo;
	
	public Product addProduct(Product product) 
	{
			return prepo.save(product);
	}

	public List<Product> allProduct() {
				return prepo.findAll();
	}
	
	public void deleteProductById(int p_id) {
        prepo.deleteById(p_id);
    }
	
	public boolean uploadImage(int id,byte []file)
	{
		if(prepo.uploadImage(id, file)==1)
			return true;
		else 
			return false;
	}
	public List<Product> getProductforvendor(int id)
	{
		return prepo.getProductsforv(id);
	}
	public List<Product> getOutOfstock(int id)
	{
		return prepo.getOutOfStock(id);
	}

	  public Product getProductbyid(int p_id)
	  {
		  return prepo.findById(p_id).get();
	  }
}
