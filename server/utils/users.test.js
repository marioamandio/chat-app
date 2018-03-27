const expect = require('expect');
const {Users} = require('./users');

describe ('Users', () => {
    var users;
    
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: "node course"
        },
        {
            id: '2',
            name: 'jen',
            room: "react course"
        },
        {
            id: '3',
            name: 'Mario',
            room: "node course"
        }]
    });
    
    
    
    
    
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'MArio',
            room: "Office"
        };

        var resUsers = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    })

    it('should return names for node course', () => {
        var userList = users.getUserList("node course");

        expect(userList).toEqual(['Mike', 'Mario']);
    })

    it('should return user find by id', () => {
        var user = users.getUser(2);

        expect(user).toEqual(users[1]);
    })

    it('should not find an user', () => {
        var userId = "5";
        var user = users.getUser(userId);
        expect(user).toNotExist();
    })

    it('should remove an user', () => {
        var userId = "1";
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    })

    it('should not remove an user', () => {
        var userId = "99";
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    })
});