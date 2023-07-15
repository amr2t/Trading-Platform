package dao;

import com.trade.arg_platform.entity.holding;
import org.springframework.data.jpa.repository.JpaRepository;

public interface holdingRepository extends JpaRepository<holding,Long> {
}
