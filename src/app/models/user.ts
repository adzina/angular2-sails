export class User {
	tableName:"users";
	attributes: {
		login: {type: 'string', required: 'true'},
		password: {type: 'string', required:'true'}
	}
}
