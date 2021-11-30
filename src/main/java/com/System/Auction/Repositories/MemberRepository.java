package com.System.Auction.Repositories;

import com.System.Auction.Entities.Member;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends CrudRepository<Member, Long> {
    Member findByEmailEqualsAndPasswordEquals(String email, String password);
    Optional<Member> findByPasswordEquals(String password);
}
