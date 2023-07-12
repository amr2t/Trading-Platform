package com.trade.arg_platform.entity;

import jakarta.persistence.*;

@Entity
@Table(name="USER")
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uid;
    private String name;
    private String email;
    private String password;

}
