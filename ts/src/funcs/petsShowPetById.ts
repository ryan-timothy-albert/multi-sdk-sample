/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { RyTsCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Info for a specific pet
 */
export async function petsShowPetById(
  client: RyTsCore,
  petId: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.ShowPetByIdResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input: operations.ShowPetByIdRequest = {
    petId: petId,
  };

  const parsed = safeParse(
    input,
    (value) => operations.ShowPetByIdRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    petId: encodeSimple("petId", payload.petId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/pets/{petId}")(pathParams);

  const headers = new Headers({
    Accept: "application/json",
  });

  const context = {
    operationID: "showPetById",
    oAuth2Scopes: [],

    resolvedSecurity: null,

    securitySource: null,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    method: "GET",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.ShowPetByIdResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.ShowPetByIdResponse$inboundSchema, { key: "Pet" }),
    M.fail(["4XX", "5XX"]),
    M.json("default", operations.ShowPetByIdResponse$inboundSchema, {
      key: "Error",
    }),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
