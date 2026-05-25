//#endregion
//#region src/data.ts
var e = {
	users: [
		{
			id: 1,
			name: "Juan García",
			email: "juan@example.com",
			role: "admin"
		},
		{
			id: 2,
			name: "María López",
			email: "maria@example.com",
			role: "user"
		},
		{
			id: 3,
			name: "Carlos Rodríguez",
			email: "carlos@example.com",
			role: "user"
		}
	],
	projects: [{
		id: 1,
		name: "Proyecto A",
		description: "Descripción del proyecto A",
		status: "active"
	}, {
		id: 2,
		name: "Proyecto B",
		description: "Descripción del proyecto B",
		status: "completed"
	}]
};
//#endregion
export { e as default };
