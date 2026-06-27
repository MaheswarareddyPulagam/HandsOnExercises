class Node {

    int taskId;
    String taskName;
    Node next;

    Node(int taskId, String taskName) {
        this.taskId = taskId;
        this.taskName = taskName;
    }
}

public class TaskManagementSystem {

    Node head;

    void addTask(int id, String name) {

        Node newNode = new Node(id, name);

        if (head == null) {
            head = newNode;
            return;
        }

        Node temp = head;

        while (temp.next != null)
            temp = temp.next;

        temp.next = newNode;
    }

    void display() {

        Node temp = head;

        while (temp != null) {

            System.out.println(temp.taskId + " " + temp.taskName);

            temp = temp.next;
        }
    }

    public static void main(String[] args) {

        TaskManagementSystem list = new TaskManagementSystem();

        list.addTask(1, "Coding");
        list.addTask(2, "Testing");

        list.display();
    }
}
