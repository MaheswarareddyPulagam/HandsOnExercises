import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface EmployeeRepository {

    @Query(
    value =
    "SELECT e FROM Employee e WHERE e.permanent = 1"
    )
    List<Employee> getAllPermanentEmployees();

    @Query(
    value =
    "SELECT e FROM Employee e left join fetch e.department " +
    "left join fetch e.skillList " +
    "WHERE e.permanent = 1"
    )
    List<Employee> getAllPermanentEmployeesOptimized();
}
