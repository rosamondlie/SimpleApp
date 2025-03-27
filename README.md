# React & Laravel Full-Stack App

This project is a simple full-stack web application built using **React (frontend)** and **Laravel (backend)**. It follows the tutorial from [YouTube](https://www.youtube.com/watch?v=qJq9ZMB2Was) and serves as a learning resource for beginners.

## Features
- Full **CRUD (Create, Read, Update, Delete)** functionality
- **REST API** built with Laravel
- Frontend developed using **React.js**
- **MySQL Database** for data storage
- **Axios** for API requests
- **Eloquent ORM** for database interactions

---

## Getting Started
### Prerequisites
Ensure you have the following installed on your machine:
- PHP (>=8.0)
- Composer
- Node.js & npm
- MySQL

### Clone the Repository
```sh
git clone https://github.com/your-username/react-laravel-app.git
cd react-laravel-app
```

---

## Backend (Laravel Setup)
1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```
2. Install dependencies:
    ```sh
    composer install
    ```
3. Copy the `.env.example` file and set database credentials:
    ```sh
    cp .env.example .env
    ```
4. Generate application key:
    ```sh
    php artisan key:generate
    ```
5. Run database migrations:
    ```sh
    php artisan migrate
    ```
6. Start Laravel development server:
    ```sh
    php artisan serve
    ```

---

## Frontend (React Setup)
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the React development server:
    ```sh
    npm start
    ```

---

## API Endpoints
| Method | Endpoint      | Description          |
|--------|--------------|----------------------|
| GET    | /api/posts   | Get all posts        |
| POST   | /api/posts   | Create a new post    |
| GET    | /api/posts/{id} | Get a single post |
| PUT    | /api/posts/{id} | Update a post    |
| DELETE | /api/posts/{id} | Delete a post    |

---

## Technologies Used
- **Frontend:** React.js, Axios, Tailwind CSS
- **Backend:** Laravel, MySQL, Eloquent ORM

---

## Future Enhancements
- Authentication using Laravel Sanctum
- UI improvements with Tailwind CSS
- Additional features like file uploads

---

## Credits
Tutorial by **Traversy Media** - [Watch Here](https://www.youtube.com/watch?v=qJq9ZMB2Was)

---

## License
This project is open-source and available under the MIT License.
