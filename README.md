### Install PHP
1. Follow the instructions on https://www.php.net/manual/en/install.php to install
2. Add the executable file to your path

### Install Postgres
1. Follow the instructions https://www.postgresql.org/download/ to install
2. Add the executable file to your path

### Update PHP Configuration
1. Open `php.ini` in a text editor.
2. Find and uncomment the following lines (remove the `;` at the start of each line):

    ```ini
    extension=pdo_pgsql
    extension=pgsql
    ```

** macOS SUsers:** PHP installations on macOS do not come with the PostgreSQL extensions pre-installed. You'll need to install these extensions manually

3. Save the changes and close the file.

## Application Configuration

### Environment Setup

For database and environment settings, create a `.env` file in the project root based on `sample_env.php`. Populate it with your local settings.

### Database Initialization

Execute `psql -U postgres -f create_db.sql` on the command line to create and set up the necessary database tables.

## Access the Application

### Start PHP's Built-in Server

Navigate to the root directory of the application and start PHP's built-in server:

```bash
php -S localhost:8000
```

With the server running, open a web browser and navigate to `http://localhost:8000`. You should see the Simple Blog application running.