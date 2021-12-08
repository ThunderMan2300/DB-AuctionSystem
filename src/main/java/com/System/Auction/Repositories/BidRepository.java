package com.System.Auction.Repositories;

import com.System.Auction.Entities.Bid;
import com.System.Auction.Entities.Item;
import org.springframework.data.repository.CrudRepository;

public interface BidRepository extends CrudRepository<Bid, Long> {
    Bid findFirstByItemOrderByPriceDescBidTimeDesc(Item item);
}
