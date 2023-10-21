package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan(basePackages="com.example.demo.*")
@EnableAutoConfiguration
public class FirstChoiceMiddleWareApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstChoiceMiddleWareApplication.class, args);
	}

}
