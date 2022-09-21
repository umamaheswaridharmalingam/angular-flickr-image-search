export interface Photo {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export class Photos {
  page!: number;
  pages!: number;
  perpage!: number;
  total!: number;
  photo!: Photo[];
  constructor(obj2clone?: Photos, modifierObj?: {}) {
    if (obj2clone) {
      Object.assign(this, obj2clone);
    }
    if (modifierObj) {
      Object.assign(this, modifierObj);
    }
  }
}

export class PhotosRootModel {
  photos!: Photos;
  stat!: string;
  constructor(obj2clone?: PhotosRootModel, modifierObj?: {}) {
    if (obj2clone) {
      Object.assign(this, obj2clone);
    }
    if (modifierObj) {
      Object.assign(this, modifierObj);
    }
  }
}

export class SearchFilterModel {
  orientation!: string;
  searchInText!: boolean;
  contentType!: string;
  fromDate!: Date;
  toDate!: Date;
  constructor(obj2clone?: SearchFilterModel, modifierObj?: {}) {
    if (obj2clone) {
      Object.assign(this, obj2clone);
    }
    if (modifierObj) {
      Object.assign(this, modifierObj);
    }
  }
}
