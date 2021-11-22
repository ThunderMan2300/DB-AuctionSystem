package com.System.Auction.Repositories;

import com.System.Auction.Entities.Item;
import org.springframework.data.repository.CrudRepository;

import java.util.*;

public interface ItemRepository extends CrudRepository<Item, Long> {
    List<Item> findByEndTimeGreaterThan(Date date);
}
