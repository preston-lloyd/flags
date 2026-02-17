export type BooleanFlag = {
  key: string;
  defaultValue: boolean;
  description?: string;
  value: () => boolean | boolean;
};

export type VariantFlag = {
  key: string;
  defaultValue: string;
  description?: string;
  variants: readonly string[];
  value: () => string | string;
};

export type Flag = BooleanFlag | VariantFlag;