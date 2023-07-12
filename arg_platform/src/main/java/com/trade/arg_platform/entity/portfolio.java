package com.trade.arg_platform.entity;

import jakarta.persistence.*;
import org.apache.catalina.User;

import java.util.List;

@Entity
public class portfolio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String desc;

    @OneToMany
    private List<holding> holdingList;


    @ManyToMany
    @JoinColumn(name = "user_uid")
    private User user;

    public portfolio(Long id, String name, String desc, User user) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.user = user;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "portfolio{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                ", user=" + user +
                '}';
    }
}
