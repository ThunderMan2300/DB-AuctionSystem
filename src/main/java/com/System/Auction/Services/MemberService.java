package com.System.Auction.Services;

import com.System.Auction.Entities.Member;
import com.System.Auction.Repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    @Autowired
    MemberRepository memberRepository;

    public void save(Member member) {
        memberRepository.save(member);
    }
}
