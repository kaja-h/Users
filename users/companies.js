async function fetchData() {
    try {
        const response = await fetch("http://localhost:3000/users").then(response => response.json());
        const resp = await fetch("http://localhost:3000/companies").then(resp => resp.json());

        const list = resp.map(function(company) {
            return {
                name: company.name,
                users: response.filter(function (user) {
                    return user.uris.company === company.uri;
                }).map(function (user) {
                    return {
                        id: user.name
                    }
                })
            }
        });
        const table = document.getElementById('table');
        list.forEach(list => {
            const tr = document.createElement('tr');
            tr.innerHTML = '<td>' + list.name + '</td>' +
            (list.users).forEach(index => {
                tr.innerHTML = '<td>' + list.users[index] + '</td>';
            });
            table.appendChild(tr);
        });
        console.log(response, resp, list);
        return Promise.all([response, resp]);

      } catch (err) {
        console.log(err);
      }
}
fetchData()

