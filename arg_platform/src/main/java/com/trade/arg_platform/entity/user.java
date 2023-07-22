package com.trade.arg_platform.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.List;

@Entity(name="trader")
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long uid;
    private String email;
    private String password;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    private List<portfolio> portfolioList;

    public user() {
    }

    public user(Long uid, String email, String password, List<portfolio> portfolioList) {
        this.uid = uid;
        this.email = email;
        this.password = password;
        this.portfolioList = portfolioList;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<portfolio> getPortfolioList() {
        return portfolioList;
    }

    public void setPortfolioList(List<portfolio> portfolioList) {
        this.portfolioList = portfolioList;
    }

    @Override
    public String toString() {
        return "user{" +
                "uid=" + uid +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", portfolioList=" + portfolioList +
                '}';
    }
}
