export class User {
	tableName:"users";
	attributes: {
		first_name: {type:'string', required: 'true'},
    last_name: {type:'string', required: 'true'},
    email: {type: 'string', required: 'true'},
    password: {type: 'string', required:'true'},
    role: {type: 'string', required:'true'}
	}
}
