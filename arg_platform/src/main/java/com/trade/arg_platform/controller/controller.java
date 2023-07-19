package com.trade.arg_platform.controller;

import com.trade.arg_platform.entity.user;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class controller {

    @PostMapping("/register")
    public User register(@RequestBody User user);
}
