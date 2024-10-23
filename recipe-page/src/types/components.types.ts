export interface Instruction {
  title?: string;
  text: string;
  optional?: boolean;
}

export interface Ingredient {
  title?: string;
  text: string;
  optional?: boolean;
}

export interface Nutrition {
  title: string;
  text: string;
}


export interface CardProps {
  title: string;
  description: string;
  srcImg: string;
  altImage: string;
  instructions: Instruction[];
  ingredients: Ingredient[];
  nutrition: Nutrition[];
}

export interface ListProps {
  items: Instruction[] | Ingredient[];
  decimal?: boolean;
}