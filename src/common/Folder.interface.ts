import type EntityInterface from "./Entity.interface";

export default interface FolderInterface extends EntityInterface {
  children?: Array<EntityInterface>;
}
