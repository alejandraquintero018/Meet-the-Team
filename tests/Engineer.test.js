const Engineer = require('../lib/Engineer');

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Engineer('Allie', 1, 'allie@gmail.com'); 

        expect(typeof me).toBe('object'); 
    })

    it('can set a id via contructor', () => {
        const me = new Engineer('Allie', 1, 'allie@gmail.com'); 

        expect(me.id).toEqual(1); 
    })

    it('can set a email via contructor', () => {
        const me = new Engineer('Allie', 1, 'allie@gmail.com'); 

        expect(me.email).toEqual('allie@gmail.com'); 
    })

    it('can get email via getEmail() method', () => {
        const me = new Engineer('Allie', 1, 'allie@gmail.com'); 

        expect(me.getEmail()).toEqual('allie@gmail.com'); 
    })

    it('can get name via getName() method', () => {
        const me = new Engineer('Allie', 1, 'allie@gmail.com'); 

        expect(me.getName()).toEqual('Allie'); 
    })

    it('can get id via getId() method', () => {
        const me = new Engineer('Allie', 1, 'allie@gmail.com'); 

        expect(me.getId()).toEqual(1); 
    })

    it('can get github via getGithub() method', () => {
        const me = new Engineer('Allie', 1, 'allie@gmail.com', 'alejandraquintero018'); 

        expect(me.getGithub()).toEqual('alejandraquintero018'); 
    })

})