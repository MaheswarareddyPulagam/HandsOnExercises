import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CalculatorServiceTest {

    CalculatorService service =
            new CalculatorService();

    @Test
    void testAdd() {

        assertEquals(
                10,
                service.add(4, 6)
        );
    }
}
