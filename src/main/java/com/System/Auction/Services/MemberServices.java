package com.System.Auction.Services;

import com.System.Auction.Entities.Member;
import com.System.Auction.Repositories.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class MemberServices extends AbstractServices<Member>{
    public MemberServices(MemberRepository repository) {
        this.repository = repository;
    }
}
