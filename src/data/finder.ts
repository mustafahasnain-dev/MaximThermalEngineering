export interface FinderOption {
  key: string;
  title: string;
  need: string;
  items: string[];
}

export const finder: FinderOption[] = [
  {
    key: 'Generator',
    need: 'Industrial radiator',
    title: 'Generator cooling',
    items: [
      'Diesel and gas generator radiators, new or refurbished',
      'Remote radiators with fan systems',
      'Fuel coolers for all generator brands',
      'Overhauling, installation and emergency works',
    ],
  },
  {
    key: 'Heavy machinery',
    need: 'Heavy machinery radiator',
    title: 'Heavy machinery cooling',
    items: [
      'Radiators and coolers for excavators, wheel loaders, bulldozers and dump trucks',
      'Cranes, drilling rigs, mining and material handling equipment',
    ],
  },
  {
    key: 'Air compressor',
    need: 'Oil, air or fuel cooler',
    title: 'Compressor cooling',
    items: [
      'Oil and air coolers for Atlas Copco, CompAir, Ingersoll Rand, Kaeser and BOGE',
      'Compressor overhauling and installation services',
    ],
  },
  {
    key: 'Process plant',
    need: 'Heat exchanger',
    title: 'Process and plant cooling',
    items: [
      'Shell & tube, air cooled and fin tube heat exchangers',
      'Waste heat recovery units',
      'Boiler repair, retubing and burner services',
    ],
  },
  {
    key: 'Building or HVAC',
    need: 'HVAC solution',
    title: 'Building and HVAC cooling',
    items: [
      'AHU installation, ducting and ventilation',
      'Chiller and cooling tower installation',
      'Condenser and evaporator coils',
    ],
  },
  {
    key: 'Vehicle',
    need: 'Something else',
    title: 'Vehicle cooling',
    items: ['Passenger car radiators', 'Three-wheeler radiators', 'Tractor radiators, all models'],
  },
];
