package com.System.Auction.Entities;

import lombok.*;

import javax.persistence.*;

@Data
@Entity(name = "Member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long MID;

    private String name;
    private String homeAddress;
    private String email;
    private String phone;
    private String password;
}
