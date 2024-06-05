import { Controller, Get, Param } from '@nestjs/common';
import { MachinesService } from './machines.service';

@Controller()
export class MachinesController {
  constructor(private readonly machinesService: MachinesService) {}

  @Get('catalog')
  getCatalog() {
    return this.machinesService.getCatalog();
  }

  @Get('tokarnye-stanki')
  getAllTokarnyeStanki() {
    return this.machinesService.getMachinesByType('tokarnye-stanki');
  }

  @Get('tokarnye-stanki/:name')
  getTokarnyeStankiByName(@Param('name') name: string) {
    return this.machinesService.getMachineByName('tokarnye-stanki', name);
  }

  @Get('press')
  getAllPress() {
    return this.machinesService.getMachinesByType('press');
  }

  @Get('press/:name')
  getPressaByName(@Param('name') name: string) {
    return this.machinesService.getMachineByName('press', name);
  }

  @Get('pruzhinonavivochnye-stanki')
  getAllPruzhinoStanki() {
    return this.machinesService.getMachinesByType('pruzhinonavivochnye-stanki');
  }

  @Get('pruzhinonavivochnye-stanki/:name')
  getPruzhinoStankByName(@Param('name') name: string) {
    return this.machinesService.getMachineByName(
      'pruzhinonavivochnye-stanki',
      name,
    );
  }

  @Get('listopravilnye-mashiny')
  getAllListopravMashiny() {
    return this.machinesService.getMachinesByType('listopravilnye-mashiny');
  }

  @Get('listopravilnye-mashiny/:name')
  getListopravMashinyByName(@Param('name') name: string) {
    return this.machinesService.getMachineByName(
      'listopravilnye-mashiny',
      name,
    );
  }

  @Get('special-offers')
  getAllSpecialOffers() {
    return this.machinesService.getMachinesByType('special-offers');
  }

  @Get('special-offers/:name')
  getSpecialOfferByName(@Param('name') name: string) {
    return this.machinesService.getMachineByName('special-offers', name);
  }
}
