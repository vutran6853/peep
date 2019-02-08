INSERT INTO users(user_username, user_password)
VALUES($1, $2)
RETURNING user_username;