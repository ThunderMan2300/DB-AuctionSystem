package com.System.Auction.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cat_id")
    private long catID;

    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name = "supcat_id", nullable = false)
    private SuperCategory superCategory;

    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Item> itemList;
}
