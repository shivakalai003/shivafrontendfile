export class User {
    constructor(email,expiresIn,token,userId) {
      this.email = email;
      this.userId = userId;
      this.token = token;
      this.expiresIn = expiresIn;
    }
  }
  