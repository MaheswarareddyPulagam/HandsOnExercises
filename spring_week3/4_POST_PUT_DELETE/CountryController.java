package com.cognizant.springlearn.controller;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @PostMapping("/countries")
    public Country addCountry(
        @Valid
        @RequestBody Country country) {

        return country;
    }

    @PutMapping("/countries")
    public Country updateCountry(
        @RequestBody Country country) {

        return country;
    }

    @DeleteMapping("/countries/{code}")
    public void deleteCountry(
        @PathVariable String code) {

        System.out.println(code);
    }
}