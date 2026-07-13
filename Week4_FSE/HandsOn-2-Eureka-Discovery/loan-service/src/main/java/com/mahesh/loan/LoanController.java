package com.mahesh.loan;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
@RestController
public class LoanController{
@GetMapping("/loans/{number}")
public Map<String,Object> get(@PathVariable String number){
  return Map.of("number",number,"type","Car","loan",400000,"emi",3258,"tenure",18);
}}
