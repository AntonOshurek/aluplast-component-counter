//componentsList type we use in main page for show all components in overview page
interface IComponentData {
  title: string;
  link: string;
  image: string;
}

type ComponentsDataListType = IComponentData[];

//card type we use inside a card components
interface IItemDataToDisplay {
  UNID: string;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  amount: number;
  unitsOfMeasurement: string;
  lastChange?: Date;
  counters: ICounters;
  color: string;
}

type ItemsDataToDisplayListType = IItemDataToDisplay[];

interface ILogItem {
  log: string[];
  name: string;
  lastChange: string | null;
}

interface IItemData {
  UNID: string;
  amount: number;
  manufactured: string;
  productName: string;
  systemCode: string;
  description: string;
  additionalInfo: string;
  image: string;
  color: string;
  counters: ICounters;
  additionalResources: string[];
  packagingInfo: string;
  unitsOfMeasurement: string;
}

interface IData {
  [key: string]: IItemData;
}

interface IPackage {
  dataPackageName: string;
  dataPackageUNID: number;
  dataStorageName: string;
  items: IItemData[];
}

type CountersType = 'BASIC_COUNTER' | 'ADDITIONAL_VALUE_COUNTER';

type OperationBetweenBaseAndAdditionType =
  | 'addition'
  | 'subtraction'
  | 'multiplication'
  | 'division'
  | 'none';

interface ICounter {
  counterSystemName: string;
  counterTitle: string;
  counterLogTitle: string;
  logs: string[];
  lastChange: string | null;
  counterBaseValue: number;
  counterBaseValueTitle: string;
  counterAdditionalValue: number;
  counterAdditionalValueTitle: string;
  counterType: CountersType;
  operationBetweenBaseAndAddition: OperationBetweenBaseAndAdditionType;
}

interface ICounters {
  [key: string]: ICounter;
}

export type {
  IComponentData,
  ComponentsDataListType,
  IItemDataToDisplay,
  ItemsDataToDisplayListType,
  IItemData,
  ILogItem,
  IData,
  IPackage,
  ICounter,
  ICounters,
  OperationBetweenBaseAndAdditionType,
  CountersType,
};
