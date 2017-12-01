import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import Header from './components/base_components/header';
import TodoList from './components/todoList';
import data from './assets/data.json';
import * as Store from './state/store';
import { fetchRecords } from './state/ducks/record/actions';

export class App extends Component {
  componentDidMount() {
    console.log('this.props', this.props);
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
