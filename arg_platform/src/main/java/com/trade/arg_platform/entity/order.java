package com.trade.arg_platform.entity;


import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class order {



        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @ManyToOne
        private user user;

        @ManyToOne
        private stock stock;

        private int quantity;
        private BigDecimal price;
        private LocalDateTime orderDateTime;


}

