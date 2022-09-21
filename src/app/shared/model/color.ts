export class ColorSwatch {
  colorCode!: string;
  color!: string;
  label!: string;
  isLightColor!: boolean;
  isSelected!: boolean;
  constructor(obj2clone?: ColorSwatch, modifierObj?: {}) {
    if (obj2clone) {
      Object.assign(this, obj2clone);
    }
    if (modifierObj) {
      Object.assign(this, modifierObj);
    }
  }
}
