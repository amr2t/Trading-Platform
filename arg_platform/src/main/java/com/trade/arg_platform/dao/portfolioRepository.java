package com.trade.arg_platform.dao;

import com.trade.arg_platform.entity.portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface portfolioRepository extends JpaRepository<portfolio,Long> {

//    @Transactional
//    @Modifying
//    @Query("update Product p set p.headline = :headline where p.id = :id")
//    public void updateHeadline(@Param("id") UUID id, @Param("headline") String headline);

//    SELECT
//    SUM(CASE WHEN bs = false THEN total_amount ELSE -total_amount END) AS difference
//    FROM
//            portfolio
//    WHERE
//            user_uid=1 AND bs IN (true, false);
//@Query("SELECT SUM(CASE WHEN p.bs = false THEN p.totalAmount ELSE -p.totalAmount END) " +
//        "FROM portfolio p WHERE p.uid = :uid AND p.bs IN (true, false)")
//double amount(long uid);
}
