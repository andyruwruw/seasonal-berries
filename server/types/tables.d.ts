export interface Farm {
  hrefs: ExternalHrefs;

  operatingHours: OperationHours[];

  currentOperatingHours: OperationHours[];

  number: string;

  address: string;

  location: Location;

  viewport: Viewport;

  rating: number;

  website: string;

  utcOffsetMinutes: number;

  userRatingCount: number;

  displayName: string;

  photos: Photo[];
}

export interface ExternalHrefs {
  google?: string;
}

export interface OperationHours {
  open: OperationHoursNode;

  close: OperationHoursNode;
}

export interface OperationHoursNode {
  day: number;

  hour: number;

  minute: number;
}

export interface Location {
  latitude: number;

  longitude: number;
}

export interface Viewport {
  low: Location;

  high: Location;
}

export interface Photo {
  name: string; 

  author: string;

  uri: string;
}