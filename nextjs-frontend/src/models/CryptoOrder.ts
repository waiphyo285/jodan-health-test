export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
  id: string;
  status: CryptoOrderStatus;
  orderDetails: string;
  orderID: string;
  currency: string;
  sourceName: string;
  sourceDesc: string;
  cryptoCurrency: string;
  amountCrypto: number;
  amount: number;
  orderDate: number;
}
