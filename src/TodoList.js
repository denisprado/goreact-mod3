import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { dispatch } from "rxjs/internal/observable/range";

const TodoList = ({ todos, addTodo }) => {
  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("Novo Todo")}>Adicionar</button>
    </Fragment>
  );
};

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

// variável que recebe os estados do redux e mapeia para props do componente local
const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: text =>
    dispatch({
      type: "ADD_TODO",
      payload: { text }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
