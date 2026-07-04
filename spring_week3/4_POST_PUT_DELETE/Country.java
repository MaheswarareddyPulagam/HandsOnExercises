package com.cognizant.springlearn;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Country {

    @NotNull
    @Size(min=2,max=2)
    private String code;

    @NotBlank
    private String name;
}