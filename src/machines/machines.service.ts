import { Injectable } from '@nestjs/common';
import { dataMachines } from './machines.data';

export interface Tokarnye_stanki {
  name: string;
  description?: string;
  structure?: {
    title: string;
    description: string[][];
  };
  equipping?: {
    title: string;
    description: string[][];
  };
  job_description?: {
    title: string;
    sub_title_1: string;
    description_1: string[][];
    sub_title_2: string;
    description_2: string[][];
  };
  specifications?: {
    title: string;
    description: string[][];
  };
  documentation?: {
    title: string;
    description: string[][];
  };
  price?: {
    title: string;
    description: string[][];
  };
  warranty?: {
    title: string;
    description?: string[][];
  };
  photos?: string[];
}

export interface Press {
  name: string;
  description?: string;
  basic_information?: string[][];
  specifications?: string[][];
  price?: {
    title: string;
    description: string[][];
  };
  warranty?: {
    title: string;
    description?: string[][];
  };
  photos?: string[];
}

interface Machine {
  type: string;
  modifications: Tokarnye_stanki[] | Press[];
}

@Injectable()
export class MachinesService {
  private machines: Machine[] = dataMachines as Machine[];

  getCatalog(): string[] {
    return this.machines.map((machine) => machine.type);
  }

  getMachinesByType(type: string): Tokarnye_stanki[] | Press[] {
    const machine = this.machines.find((machine) => machine.type === type);
    return machine ? machine.modifications : [];
  }

  getMachineByName(type: string, name: string): Tokarnye_stanki | Press | null {
    const machine = this.machines.find((machine) => machine.type === type);
    if (machine) {
      return (
        machine.modifications.find(
          (modification) => modification.name === name,
        ) || null
      );
    }
    return null;
  }
}
