const TableForm = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map( user => {
                    return (
                    <tr key={user.id} onClick={() => props.onSelect(user)}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td style={{width: '100px'}}>
                            <button className="button-tbl" 
                                    onClick={event => props.onDelete(event, user.id)}>
                                Excluir
                            </button>
                        </td>
                    </tr>
                    )}
                )}
            </tbody>
        </table>
    )
}

export default TableForm