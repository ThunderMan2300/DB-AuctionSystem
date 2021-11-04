package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Data
@Entity(name = "Member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long MID;

    @Column(name = "HOMEADDRESS")
    private String homeAddress;
    private String name;
    private String email;
    private String phone;
    private String password;

//    @JsonIgnore
//    @OneToOne(mappedBy = "member", cascade = CascadeType.ALL)
//    private Buyer buyer;
}
