package com.mahesh.account;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
@RestController
public class AccountController{
@GetMapping("/accounts/{number}")
public Map<String,Object> get(@PathVariable String number){
  return Map.of("number",number,"type","Savings","balance",234343);
}}
