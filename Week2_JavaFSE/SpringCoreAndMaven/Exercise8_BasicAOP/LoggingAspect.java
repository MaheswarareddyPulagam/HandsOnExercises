package com.library.aspect;

import org.aspectj.lang.annotation.*;

@Aspect
public class LoggingAspect {

    @Before(
      "execution(* com.library.service.*.*(..))"
    )

    public void beforeMethod() {

        System.out.println(
                "Method Execution Started"
        );
    }

    @After(
      "execution(* com.library.service.*.*(..))"
    )

    public void afterMethod() {

        System.out.println(
                "Method Execution Completed"
        );
    }
}
