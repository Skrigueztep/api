# API

A base API Project Structure

# Versioning System

-   Semantic versioning

# Notes for implementation

#### Project variables configuration

   You can add your own variables on environment.ts config file (similar to Angular
    environments file)

#### API

   For a scalable, testable and maintainable code, we suggest you use:
   TDD (Test Driven Design) or DDD (Domain Driven Design).
   
   You can add all your node application routes in:
   this._router.use(); on api.ts
   
   Or import your routes file to api.ts and add its at <code>router.use()</code>,
   ej.: <br>
       <code>this._router.use(new myCustomRoutes().configRoutes());</code>
       
   Where configRoutes method return express.Router (configRoutes(): Router)
