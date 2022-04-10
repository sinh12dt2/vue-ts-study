export default interface UserEntity {
  id: number;
  name: string;
  say(a: string, b: string): string;
}
