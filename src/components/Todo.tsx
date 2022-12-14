import './Todo.scss';
import React, {FC} from 'react';
import Icons from './Icons';
import {removeTodo} from '../redux/todoReducer';
import {useDispatch} from 'react-redux';

type component = FC<{id: string; time?: string; date?: string; children: React.ReactNode}>;

const Todo: component = props => {
  const dispatch = useDispatch();
  const date = props.date ? `${props.date}` : undefined;
  const time = props.time ? `${props.time}` : undefined;

  const timestamp = (date || time) && (
    <span className="timestamp">
      {date} {time && '•'} {time}
    </span>
  );

  const remove = () => dispatch(removeTodo({id: props.id}));

  return (
    <li className="list__item">
      <div className="list__item--info">
        <span className="description">{props.children}</span>
        {timestamp}
      </div>

      <div className="list__item--btns">
        <button className="complete" onClick={remove}>
          <Icons id="confirm" />
        </button>
        <button className="delete" onClick={remove}>
          <Icons id="delete" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
