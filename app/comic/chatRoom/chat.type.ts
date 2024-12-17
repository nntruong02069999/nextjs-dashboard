export type ReactionType = "like" | "love" | "lol" | "wow" | "sad" | "angry";

export interface Reaction {
  type: ReactionType;
  customerId: number;
  createdAt: number;
}

export interface Chat {
  _id?: string;
  customerId: number;
  message: string;
  gif?: string;
  createdAt: number;
  customerInfo: {
    name: string;
    avatar: string;
    colorProfile: string;
  };
  reactions?: Reaction[];
}
