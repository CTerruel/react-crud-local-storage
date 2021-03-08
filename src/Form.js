const Form = props => {
    return (
        <div className="form">
            <div>
                <label>ID: </label><br/>
                <input type="number" ref={props.idRef} disabled></input>
            </div>
            <br/>
            <div>
                <label>Nome: </label><br/>
                <input type="text" ref={props.nameRef} autoFocus></input>
            </div>
            <br/>
            <div>
                <label>E-mail: </label><br/>
                <input type="text" ref={props.emailRef}></input>
            </div>
            <br/>
            <button onClick={props.onUpdate}>Atualizar</button>
            <button onClick={props.onInsert} disabled={props.updating}>Adicionar</button>
        </div>
    )
}

export default Form