### CRUD Application with MySQL Database

#### Prerequisites:
1. Java Development Kit (JDK) 14 or later (required for switch expressions)
2. MySQL Server installed and running
3. MySQL Connector/J (version 9.1.0 or compatible)
4. MySQL database named "csd_students_info" with a table "students"

#### Database Setup:
1. Create the database:
   ```sql
   CREATE DATABASE csd_students_info;
   USE csd_students_info;
   ```

2. Create the students table:
   ```sql
   CREATE TABLE students (
       id VARCHAR(20) PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       age INT,
       grade VARCHAR(2)
   );
   ```

#### Setup Instructions:
1. Download MySQL Connector/J from https://dev.mysql.com/downloads/connector/j/
2. Extract the JAR file and note its location (e.g., C:\path\to\mysql-connector-j-9.1.0.jar)

#### Compilation and Execution:
1. Compile the application:
   ```bash
   javac -d . CRUDApplication.java
   ```

2. Run the application (replace the path with your actual MySQL Connector/J path):
   ```bash
   java -cp ".;C:\path\to\mysql-connector-j-9.1.0.jar" Skill_Development_Lab.Experiment_5.CRUDApplication
   ```

#### Application Usage:
1. When the application starts, you'll see a menu with these options:
   - 1. Add Student
   - 2. View Students
   - 3. Update Student Grade
   - 4. Delete Student
   - 5. Exit

2. Follow the on-screen prompts to perform CRUD operations.

#### Notes:
- The application connects to MySQL using:
  - URL: jdbc:mysql://localhost:3306/csd_students_info
  - Username: root
  - Password: 123
- You may need to modify these credentials in the CRUDApplication.java file if your MySQL setup is different