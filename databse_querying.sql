SELECT user.id, user.username, us.username 
FROM user
LEFT JOIN user AS us ON user.parent_id = us.id;