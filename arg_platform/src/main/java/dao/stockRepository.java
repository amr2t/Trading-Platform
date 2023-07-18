package dao;

import com.trade.arg_platform.entity.stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface stockRepository extends JpaRepository<stock,String> {
}
