package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.*;

@Data
@Entity(name = "buyer")
public class Buyer {
    @Id
    @Column(name = "buyer_id")
    private long buyerID;

    @Column(name = "ship_addr")
    private String shippingAddress;

    @OneToOne
    @JoinColumn(name = "buyer_id")
    private Member memberProfile;

}
