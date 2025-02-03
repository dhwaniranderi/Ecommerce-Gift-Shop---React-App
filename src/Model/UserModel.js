class UserModel {
    constructor(email, username, password, purchaseHistory, shippingAddress) {
      this.email = email;
      this.username = username;
      this.password = password;
      this.purchaseHistory = purchaseHistory;
      this.shippingAddress = shippingAddress;
    }
  
    // Convert model to JSON format for API request
    toJSON() {
      return {
        email: this.email,
        username: this.username,
        password: this.password,
        purchase_history: this.purchaseHistory,
        shipping_address: this.shippingAddress,
      };
    }
  }
  
  export default UserModel;
  