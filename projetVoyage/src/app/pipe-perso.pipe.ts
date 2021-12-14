import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePerso'
})
export class PipePersoPipe implements PipeTransform {

  transform(chaine:string): string {
    return "~~ "+ chaine +"~~";
  }

}
