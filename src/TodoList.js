import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TodoList = props => {
  console.log(props);

  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
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

export default connect(mapStateToProps)(TodoList);
