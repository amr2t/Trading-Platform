package dao;

import com.trade.arg_platform.entity.portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface portfolioRepository extends JpaRepository<portfolio,Long> {
}
