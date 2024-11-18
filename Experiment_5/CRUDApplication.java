// to run this file i need two commands they are 1. javac -d . CRUDApplication.java   2. java -cp ".;C:\Users\psai4\Downloads\mysql-connector-j-9.1.0\mysql-connector-j-9.1.0\mysql-connector-j-9.1.0.jar" Skill_Development_Lab.Experiment_5.CRUDApplication

package Skill_Development_Lab.Experiment_5;

import java.sql.*;
import java.util.Scanner;

public class CRUDApplication {

    // Database URL and credentials
    private static final String DB_URL = "jdbc:mysql://localhost:3306/csd_students_info";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "mysql";

    // Method to establish a connection to the database
    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
    }

    public static void main(String[] args) {
        try (Connection conn = getConnection(); Scanner scanner = new Scanner(System.in)) {
            System.out.println("Connected to the database.");

            boolean exit = false;
            while (!exit) {
                System.out.println("\n1. Add Student\n2. View Students\n3. Update Student Grade\n4. Delete Student\n5. Exit");
                System.out.print("Choose an option: ");

                int choice = scanner.nextInt();
                scanner.nextLine(); // Clear newline character
                switch (choice) {
                    case 1 -> addStudent(conn, scanner);
                    case 2 -> viewStudents(conn);
                    case 3 -> updateStudent(conn, scanner);
                    case 4 -> deleteStudent(conn, scanner);
                    case 5 -> {
                        System.out.println("Exiting...");
                        exit = true;
                    }
                    default -> System.out.println("Invalid choice. Try again.");
                }
            }
        } catch (SQLException e) {
            System.err.println("Database connection error: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static void addStudent(Connection conn, Scanner scanner) {
        System.out.print("Enter ID: ");
        String id = scanner.nextLine();
        System.out.print("Enter name: ");
        String name = scanner.nextLine();
        System.out.print("Enter age: ");
        int age = scanner.nextInt();
        System.out.print("Enter grade: ");
        String grade = scanner.next();

        String sql = "INSERT INTO students (id, name, age, grade) VALUES (?, ?, ?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, id);
            stmt.setString(2, name);
            stmt.setInt(3, age);
            stmt.setString(4, grade);

            int rowsAffected = stmt.executeUpdate();
            System.out.println(rowsAffected + " student added.");
        } catch (SQLException e) {
            System.err.println("Error adding student: " + e.getMessage());
        }
    }

    private static void viewStudents(Connection conn) {
        String sql = "SELECT * FROM students";
        try (Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            if (!rs.isBeforeFirst()) {
                System.out.println("No students found.");
            } else {
                while (rs.next()) {
                    System.out.println("ID: " + rs.getString("id") + ", Name: " + rs.getString("name") +
                            ", Age: " + rs.getInt("age") + ", Grade: " + rs.getString("grade"));
                }
            }
        } catch (SQLException e) {
            System.err.println("Error retrieving students: " + e.getMessage());
        }
    }

    private static void updateStudent(Connection conn, Scanner scanner) {
        System.out.print("Enter student ID: ");
        String id = scanner.nextLine();
        System.out.print("Enter new grade: ");
        String grade = scanner.nextLine();

        String sql = "UPDATE students SET grade = ? WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, grade);
            stmt.setString(2, id);

            int rowsAffected = stmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Student updated.");
            } else {
                System.out.println("Student with ID " + id + " not found.");
            }
        } catch (SQLException e) {
            System.err.println("Error updating student: " + e.getMessage());
        }
    }

    private static void deleteStudent(Connection conn, Scanner scanner) {
        System.out.print("Enter student ID: ");
        String id = scanner.nextLine();

        String sql = "DELETE FROM students WHERE id = ?";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, id);

            int rowsAffected = stmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Student deleted.");
            } else {
                System.out.println("Student with ID " + id + " not found.");
            }
        } catch (SQLException e) {
            System.err.println("Error deleting student: " + e.getMessage());
        }
    }
}
