package com.agrimitrarental;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import com.agrimitrarental.utils.FileUploadProperties;

@SpringBootApplication
@EnableJpaAuditing
@EnableConfigurationProperties({
    FileUploadProperties.class
})
public class AgrimitraBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgrimitraBackendApplication.class, args);
	}

}
