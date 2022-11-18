import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastrieTagColor'
})
export class PastrieTagColorPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(tag: string): string {
    let color: string;

    switch (tag) {
      case 'sucré':
        color = "bg-primary";
        break;
      case "yummy":
        color = "bg-secondary";
        break;
      case "dessert":
        color = "bg-danger opacity-50";
        break;
      case "chocolat":
        color = "bg-dark";
        break;
      case "poires":
        color = "bg-success";
        break;
      case "fruits":
        color = "bg-success opacity-50";
        break;
      case "framboises":
        color = "bg-danger ";
        break;
      case "bananes":
        color = "bg-warning";
        break;
      default:
        color = "bg-info"
    }
    return `${color}`
  }


}