class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      name: '',
      id: '',
      notes: ''
    };

    this.create = this.create.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//   componentDidMount() {
//     // get all entities - GET
//     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//         "x-rapidapi-key": API_KEY
//       }
//     })
//     .then(response => response.json())
//     .then(response => {
//       this.setState({
//         friends: response
//       })
//     })
//     .catch(err => { console.log(err); 
//     });
//   }

  update(e) {
    // update entity - PUT
    e.preventDefault();

    // this will update entries with PUT
    fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
        "method": "PUT",
        "headers": {
            "x-rapidapi-host": "fairestdb.p.rapidapi.com",
            "x-rapidapi-key": API_KEY,
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify({
            _id: this.state.id,
            name: this.state.name,
            notes: this.state.notes
        })
        })
        .then(response => response.json())
        .then(response => { console.log(response);
        })
        .catch(err => { console.log(err); });
  }



  handleChange(changeObject) {
    this.setState(changeObject)
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Make An API Call in React</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">Add-Update-Delete Friend</legend>
                <label htmlFor="name">
                  Friend Name:
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleChange({ name: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="notes">
                  Friend notes:
                  <input
                    name="notes"
                    id="notes"
                    type="test"
                    className="form-control"
                    value={this.state.notes}
                    onChange={(e) => this.handleChange({ notes: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="id">
                  Friend ID:
                  <input
                    name="id"
                    id="id"
                    type="text"
                    className="form-control"
                    value={this.state.id}
                    onChange={(e) => this.handleChange({ id: e.target.value })}
                    />
                </label>
                <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
                    Update
                </button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);