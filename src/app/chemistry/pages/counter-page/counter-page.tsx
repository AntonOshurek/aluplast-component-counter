//layouts
import { CounterPageLayout } from '../../../../layouts';
//components
import { Counter } from '../../components';
// import { CounterHeader } from '../../../../components';
import { CountableItemInfo } from '../../components/';
//variables
import { ChemistryAppRouting, CounterText } from '../../../../variables';
//style
import style from './counter-page.module.scss';

const CounterPage = (): JSX.Element => {
  return (
    <CounterPageLayout
      backLink={ChemistryAppRouting.ROOT}
      headerTitle={CounterText.CHEMISTRY_COUNTER_TITLE}
    >
      <main className={style['counter-page']}>
        <CountableItemInfo />
        <Counter />
      </main>
    </CounterPageLayout>
  );
};

export default CounterPage;
