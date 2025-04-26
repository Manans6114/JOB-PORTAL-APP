package com.SpringRestProject.Rest.AOP;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


@Component
@Aspect
public class LoggingAspect {

    public static final Logger LOGGER= LoggerFactory.getLogger(LoggingAspect.class);


//    return type, class-name.method-name(args)

    @Before("execution(* com.SpringRestProject.Rest.service.JobService.*(..))")
    public void logMethodCall() {
        LOGGER.info("Method Called");
    }
}