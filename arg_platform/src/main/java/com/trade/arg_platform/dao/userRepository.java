package com.trade.arg_platform.dao;

import com.trade.arg_platform.entity.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<user,Long> {

    user findByEmail (String email);
}
