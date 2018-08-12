import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface GuestToStatus {
  name: string;
  position: number;
  checked_in: boolean;
  checked_out: boolean;
  description: string;
}

const ELEMENT_DATA: GuestToStatus[] = [
  {
    position: 1,
    name: 'Mr Hydrogen',
    checked_in: true,
    checked_out: true,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Mr & Mrs Helium',
    checked_in: true,
    checked_out: true,
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Mr & Mrs Lithium',
    checked_in: true,
    checked_out: true,
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Mr & Mrs Beryllium',
    checked_in: true,
    checked_out: true,
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Mr & Mrs Boron',
    checked_in: false,
    checked_out: false,
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Mr & Mrs Carbon',
    checked_in: true,
    checked_out: false,
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Mr & Mrs Nitrogen',
    checked_in: false,
    checked_out: false,
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Mr & Mrs Oxygen',
    checked_in: false,
    checked_out: false,
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    name: 'Mr & Mrs Fluorine',
    checked_in: true,
    checked_out: false,
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    name: 'Mr & Mrs Neon',
    checked_in: true,
    checked_out: false,
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StaffComponent  {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'checked_in', 'checked_out', 'position'];
  expandedElement: GuestToStatus;

  applyFilter(filterValue: GuestToStatus) {
    // this.dataSource.filter = g2s => g2s.checked_in === filterValue.checked_in;
  }
}
