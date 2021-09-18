import {Injectable} from '@nestjs/common';
import {SetDto} from "@getstrong/dtos";

@Injectable()
export class AppService {
  private sets: SetDto[] = [{setNumber: 0, weight: 50, reps: 4}]

  getData(): SetDto[] {
    return this.sets;
  }

  updateSet(setDto: SetDto): SetDto[] {
    const index = this.sets.findIndex((set) => set.setNumber === setDto.setNumber);
    index < 0 ? this.sets.push(setDto): this.sets[index] = setDto;
    return this.sets;
  }
}
