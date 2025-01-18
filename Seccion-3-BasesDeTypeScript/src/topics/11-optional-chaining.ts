export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Toto",
};

const passenger2: Passenger = {
  name: "Melissa",
  children: ["Melissa", "Pepito"],
};

const returnChildrenChilder = (passenger: Passenger): number => {
  //   const howManyChildren = passenger.children?.length || 0;

  if (!passenger.children) {
    return 0;
  }
  const howManyChildren = passenger.children!.length;

  console.log(passenger.name, howManyChildren);
  return howManyChildren;
};

returnChildrenChilder(passenger1);
returnChildrenChilder(passenger2);
