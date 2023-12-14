/*
  분산적인 조건부 타입
*/

// type StringNumberSwitch<T> = [T] extends [number] ? string : number;
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> |
// StringNumberSwitch<string>
let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 3단계
// number | string

/*
  실용적인 예제
*/

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 3단계
// number | never | boolean -> 공집합 합집합은 공집합 제외
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B =  Extract<number | string | boolean, string>
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 3단계
// never | string | never
// string