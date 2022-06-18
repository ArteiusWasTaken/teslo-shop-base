interface SeedData {
  pokemon: SeedEntry[];
}

interface SeedEntry {
  pnumber: number;
  pname: string;
  rname: string[];
  rtotal: number[];
  rid: number[];
}

export const seedDataPoke: SeedData = {
  pokemon: [
    {
      pnumber: 1,
      pname: "Rowlet",
      rname: ["Number Caught", "Seen use Leafage"],
      rtotal: [5, 15],
      rid: [0, 1],
    },
    {
      pnumber: 2,
      pname: "Dartrix",
      rname: ["Number Caught", "Seen use Leafage"],
      rtotal: [5, 15],
      rid: [0, 1],
    },
  ],
};
