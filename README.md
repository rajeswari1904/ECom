# CLI Calculator

A small command-line calculator written in JavaScript for Node.js.

## Project purpose

This project accepts arithmetic commands from the terminal and prints the result. It supports basic operations for:

- multiply
- subtract
- add

## Files

- `cal.ts` — main calculator logic

## How to run

From the project folder, run:

```bash
node cal.ts multiply 12 3
```

Example commands:

```bash
node cal.ts multiply 12 3
node cal.ts subtract 100 25 10
node cal.ts add 20 5 2
```

## Supported operations

### multiply

```bash
node cal.ts multiply 12 3
```

Result:

```bash
Result: 36
```

### subtract

```bash
node cal.ts subtract 100 25 10
```

This calculates:

```text
100 - (25 + 10) = 65
```

### add

```bash
node cal.ts add 20 5 2
```

This calculates:

```text
(20 + 5) + 2 = 27
```

## Help command

```bash
node cal.ts --help
```

or

```bash
node cal.ts -h
```

This prints the usage instructions and examples.

## Input validation

The program validates:

- missing numbers
- invalid numeric values
- unsupported operations

If something is invalid, it prints an error message and exits with code 1.

## Notes

This is a lightweight single-file command-line tool intended for learning and basic terminal-based calculations.
