package dao;

import com.trade.arg_platform.entity.order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface orderRepository extends JpaRepository<order,Long> {
}
