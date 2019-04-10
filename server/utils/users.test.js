const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;
    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Julie',
                room: 'Node Course'
            }
        ];
    });

    describe('#addUser', () => {
        it('should add new user', () => {
            let users = new Users();
            let user = {
                id: '123',
                name: 'Prosenjit',
                room: 'The Office Fans'
            };
    
            let resUser = users.addUser(user.id, user.name, user.room);
    
            expect(users.users).toEqual([user]);
        });
    });

    describe('#getUserList', () => {
        it('should return names for node course', () => {
            let userList = users.getUserList('Node Course');
            expect(userList).toEqual(['Mike', 'Julie']);
        });
    
        it('should return names for react course', () => {
            let userList = users.getUserList('React Course');
            expect(userList).toEqual(['Jen']);
        });
    });

    describe('#getUser', () => {
        it('should find user', () => {
            let userId = '2';
            let user = users.getUser(userId);
    
            expect(user.id).toBe(userId);
        });
    
        it('should not find user', () => {
            let userId = '6';
            let user = users.getUser(userId);
    
            expect(user).toBeFalsy();
        });
    });

    describe('#removeUser', () => {
        it('should remove a user', () => {
            let userId = '2';
            let removedUser = users.removeUser(userId);
    
            expect(removedUser.id).toBe(userId);
            expect(users.users.length).toBe(2);
        });
    
        it('should not remove user', () => {
            let userId = '6';
            let removedUser = users.removeUser(userId);
            
            expect(removedUser).toBeFalsy();
            expect(users.users.length).toBe(3);
        });
    });

});