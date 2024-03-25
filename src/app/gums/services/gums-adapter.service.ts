//types
import AbstractAdapterService from '../../../services/abstract/abstractAdapter.service';
// import type { IItemDataToDisplay, ItemsDataToDisplayListType } from '../../../types';
import type {
  IGumsItem,
  IGumsPackage,
  IGumsData,
  IGumsLogs,
  IGumsSettings,
} from '../types/data-types';

class GumsAdapterService extends AbstractAdapterService<
  IGumsPackage,
  IGumsData,
  IGumsItem,
  IGumsLogs,
  IGumsSettings
> {}

// class GumsAdapterService {
//   adaptDataToApp(data: IGumsPackage): IGumsData {
//     const adaptedData: IGumsData = {};

//     data.items.forEach((item: IGumsItem) => {
//       adaptedData[item.UNID] = item;
//     });
//     return adaptedData;
//   }

//   adaptDataToView(data: IGumsData): GumsItemsListType {
//     const itemsArray: GumsItemsListType = [];

//     for (const item in data) {
//       itemsArray.push(data[item]);
//     }

//     return itemsArray;
//   }

//   adaptItemDataToDisplay(item: IGumsItem): IItemDataToDisplay {
//     return {
//       UNID: item.UNID,
//       manufactured: item.manufactured,
//       productName: item.productName,
//       systemCode: item.systemCode,
//       description: item.description,
//       additionalInfo: item.additionalInfo,
//       image: item.image,
//       amount: item.amount,
//       unitsOfMeasurement: item.unitsOfMeasurement,
//       logs: item.logs,
//       color: item.color,
//     };
//   }

//   adaptItemsDataToDisplayList(data: IGumsData): ItemsDataToDisplayListType {
//     const dataAdaptedToView = this.adaptDataToView(data);
//     const adaptedData = dataAdaptedToView.map((item) => {
//       return this.adaptItemDataToDisplay(item);
//     });
//     return adaptedData;
//   }
// }

const gumsAdapterService = new GumsAdapterService();

export default gumsAdapterService;
