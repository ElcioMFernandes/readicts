export interface RedisResponse {
  key: string;
  value: {
    name: string;
    email: string;
    avatar: string;
    country: string;
  };
}
