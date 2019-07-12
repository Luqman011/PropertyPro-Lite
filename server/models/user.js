

class userModel {
    contructor() {
        this.users = [{
            id: 1,
            email: 'luqman@test.com',
            firstName: 'luqman',
            lastName: 'luke',
            password: 'testklasdnkl',
            address: 'murugo',
        },
        {id: 2,
        email: 'luqman@test.com',
        firstName: 'neyamr',
        lastName: 'kyre',
        password: 'lsdmcklsdcsdmlmsd',
        address: 'murugo'
        },
        {id: 3,
        email: 'luqman@test.com',
        firstName: 'lebron',
        lastName: 'kyre',
        password: 'kndjkndisnksndio',
        address: 'murugo',
        },
        
        {id: 4,
        email: 'luqman@test.com',
        firstName: 'jay',
        lastName: 'kyle',
        password: 'tlksmcklsdmcosijdmkl',
        address: 'murugo',
        },
    
}];
}

findUser(email) {
    return this.users.find(user => user.email === email);
}

createUser(user) {
    const newUser = this.users.push({ id: this.users.length + 1, ...user });
}

}

export default new userModel();
