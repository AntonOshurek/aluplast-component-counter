//types
import type { IButtonProps } from '../../../types/';
//styles
import style from './button-secondary.module.scss';

const ButtonSecondary = ({ text, clickHandler }: IButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${style['button-secondary']} label-large content-primary-a`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
