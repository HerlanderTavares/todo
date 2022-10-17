import './Todo.scss';
import React, {FC} from 'react';
import Icons from './Icons';

type component = FC<{time?: string; date?: string; children: React.ReactNode}>;

const Todo: component = props => {
  const date = props.date ? `${props.date}` : undefined;
  const time = props.time ? `${props.time}` : undefined;

  const timestamp = (date || time) && (
    <span className="timestamp">
      {date} {time && '•'} {time}
    </span>
  );

  const remove = () => {};

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
