package com.System.Auction.Controlller;

import com.System.Auction.Entities.Member;
import com.System.Auction.Repositories.MemberRepository;
import com.System.Auction.Services.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    MemberRepository repository;

    @PostMapping("/")
    public Response authenticate(@RequestBody Map<String, String> data) {
        Member found = repository.findByEmailEqualsAndPasswordEquals(data.get("email"), data.get("password"));
        boolean sendFound = false;
        if(found != null)
            sendFound = true;

        return new Response(HttpStatus.OK.toString(), "" + sendFound, found);
    }
}
