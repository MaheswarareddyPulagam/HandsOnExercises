class Book {

    int id;
    String title;

    Book(int id, String title) {
        this.id = id;
        this.title = title;
    }
}

public class LibraryManagementSystem {

    static void linearSearch(Book[] books, String target) {

        for (Book b : books) {

            if (b.title.equals(target)) {
                System.out.println("Found");
                return;
            }
        }

        System.out.println("Not Found");
    }

    public static void main(String[] args) {

        Book[] books = {
                new Book(1, "Java"),
                new Book(2, "Python")
        };

        linearSearch(books, "Java");
    }
}
