/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Returns the Cartesian product.
*
* ## Notes
*
* -   If provided one or more empty arrays, the function returns an empty array.
*
* @param x1 - first input array
* @param x2 - second input array
* @returns Cartesian product
*
* @example
* var x1 = [ 1, 2, 3 ];
* var x2 = [ 4, 5 ];
*
* var out = cartesianProduct( x1, x2 );
* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
*/
declare function cartesianProduct<T = unknown, U = unknown>( x1: Collection<T> | AccessorArrayLike<T>, x2: Collection<U> | AccessorArrayLike<U> ): Array<[T, U]>;


// EXPORTS //

export = cartesianProduct;
