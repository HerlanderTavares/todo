import React, {useRef} from 'react';
import './Form.scss';
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoReducer';

export default function Form() {
  const dispatch = useDispatch();
  const container = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  const focusDescription: any = (e: React.FocusEvent) => {
    const style: any = container.current!.style;
    if (descriptionRef.current === document.activeElement) style.borderColor = 'lightcoral';
    else style.borderColor = null;
  };

  const focusFields = (ref: HTMLInputElement, fieldName: string) => (ref.type = fieldName);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const obj = {
      description: descriptionRef.current!.value,
      date: dateRef.current!.value,
      time: timeRef.current!.value,
    };

    dispatch(addTodo(obj));

    descriptionRef.current!.value = '';
    dateRef.current!.value = '';
    timeRef.current!.value = '';
    dateRef.current!.type = 'text';
    timeRef.current!.type = 'text';
  };

  return (
    <form className="form" onSubmit={submit}>
      <div className="description" ref={container}>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          ref={descriptionRef}
          onFocus={focusDescription}
          onBlur={focusDescription}
        />
        <button type="submit">+</button>
      </div>

      <input
        type="text"
        name="date"
        id="date"
        className="date"
        placeholder="DD/MM/YYYY"
        ref={dateRef}
        onFocus={e => focusFields(e.target, 'date')}
      />

      <input
        type="text"
        name="time"
        id="time"
        className="time"
        placeholder="HH:MM"
        ref={timeRef}
        onFocus={e => focusFields(e.target, 'time')}
      />
    </form>
  );
}
