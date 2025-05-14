/**
 * Copyright 2025-present Coinbase Global, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
type AnyObject = { [key: string]: any };

export function toSnakeCase<T>(obj: T, seen = new WeakSet()): T {
  if (obj === null || typeof obj !== 'object') return obj; // Handle non-object values

  // Prevent circular references
  if (seen.has(obj)) {
    throw new Error('Circular reference detected');
  }

  seen.add(obj);

  if (Array.isArray(obj)) {
    // Recursively handle arrays
    return obj.map((item) => toSnakeCase(item, seen)) as T;
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    // Convert camelCase key to snake_case
    const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();

    // Recursively process values if they are objects or arrays
    (acc as AnyObject)[snakeCaseKey] = toSnakeCase(value, seen);

    return acc;
  }, {} as T);
}
