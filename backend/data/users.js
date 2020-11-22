import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Benjamin Franklin',
        email: 'president@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Jon Snow',
        email: 'dead@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users