package com.trade.arg_platform.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "portfolio")
public class portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String describe;
    @OneToMany(mappedBy = "portfolio")
    private List<holding> holdingList;


    @ManyToMany(mappedBy = "portfolioList")
    private List<user> userList;


}
