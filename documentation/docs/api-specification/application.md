# Laravel Backend App

:::tip Tip for Students

Generated using [docblox2md](https://github.com/vphantom/docblox2md). Supports C++, Java, JavaScript, and PHP. 

:::

## User.php

<!-- BEGIN DOC-COMMENT H3 /workspaces/project-instructors/app/Models/User.php -->

### `protected $fillable = [ 'name', 'email', 'password', ]`

The attributes that are mass assignable.

### `protected $hidden = [ 'password', 'remember_token', ]`

The attributes that should be hidden for serialization.

### `protected $casts = [ 'email_verified_at' => 'datetime', ]`

The attributes that should be cast.

<!-- END DOC-COMMENT -->

## Fruit.php
<!-- BEGIN DOC-COMMENT H3 /workspaces/project-instructors/app/Models/Fruit.php -->
<!-- END DOC-COMMENT -->

## FruitController.php
<!-- BEGIN DOC-COMMENT H3 /workspaces/project-instructors/app/Http/Controllers/FruitController.php -->

### `public function store(Request $request)`

Handle POST events to create fruits.
**Parameters:**

* `$request` — `Request` — the request JSON object.

### `public function show($type)`

 Handle GET Requests to find all fruits that match a specified type.

**Parameters:**

* `$type` — `string` — String of the type of fruit requested.

### `public function update(Request $request, $fruitId)`

Handle PUT requests to update a specific fruit.
**Parameters:**

* `$request` — `Request` — the request JSON object.
* `$fruitId` — `UUID` — the unique ID of the fruit to be updated.

<!-- END DOC-COMMENT -->

## AppServiceProvider.php
<!-- BEGIN DOC-COMMENT H3 /workspaces/project-instructors/app/Providers/AppServiceProvider.php -->

### `public function register()`

Register any application services.

**Returns:** void

### `public function boot()`

Bootstrap any application services.

**Returns:** void

<!-- END DOC-COMMENT -->

## RouteServiceProvider.php
<!-- BEGIN DOC-COMMENT H3 /workspaces/project-instructors/app/Providers/RouteServiceProvider.php -->

### `public const HOME = '/home'`

The path to the "home" route for your application.

Typically, users are redirected here after authentication.

### `public function boot()`

Define your route model bindings, pattern filters, and other route configuration.

**Returns:** void

### `protected function configureRateLimiting()`

Configure the rate limiters for the application.

**Returns:** void

<!-- END DOC-COMMENT -->

## AuthServiceProvider.php
<!-- BEGIN DOC-COMMENT H3 /workspaces/project-instructors/app/Providers/AuthServiceProvider.php -->

### `protected $policies = [ // 'App\Models\Model' => 'App\Policies\ModelPolicy', ]`

The model to policy mappings for the application.

### `public function boot()`

Register any authentication / authorization services.

**Returns:** void

<!-- END DOC-COMMENT -->