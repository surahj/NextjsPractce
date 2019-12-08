class Prices extends React.Component {
    state = {
        currency: 'GBP'
    }
    render() {
        let list = '';
        if (this.state.currency === 'USD') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.USD.description}: &nbsp;
            <span className="badge badge-primary badge-pill">{this.props.bpi.USD.code}</span> &nbsp;
            <strong>{this.props.bpi.USD.rate}</strong>
            </li>

        } else if (this.state.currency === 'GBP') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.GBP.description}: &nbsp;
            <span className="badge badge-primary badge-pill">{this.props.bpi.GBP.code}</span> &nbsp;
            <strong>{this.props.bpi.GBP.rate}</strong>
            </li>
        }
        else if (this.state.currency === 'EUR') {
            list = <li className="list-group-item">
                Bitcoin rate for {this.props.bpi.EUR.description}: &nbsp;
            <span className="badge badge-primary badge-pill">{this.props.bpi.EUR.code}</span> &nbsp;
            <strong>{this.props.bpi.EUR.rate}</strong>
            </li>
        }
        return (
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br />
                <br />
                <select onChange={e=>{this.setState({currency:e.target.value})}} className='form-control'>
                    <option value='USD'>USD</option>
                    <option value='GBP'>GBP</option>
                    <option value='EUR'>EUR</option>
                </select>
            </div>
        )
    }
}

export default Prices