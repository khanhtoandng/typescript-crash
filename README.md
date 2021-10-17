# TYPESCRIPT

## Type system

1. Overall

   - Shortcut to describe the different properties + method that single value has
   - Every value in typescipt has type
   - Pros:
     - Used by TS compiler to analyze code for erros
     - Allow other people to understand what values are flowing aroung codebase

2. Categories
   - Primitive types: number, string, boolean, void, undefined, symbol, null
   - Object types: functions, arrays, classes, objects

## Type annotations & type inference

> Make sure every value in code has a specific type by calculating throught type inference, or type annotation if it cant be inferred

### Variables

> The rule TS uses to decide if something is of a given type: if an object A has all the same properties/methods as the type B, then the object A is type B!

1. Type annotation

   - Dev tell TS what type of value a variable will refer to
   - Usage:
     - Declare a var on 1 line then initialize it later
     - Want a var to have a type that cant be inferred
     - function return 'any' type and we need to clarify the value

2. Type inference

   - TS tries to figure out what type of value a variable refers to
   - Rule: if declaration & initializzation are on the same line, TS will figure out the type of var

3. The 'any' type
   - TS has no idea what this is - cant check for correct property reference
   - Avoid at all costs variables with 'any' type

### Functions

1. Annotation

   - Dev tell TS what type of argument a func will receive and what type of values it will return

2. Inference

   - TS tries to figure out what type of value a func will return

3. void vs never

## Typed Arrays

> Arrays where each element is some consistent type of value

- Pros:
  - Type inference when extracting values from array
  - Prevent us from adding incompatible values to array
  - Help with 'map', 'reduce' function
  - Can still multiple different types

## Tuple

> Array-like structure where each element represent some property of a record - multiple different properties to describe one single thing

## Interface

> Creates a new type, describing the properties name and value types of an object

- Mechanism: TS will iterate throught all the properties of the interface and make sure object has the same properties with the same type.
  - Pros: a gatekeeper to access a function.

> Use when have very different object that we want to work together

## Class

> Blueprint to create an object with some properties and methods to represent a 'thing'

- Modifier:
  - public: can be called everywhere
  - private: can only be called by other methods in this class
  - protected: can be called by other methods in this class and child class

* Inheritance: 'extends'

  - Child class inherit all methods and properties of super class
  - Child class can override method of super class
  - Use 'super' to reference to the constructore in super class

* 'implements': TS check our class and make sure the class have all correct properties

* Abstract class:

  - Cant be used to create an object directly
  - only use as a super class
  - can contain real implementtation for some methods
  - The implemented method can refer to other un-implemented method but will exist
  - make child class promise to implement some other method

* Accessor

> Use when trying to build up a definition of an object

## JS Library

- Type definition file is going to tell TS compiler all the different functions that are available insise this JS library

- Flow: Typescript -> type definitions file -> JS library

- Syntax: @types/{libraryname}

## Enum

- Follow near-identical syntax rules as normal objects
- Create object with the same keys and values when convert from TS to JS
- signal to other engineer that these are all closely related values
- Use when we have a small fixed set of values(10-15) that are closely related and known at compile time

## Generics

- Like function arguments, but for types in class/function definitions
- Allows us to define the type of property/argument/return value at a future point
- Used heavily when writing reusable code

* Limit the type that we can pass in

## [x] Decorators

- Decorators on property, method. accessor:
  - 1st argument: prototype of object
  - 2nd argument: key of the method/property/accessor
  - 3rd argument:property desciptor
  - Decorator are applied when the code for this class is run

# Note

- The colon syntax is used when we want to annotate the type of (1) an argument or (2) a variable declaration. If we need to clarify the type of a variable anywhere else, we use the 'as' syntax.

* Avoid bind in ts
