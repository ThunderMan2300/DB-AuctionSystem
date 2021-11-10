package com.System.Auction.Entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "item_id")
    private long itemID;

    private String title;
    private String description;

    @Column(name = "start_price")
    private double startPrice;
    @Column(name = "bid_increment")
    private double bidIncrement;
    @Column(name = "start_time")
    private Date startTime;
    @Column(name = "end_time")
    private Date endTime;
    @Column(name = "img_url")
    private String imgURL;

    @OneToOne(mappedBy = "item", cascade = CascadeType.ALL)
    private Seller seller;

    @ManyToOne
    @JoinColumn(name = "catID", nullable = false)
    private Category category;

    @OneToMany(mappedBy = "item")
    private List<Bid> bidList;
}
