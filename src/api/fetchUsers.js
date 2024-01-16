import { Chance } from "chance";

const chance = new Chance();

export const fetchUsers = () => {
  return chance.name({ middle: true });
};
