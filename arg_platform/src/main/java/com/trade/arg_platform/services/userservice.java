package com.trade.arg_platform.services;

import com.trade.arg_platform.dao.userRepository;
import com.trade.arg_platform.entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userservice {


    @Autowired
    private userRepository repo;
    public user saveNewUser(user user) throws Exception{
        user tempObj = repo.findByEmail(user.getEmail());
        if(tempObj!=null) {
            throw new Exception("This user already exists ");
        }
        return repo.save(user);
    }

    public user loginUser(user user) throws Exception
    {
        user tempObj = repo.findByEmail(user.getEmail());
        if(tempObj==null) {
            throw new Exception("User does not exists ");
        }

        if(!tempObj.getPassword().equals(user.getPassword())){
            throw new Exception("Wrong password");
        }
        return tempObj;
    }
}
