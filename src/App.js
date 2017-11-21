import React, { Component } from 'react';
import AddTodo from './components/addTodo';
import Header from './components/base_components/header';
import TodoList from './components/todoList';
import { connect } from 'react-redux'
import data from './assets/data.json'
import * as Store from './state/store'
import { fetchRecords } from './state/ducks/record/actions'

class App extends Component {
  componentDidMount() {
    const { records, fetchRecords } = this.props;
  }

  render() {
    return (
      <div>
        <Header />

        My App

        {/* < AddTodo submitTodo={() => { }} /> */}
        <TodoList records={this.props.records} />
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  records: state.records
});

const mapDispatchToProps = (dispatch) => (
  fetchRecords
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
