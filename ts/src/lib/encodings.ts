/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { bytesToBase64 } from "./base64";

export class EncodingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EncodingError";
  }
}

export function encodeMatrix(
  key: string,
  value: unknown,
  options?: { explode?: boolean; charEncoding?: "percent" | "none" },
): string {
  let out = "";
  const pairs: [string, unknown][] = options?.explode
    ? explode(key, value)
    : [[key, value]];

  const encodeString = (v: string) => {
    return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
  };
  const encodeValue = (v: unknown) => encodeString(serializeValue(v));

  pairs.forEach(([pk, pv]) => {
    let tmp = "";
    let encValue = "";

    if (pv === undefined) {
      return;
    } else if (Array.isArray(pv)) {
      encValue = mapDefined(pv, (v) => `${encodeValue(v)}`).join(",");
    } else if (isPlainObject(pv)) {
      encValue = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
        return `,${encodeString(k)},${encodeValue(v)}`;
      }).join("");
      encValue = encValue.slice(1);
    } else {
      encValue = `${encodeValue(pv)}`;
    }

    const keyPrefix = encodeString(pk);
    tmp = `${keyPrefix}=${encValue}`;
    // trim trailing '=' if value was empty
    if (tmp === `${keyPrefix}=`) {
      tmp = tmp.slice(0, -1);
    }

    // If we end up with the nothing then skip forward
    if (!tmp) {
      return;
    }

    out += `;${tmp}`;
  });

  return out;
}

export function encodeLabel(
  key: string,
  value: unknown,
  options?: { explode?: boolean; charEncoding?: "percent" | "none" },
): string {
  let out = "";
  const pairs: [string, unknown][] = options?.explode
    ? explode(key, value)
    : [[key, value]];

  const encodeString = (v: string) => {
    return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
  };
  const encodeValue = (v: unknown) => encodeString(serializeValue(v));

  pairs.forEach(([pk, pv]) => {
    let encValue = "";

    if (pv === undefined) {
      return;
    } else if (Array.isArray(pv)) {
      encValue = mapDefined(pv, (v) => `${encodeValue(v)}`).join(".");
    } else if (isPlainObject(pv)) {
      encValue = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
        return `.${encodeString(k)}.${encodeValue(v)}`;
      }).join("");
      encValue = encValue.slice(1);
    } else {
      const k =
        options?.explode && isPlainObject(value) ? `${encodeString(pk)}=` : "";
      encValue = `${k}${encodeValue(pv)}`;
    }

    out += `.${encValue}`;
  });

  return out;
}

type FormEncoder = (
  key: string,
  value: unknown,
  options?: { explode?: boolean; charEncoding?: "percent" | "none" },
) => string;

function formEncoder(sep: string): FormEncoder {
  return (
    key: string,
    value: unknown,
    options?: { explode?: boolean; charEncoding?: "percent" | "none" },
  ) => {
    let out = "";
    const pairs: [string, unknown][] = options?.explode
      ? explode(key, value)
      : [[key, value]];

    const encodeString = (v: string) => {
      return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
    };

    const encodeValue = (v: unknown) => encodeString(serializeValue(v));

    const encodedSep = encodeString(sep);

    pairs.forEach(([pk, pv]) => {
      let tmp = "";
      let encValue = "";

      if (pv === undefined) {
        return;
      } else if (Array.isArray(pv)) {
        encValue = mapDefined(pv, (v) => `${encodeValue(v)}`).join(encodedSep);
      } else if (isPlainObject(pv)) {
        encValue = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
          return `${encodeString(k)}${encodedSep}${encodeValue(v)}`;
        }).join(encodedSep);
      } else {
        encValue = `${encodeValue(pv)}`;
      }

      tmp = `${encodeString(pk)}=${encValue}`;

      // If we end up with the nothing then skip forward
      if (!tmp || tmp === "=") {
        return;
      }

      out += `&${tmp}`;
    });

    return out.slice(1);
  };
}

export const encodeForm = formEncoder(",");
export const encodeSpaceDelimited = formEncoder(" ");
export const encodePipeDelimited = formEncoder("|");

export function encodeBodyForm(
  key: string,
  value: unknown,
  options?: { explode?: boolean; charEncoding?: "percent" | "none" },
): string {
  let out = "";
  const pairs: [string, unknown][] = options?.explode
    ? explode(key, value)
    : [[key, value]];

  const encodeString = (v: string) => {
    return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
  };

  const encodeValue = (v: unknown) => encodeString(serializeValue(v));

  pairs.forEach(([pk, pv]) => {
    let tmp = "";
    let encValue = "";

    if (pv === undefined) {
      return;
    } else if (Array.isArray(pv)) {
      encValue = JSON.stringify(pv, jsonReplacer);
    } else if (isPlainObject(pv)) {
      encValue = JSON.stringify(pv, jsonReplacer);
    } else {
      encValue = `${encodeValue(pv)}`;
    }

    tmp = `${encodeString(pk)}=${encValue}`;

    // If we end up with the nothing then skip forward
    if (!tmp || tmp === "=") {
      return;
    }

    out += `&${tmp}`;
  });

  return out.slice(1);
}

