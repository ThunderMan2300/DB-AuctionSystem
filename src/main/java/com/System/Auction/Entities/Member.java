package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.*;

@Data
@Entity(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "mid")
    private long memberID;

    @Column(name = "email")
    private String email;
    @Column(name = "name")
    private String name;
    @Column(name = "password")
    private String password;
    @Column(name = "home_addr")
    private String homeAddress;
    @Column(name = "phone")
    private String phone;

    //@JsonIgnore
    @OneToOne(mappedBy = "memberProfile")
    private Buyer buyerProfile;

    //@JsonIgnore
    @OneToOne(mappedBy = "memberProfile")
    private Seller sellerProfile;

    @OneToMany(mappedBy = "seller")
    private List<Item> auctionList;

    @OneToMany(mappedBy = "buyer")
    private List<Bid> bidList;

    @OneToMany(mappedBy = "seller")
    private List<Transaction> saleList;

    @OneToMany(mappedBy = "buyer")
    private List<Transaction> purchaseList;
}
