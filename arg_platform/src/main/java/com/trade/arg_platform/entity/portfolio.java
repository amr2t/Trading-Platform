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
    private String desc;

    @OneToMany(mappedBy = "portfolio")
    private List<holding> holdingList;


    @ManyToMany(mappedBy = "portfolioList")
    private List<user> userList;

    public portfolio(Long id, String name, String desc, List<holding> holdingList, List<user> userList) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.holdingList = holdingList;
        this.userList = userList;
    }

    public portfolio() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public List<holding> getHoldingList() {
        return holdingList;
    }

    public void setHoldingList(List<holding> holdingList) {
        this.holdingList = holdingList;
    }

    public List<user> getUserList() {
        return userList;
    }

    public void setUserList(List<user> userList) {
        this.userList = userList;
    }


    @Override
    public String toString() {
        return "portfolio{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                ", holdingList=" + holdingList +
                ", userList=" + userList +
                '}';
    }
}
