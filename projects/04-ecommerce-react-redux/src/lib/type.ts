export interface MobileDevice {
  name: string;
  img: string;
  detailSpec: DetailSpec[];
  quickSpec: QuickSpec[];
}

export interface DetailSpec {
  category: string;
  specifications: QuickSpec[];
}

export interface QuickSpec {
  name: string;
  value: string;
}

export interface Device {
  img: string;
  title: string;
  description: string;
  deal: { price?: number; memory?: string };
}

export interface DeviceToBuy {
  id: string;
  img: string;
  title: string;
  description: string;
  price?: number;
  category: string;
  mobileDetails: {
    size: string;
    resolution: string;
    ram: string;
    memory: string;
    batterySize: string;
  };
}

export type DeviceToBuyWithOutMobileDetails = Omit<
  DeviceToBuy,
  'mobileDetails'
>;
