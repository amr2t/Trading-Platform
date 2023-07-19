package com.trade.arg_platform.controllers;

import com.trade.arg_platform.entity.user;
import com.trade.arg_platform.services.userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController
{

    @Autowired
    private userservice userService;

    @PostMapping("/register")
    public user register(@RequestBody user user) throws Exception {
        return userService.saveNewUser(user);
    }

    @PostMapping("/login")
    public user login(@RequestBody user user) throws Exception {
        return userService.loginUser(user);
    }


}
