class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    let removedUser;
    this.users = this.users.filter(user => {
      if(user.id === id) {
        removedUser = user;
        return false;
      }
      return true;
    });
    return removedUser;
  }
  getUser(id) {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].id === id) return this.users[i];
    }
  }
  getUserList(room) {
    const users = this.users.filter(user => user.room === room);
    return users.map(user => user.name);
  }
}

module.exports = {Users};