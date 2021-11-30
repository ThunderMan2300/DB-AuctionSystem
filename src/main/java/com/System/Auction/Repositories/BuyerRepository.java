package com.System.Auction.Repositories;

import com.System.Auction.Entities.Buyer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyerRepository extends CrudRepository<Buyer, Long> {
}
