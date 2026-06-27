import java.util.Date;
import java.util.List;

public interface QueryMethods {

    List<Country>
    findByNameContaining(String text);

    List<Country>
    findByNameContainingOrderByNameAsc(
            String text
    );

    List<Country>
    findByNameStartingWith(String alphabet);

    List<Stock>
    findByCodeAndDateBetween(
            String code,
            Date startDate,
            Date endDate
    );

    List<Stock>
    findByCodeAndCloseGreaterThan(
            String code,
            double amount
    );
}
