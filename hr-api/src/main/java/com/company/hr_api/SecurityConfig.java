package com.company.hr_api; // Change this if your package name is different!

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // Allow React to send requests without being blocked by CORS
                .cors(Customizer.withDefaults())
                // Disable CSRF since we are using a simple API structure
                .csrf(csrf -> csrf.disable())
                // Require authentication for all requests, EXCEPT pre-flight (OPTIONS) requests
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .anyRequest().authenticated()
                )
                // Use Basic Auth (passing the username and password in the header)
                .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}