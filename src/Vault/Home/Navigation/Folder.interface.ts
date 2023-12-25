export default interface FolderInterface {
  uuid: string;
  name: string;
  children: Array<FolderInterface>;
}
