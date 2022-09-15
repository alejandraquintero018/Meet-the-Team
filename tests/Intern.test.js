const Employee = require('../lib/Employee'); 
const Intern = require('../lib/Intern'); 

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(typeof me).toBe('object'); 
    })

    it('can set a id via contructor', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(me.id).toEqual(1); 
    })

    it('can set a email via contructor', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(me.email).toEqual('allie@gmail.com'); 
    })

    it('can set a school via contructor', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(me.school).toEqual('UCR'); 
    })

    it('can get email via getEmail() method', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(me.getEmail()).toEqual('allie@gmail.com'); 
    })

    it('can get name via getName() method', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(me.getName()).toEqual('Allie'); 
    })

    it('can get id via getId() method', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(me.getId()).toEqual(1); 
    })

    it('can get school via getSchool() method', () => {
        const me = new Intern('Allie', 1, 'allie@gmail.com', 'UCR'); 

        expect(me.getSchool()).toEqual('UCR'); 
    })

})