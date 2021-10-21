package com.System.Auction.Entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "MEMBER")
public class Member {
    @Id
    @Column
    private long MID;
//
//    private String email;
//    private String homeAddress;
//    private String name;
//    private String password;
//    private String phone;

    public String toString() {
        return ""
               + MID;
    }
}
