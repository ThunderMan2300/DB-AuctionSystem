package com.System.Auction.Repositories;

import com.System.Auction.Entities.Transaction;
import org.springframework.data.repository.CrudRepository;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {
}
