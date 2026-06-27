import java.util.HashMap;

class Product {

    int productId;
    String productName;
    int quantity;
    double price;

    Product(int productId, String productName,
            int quantity, double price) {

        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }
}

public class InventoryManagementSystem {

    public static void main(String[] args) {

        HashMap<Integer, Product> inventory =
                new HashMap<>();

        Product p1 =
                new Product(1, "Laptop", 10, 50000);

        inventory.put(p1.productId, p1);

        System.out.println("Product Added");

        inventory.remove(1);

        System.out.println("Product Removed");
    }
}
