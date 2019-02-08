CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_username VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
)

INSERT INTO users(user_username, user_password)
VALUES($1, $2)
RETURNING user_username;