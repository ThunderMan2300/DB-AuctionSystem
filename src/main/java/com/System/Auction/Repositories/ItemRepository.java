package com.System.Auction.Repositories;

import com.System.Auction.Entities.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Long> {
}
