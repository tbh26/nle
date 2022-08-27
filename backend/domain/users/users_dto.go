package users

type RegisterUser struct {
	Username string `json:"username"`
	FullName string `json:"full_name"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

type User struct {
	Id           int64  `json:"id"`
	Username     string `json:"username"`
	FullName     string `json:"full_name"`
	Email        string `json:"email"`
	PasswordHash string `json:"password_hash"`
}
