import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddTodo from './components/addTodo';
import Header from './components/base_components/header';
import TodoList from './components/todoList';
import data from './assets/data.json';
import * as Store from './state/store';
import { fetchRecords } from './state/ducks/record/actions';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    const { records, fetchRecords } = this.props;

    fetchRecords({ data });
  }

  render() {
    return (
      <div>
        <Header />
        <TodoList records={this.props.records} />
      </div >
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.record.records,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchRecords: bindActionCreators(fetchRecords, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
