import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import './css/styles.css';
import Table from "react-bootstrap/Table";
import table_button from './css/images/table_button.png';


class Table_Smile extends React.Component {
  constructor(props) {
    super();

    let data = [
      { 
        "name": "column_int",
        "type": "Integer",
        "values": ["1","2","3","4","5","6","8"] 
      },
      { 
        "name": "column_object",
        "type": "Object",
        "values": ["a", "b", "b", "a", "a","b","aba","aaba"]
      },
    ];

    this.state = { data, labelFilter_eq: null, 
      textFilter: null,
      labelFilter_more: null,
      labelFilter_less: null,
      textFilter_more: null,
      textFilter_rx: null,
    };
  }

  RemoveEachRow = (index) => {
    console.log("-----", index);
    this.setState({
      data: this.state.data.filter((obj, idx) => idx !== index)
    });
  };

  render() {
    let filteredData = this.state.data;

    // filters for integer
    if (this.state.labelFilter_eq) {
      filteredData = this.state.data.filter(
        (dt) => dt.label === this.state.labelFilter_eq
      );
    }

    if (this.state.labelFilter_more) {
      filteredData = this.state.data.filter(
        (dt) => dt.label >= this.state.labelFilter_more
      );
    } 

    if (this.state.labelFilter_less) {
      filteredData = this.state.data.filter(
        (dt) => dt.label <= this.state.labelFilter_less
      );
    }

    // filters for object
    if (this.state.textFilter) {
      filteredData = this.state.data.filter(
        (dt) => dt.label2 === this.state.textFilter
      );
    }

    if (this.state.textFilter_more) {
      filteredData = this.state.data.filter(
        (dt) => dt.label2.toLowerCase().includes(this.state.textFilter_more.toLowerCase())
      );
    }

    // if (this.state.textFilter_rx) {
    //   filteredData = this.state.data.filter(
    //     (dt) => this.state.textFilter_rx.test(dt.label2)
    //     // dt.label2 === this.state.textFilter_rx
    //     // isAlpha = /^[A-Z]+$/i.test(str)
    //   );
    // }

    return (
      <div className="container">
        <div className="row">
          <Table bordered hover className="bordered_table">
            <thead>
              <tr>
                <th className='header_cell'>
                  Index
                </th>
                <th className='header_cell'>
                  Integer (ID)
                  <div class="dropdown">
                    <button class="btn dropdown-bs-toggle" 
                      type="button" 
                      id="dropdownMenu2" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false">
                      <img src={table_button}/>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li class="dropdown-item">
                        Filtration
                      </li>
                      <li><button class="dropdown-item filters" type="button">
                        <input
                          type="number"
                          value={this.state.labelFilter_eq}
                          placeholder="Input number ="
                          onChange={(e) =>
                            this.setState({ labelFilter_eq: e.target.value })
                          }
                        />
                      </button></li>
                      <li><button class="dropdown-item filters" type="button">
                        <input
                          type="number"
                          value={this.state.labelFilter_more}
                          placeholder="Input number >"
                          onChange={(e) =>
                            this.setState({ labelFilter_more: e.target.value })
                          }
                        />
                      </button></li>
                      <li><button class="dropdown-item filters" type="button">
                        <input
                          type="number"
                          value={this.state.labelFilter_less}
                          placeholder="Input number <"
                          onChange={(e) =>
                            this.setState({ labelFilter_less: e.target.value })
                          }
                        />
                      </button></li>
                    </ul>
                  </div>
                </th>
                <th className='header_cell'>
                  Object
                  <div class="dropdown">
                    <button class="btn dropdown-bs-toggle" 
                      type="button" 
                      id="dropdownMenu2" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false">
                      <img src={table_button}/>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li><button class="dropdown-item" type="button">
                      <input
                        type="text"
                        value={this.state.textFilter}
                        placeholder="Input string"
                        onChange={(e) =>
                          this.setState({ textFilter: e.target.value })
                        }
                      />
                      </button></li>
                      <li><button class="dropdown-item" type="button">
                      <input
                        type="text"
                        value={this.state.textFilter_more}
                        placeholder="Input string >"
                        onChange={(e) =>
                          this.setState({ textFilter_more: e.target.value })
                        }
                      />
                      </button></li>
                      {/* <li><button class="dropdown-item" type="button">
                      <input
                        type="text"
                        value={this.state.textFilter_rx}
                        placeholder="Input string regex"
                        onChange={(e) =>
                          this.setState({ textFilter_rx: e.target.value })
                        }
                      />
                      </button></li> */}
                    </ul>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((entry, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{entry.label}</td>
                  <td>{entry.label2}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Table_Smile;