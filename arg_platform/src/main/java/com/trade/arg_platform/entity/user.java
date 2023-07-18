package com.trade.arg_platform.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Trader")
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uid;
    private String name;
    private String email;
    private String password;

    @ManyToMany
    private List<portfolio> portfolioList;

    @OneToMany(mappedBy="user")
    private List<order> orderList;

    public user() {
    }


}
