class Order {

    int orderId;
    String customerName;
    double totalPrice;

    Order(int orderId, String customerName, double totalPrice) {

        this.orderId = orderId;
        this.customerName = customerName;
        this.totalPrice = totalPrice;
    }
}

public class SortingCustomerOrders {

    static void bubbleSort(Order[] orders) {

        for (int i = 0; i < orders.length - 1; i++) {

            for (int j = 0; j < orders.length - i - 1; j++) {

                if (orders[j].totalPrice > orders[j + 1].totalPrice) {

                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {

        Order[] orders = {
                new Order(1, "A", 500),
                new Order(2, "B", 300),
                new Order(3, "C", 700)
        };

        bubbleSort(orders);

        for (Order o : orders) {
            System.out.println(o.totalPrice);
        }
    }
}