export function encodeDeepObject(
  key: string,
  value: unknown,
  options?: { charEncoding?: "percent" | "none" },
): string {
  if (value == null) {
    return "";
  }

  let out = "";

  const encodeString = (v: string) => {
    return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
  };

  if (!isPlainObject(value)) {
    throw new EncodingError(
      `Value of parameter '${key}' which uses deepObject encoding must be an object`,
    );
  }

  Object.entries(value).forEach(([ck, cv]) => {
    if (cv === undefined) {
      return;
    }

    const pk = `${key}[${ck}]`;

    if (isPlainObject(cv)) {
      throw new EncodingError(
        `Value of parameter field '${pk}' cannot be an array or object.`,
      );
    }

    const pairs: unknown[] = Array.isArray(cv) ? cv : [cv];
    let encoded = "";

    encoded = mapDefined(pairs, (v) => {
      return `${encodeString(pk)}=${encodeString(serializeValue(v))}`;
    }).join("&");

    out += `&${encoded}`;
  });

  return out.slice(1);
}

export function encodeJSON(
  key: string,
  value: unknown,
  options?: { explode?: boolean; charEncoding?: "percent" | "none" },
): string {
  if (typeof value === "undefined") {
    return "";
  }

  const encodeString = (v: string) => {
    return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
  };

  const encVal = encodeString(JSON.stringify(value, jsonReplacer));

  return options?.explode ? encVal : `${encodeString(key)}=${encVal}`;
}

export const encodeSimple = (
  key: string,
  value: unknown,
  options?: { explode?: boolean; charEncoding?: "percent" | "none" },
): string => {
  let out = "";
  const pairs: [string, unknown][] = options?.explode
    ? explode(key, value)
    : [[key, value]];

  const encodeString = (v: string) => {
    return options?.charEncoding === "percent" ? encodeURIComponent(v) : v;
  };
  const encodeValue = (v: unknown) => encodeString(serializeValue(v));

  pairs.forEach(([pk, pv]) => {
    let tmp = "";

    if (pv === undefined) {
      return;
    } else if (Array.isArray(pv)) {
      tmp = mapDefined(pv, (v) => `${encodeValue(v)}`).join(",");
    } else if (isPlainObject(pv)) {
      tmp = mapDefinedEntries(Object.entries(pv), ([k, v]) => {
        return `,${encodeString(k)},${encodeValue(v)}`;
      }).join("");
      tmp = tmp.slice(1);
    } else {
      const k = options?.explode && isPlainObject(value) ? `${pk}=` : "";
      tmp = `${k}${encodeValue(pv)}`;
    }

    // If we end up with the nothing then skip forward
    if (!tmp) {
      return;
    }

    out += `,${tmp}`;
  });

  return out.slice(1);
};

function explode(key: string, value: unknown): [string, unknown][] {
  if (Array.isArray(value)) {
    return value.map((v) => [key, v]);
  } else if (isPlainObject(value)) {
    const o = value ?? {};
    return Object.entries(o).map(([k, v]) => [k, v]);
  } else {
    return [[key, value]];
  }
}

function isPlainObject(value: unknown): value is object {
  if (typeof value !== "object" || value == null) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

function serializeValue(value: unknown): string {
  if (value === null) {
    return "null";
  } else if (typeof value === "undefined") {
    return "";
  } else if (value instanceof Date) {
    return value.toISOString();
  } else if (value instanceof Uint8Array) {
    return bytesToBase64(value);
  } else if (typeof value === "object") {
    return JSON.stringify(value, jsonReplacer);
  }

  return `${value}`;
}

function jsonReplacer(_: string, value: unknown): unknown {
  if (value instanceof Uint8Array) {
    return bytesToBase64(value);
  } else {
    return value;
  }
}

function mapDefined<T, R>(inp: T[], mapper: (v: T) => R): R[] {
  return inp.reduce<R[]>((acc, v) => {
    if (v === undefined) {
      return acc;
    }

    const m = mapper(v);
    if (m === undefined) {
      return acc;
    }

    acc.push(m);

    return acc;
  }, []);
}

function mapDefinedEntries<K, V, R>(
  inp: Iterable<[K, V]>,
  mapper: (v: [K, V]) => R,
): R[] {
  const acc: R[] = [];
  for (const [k, v] of inp) {
    if (v === undefined) {
      continue;
    }

    const m = mapper([k, v]);
    if (m === undefined) {
      continue;
    }

    acc.push(m);
  }

  return acc;
}
