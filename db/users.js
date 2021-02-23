const { client } = require('./index');
const { hash, compare } = require('bcrypt');

const createUser = async ({
	firstName,
	lastName,
    email,
    address,
	imageUrl,
	username,
	password
}) => {
	try {
		const hashedPass = await hash(password, 10);

		const {
			rows: [newUser]
		} = await client.query(
			`insert into users(firstname, lastname, email, address, imageURL, username, password ) values($1, $2, $3, $4, $5, $6, $7) returning *`,
			[
				firstName,
				lastName,
                email,
                address,
				imageUrl,
				username,
				hashedPass,
				
			]
		);

		delete newUser.password;

		return newUser;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

module.exports = { createUser };