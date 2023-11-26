export class StringConverter {
  private originStr: any;

  constructor(str: string) {
    this.originStr = str;
  }

  capitalize(): StringConverter {
    this.originStr =
      this.originStr.charAt(0).toUpperCase() + this.originStr.slice(1);
    return this;
  }

  lowercase(): StringConverter {
    this.originStr = this.originStr.toLowerCase();
    return this;
  }

  append(suffix: string): StringConverter {
    this.originStr += suffix;
    return this;
  }

  prepend(prefix: string): StringConverter {
    this.originStr = prefix + this.originStr;
    return this;
  }

  toNumber(): StringConverter {
    this.originStr = Number(this.originStr);
    return this;
  }

  finish(): string {
    return this.originStr;
  }
}

export class NumberConverter {
  private originNum: any;

  constructor(num: number) {
    this.originNum = num;
  }

  add(value: number): NumberConverter {
    this.originNum += value;
    return this;
  }

  subtract(value: number): NumberConverter {
    this.originNum -= value;
    return this;
  }

  multiplyBy(value: number): NumberConverter {
    this.originNum *= value;
    return this;
  }

  divideBy(value: number): NumberConverter {
    if (value === 0) throw new Error('Cannot divide by zero.');
    this.originNum /= value;
    return this;
  }

  toString(): NumberConverter {
    this.originNum = String(this.originNum);
    return this;
  }

  finish(): number {
    return this.originNum;
  }
}

export class ObjectConverter {
  private originObj: {
    [key: string]: any;
  };

  constructor(obj: { [key: string]: any }) {
    this.originObj = obj;
  }

  addProperty(key: string, value: any): ObjectConverter {
    this.originObj[key] = value;
    return this;
  }

  removeProperty(key: string): ObjectConverter {
    delete this.originObj[key];
    return this;
  }

  finish(): { [key: string]: any } {
    return this.originObj;
  }
}

export class ArrayConverter {
  private originArr: any[];

  constructor(arr: any[]) {
    this.originArr = arr;
  }

  addElement(value: any): ArrayConverter {
    this.originArr.push(value);
    return this;
  }

  removeElement(index: number): ArrayConverter {
    if (index >= 0 && index < this.originArr.length) {
      this.originArr.splice(index, 1);
    }
    return this;
  }

  mergeArray(anotherArr: any[]): ArrayConverter {
    this.originArr.push(...anotherArr);
    return this;
  }

  finish(): any[] {
    return this.originArr;
  }
}
