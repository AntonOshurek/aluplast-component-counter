import { Link } from 'react-router-dom';
//variables
import { CounterText, UnitsOfMeasurementText } from '../../../variables';
//types
import type { IItemDataToDisplay } from '../../../types/';
//style
import style from './items-list-item.module.scss';

interface IItemsListItemProps {
  item: IItemDataToDisplay;
  measurementText: UnitsOfMeasurementText;
}

const ItemsListItem = ({ item, measurementText }: IItemsListItemProps): JSX.Element => {
  const { UNID, productName, description, systemCode, packagingInfo, image, amount } = item;

  return (
    <li className={`${style['items-list-item']} unselectable`} key={UNID}>
      <div className={style['items-list-item__info']}>
        <h2 className={`content-primary-a heading-small`}>{productName}</h2>
        <p className={`content-primary-a paragraph-large`}>
          <span className={`content-secondary-a`}>Opis:</span> {description}
        </p>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`content-secondary-a`}>Numer:</span> {systemCode}
        </p>
        <p className={`content-primary-a paragraph-small`}>
          <span className={`content-secondary-a`}>Opakowanie:</span> {packagingInfo}
        </p>
      </div>
      <img
        className={style['items-list-item__image']}
        src={image}
        alt={description}
        width={150}
        height={150}
      />
      <div className={`${style['items-list-item__amount']} paragraph-primary-a label-medium`}>
        {measurementText} <span className="paragraph-primary-a heading-medium">{amount}</span>
      </div>
      <Link className={style['items-list-item__link']} to={`${UNID}`}>
        <span className="visually-hidden">
          {CounterText.OPEN_COUNTER} {productName}
        </span>
      </Link>
    </li>
  );
};

export default ItemsListItem;
