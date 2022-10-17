import './App.scss';
import {FC, useEffect} from 'react';
import {RootState} from './redux/store';
import Form from './components/Form';
import Todo from './components/Todo';
import {useDispatch, useSelector} from 'react-redux';
import {getStoredList, objType as todoType} from './redux/todoReducer';
import {isPropertySignature} from 'typescript';

const App: FC = () => {
  const dispatch = useDispatch();
  const todoList: any = useSelector<RootState>(state => state.todoList);

  const list = todoList.map((todo: todoType) => (
    <Todo key={todo.id} id={todo.id} date={todo.date} time={todo.time}>
      {todo.description}
    </Todo>
  ));

  useEffect(() => {
    const storedList: string | null = localStorage.getItem('todo_list');
    if (storedList) dispatch(getStoredList(JSON.parse(storedList)));
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>Todo</h1>
        <h2>With Redux</h2>
      </div>
      <div className="container">
        <Form />
        <ul className="todo-list">{list}</ul>
      </div>
    </div>
  );
};

export default App;
