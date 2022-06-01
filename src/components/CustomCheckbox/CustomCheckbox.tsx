import './CustomCheckbox.css';

export const CustomCheckbox = (): JSX.Element => {
  return (
    <>
      <label htmlFor='custom-checkbox'>
        <input id='custom-checkbox' type='checkbox' className='checkbox' />
        <span className='checkbox-new' />
        <span>кастомный чекбокс</span>
      </label>
    </>
  );
};
